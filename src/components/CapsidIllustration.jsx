import { useEffect, useMemo, useState } from 'react'

/**
 * Abstract, schematic icosahedral capsid (T=1-like symmetry, as in parvoviruses).
 * Pure geometry rendered as SVG — intentionally stylized so it is never mistaken
 * for experimental data. Rotates slowly; static when reduced motion is preferred.
 */

const PHI = (1 + Math.sqrt(5)) / 2

// 12 icosahedron vertices
const VERTICES = [
  [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
  [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
  [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1],
].map(([x, y, z]) => {
  const n = Math.hypot(x, y, z)
  return [x / n, y / n, z / n]
})

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])
const EDGE = Math.min(...VERTICES.slice(1).map((v) => dist(VERTICES[0], v)))
const adjacent = (i, j) => Math.abs(dist(VERTICES[i], VERTICES[j]) - EDGE) < 1e-6

// 20 triangular faces (each = one icosahedral asymmetric-unit "trimer" region)
const FACES = []
for (let i = 0; i < 12; i++)
  for (let j = i + 1; j < 12; j++)
    for (let k = j + 1; k < 12; k++)
      if (adjacent(i, j) && adjacent(j, k) && adjacent(i, k)) FACES.push([i, j, k])

function rotate([x, y, z], ax, ay) {
  // rotate around Y then X
  const cy = Math.cos(ay), sy = Math.sin(ay)
  const x1 = x * cy + z * sy
  const z1 = -x * sy + z * cy
  const cx = Math.cos(ax), sx = Math.sin(ax)
  return [x1, y * cx - z1 * sx, y * sx + z1 * cx]
}

const LIGHT = (() => {
  const l = [-0.4, -0.6, 0.7]
  const n = Math.hypot(...l)
  return l.map((c) => c / n)
})()

export default function CapsidIllustration({ size = 420 }) {
  const [angle, setAngle] = useState(0.6)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) return
    let frame
    let last = performance.now()
    const tick = (now) => {
      const dt = Math.min(now - last, 64)
      last = now
      setAngle((a) => a + dt * 0.00012)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  const R = size * 0.36
  const c = size / 2

  const shapes = useMemo(() => {
    const pts = VERTICES.map((v) => rotate(v, 0.35, angle))
    const project = ([x, y]) => [c + x * R, c + y * R]

    return FACES.map((f) => {
      const [a, b, d] = f.map((i) => pts[i])
      const centroid = [0, 1, 2].map((i) => (a[i] + b[i] + d[i]) / 3)
      const depth = centroid[2]
      const front = depth > 0
      const shade = Math.max(0, centroid[0] * LIGHT[0] + centroid[1] * LIGHT[1] + centroid[2] * LIGHT[2])
      // three subunits per face, pulled toward each vertex
      const subunits = [a, b, d].map((v) => {
        const p = centroid.map((cc, i) => cc + (v[i] - cc) * 0.42)
        return project(p)
      })
      return {
        key: f.join('-'),
        depth,
        front,
        shade,
        poly: [a, b, d].map(project).map((p) => p.join(',')).join(' '),
        subunits,
      }
    }).sort((x, y) => x.depth - y.depth)
  }, [angle, R, c])

  return (
    <svg
      className="capsid"
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="Abstract illustration of an icosahedral viral capsid"
    >
      <defs>
        <radialGradient id="capsid-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={c} cy={c} r={size * 0.49} fill="url(#capsid-glow)" />
      {[0.44, 0.48].map((r, i) => (
        <circle
          key={r}
          cx={c}
          cy={c}
          r={size * r}
          fill="none"
          stroke="var(--line-strong)"
          strokeWidth="1"
          strokeDasharray={i ? '2 7' : '1 4'}
        />
      ))}

      {shapes.map((s) => (
        <g key={s.key} opacity={s.front ? 1 : 0.22}>
          <polygon
            points={s.poly}
            fill="var(--capsid-face)"
            fillOpacity={s.front ? 0.25 + s.shade * 0.55 : 0.08}
            stroke="var(--capsid-edge)"
            strokeWidth={s.front ? 1.1 : 0.6}
            strokeLinejoin="round"
          />
          {s.front &&
            s.subunits.map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={R * 0.06}
                fill="var(--capsid-node)"
                fillOpacity={0.45 + s.shade * 0.55}
              />
            ))}
        </g>
      ))}
    </svg>
  )
}
