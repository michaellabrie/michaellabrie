import { useEffect, useRef } from 'react'

/**
 * Standard page section: anchor id, eyebrow number, heading, optional lede,
 * and a gentle fade-up reveal when scrolled into view.
 */
export default function Section({ id, index, eyebrow, title, lede, tone, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      el?.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id={id} className={`section ${tone ? `section--${tone}` : ''}`} aria-labelledby={`${id}-title`}>
      <div className="container reveal" ref={ref}>
        <header className="section__header">
          <p className="eyebrow">
            {index && <span className="eyebrow__index">{index}</span>}
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
          {lede && <p className="section__lede">{lede}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
