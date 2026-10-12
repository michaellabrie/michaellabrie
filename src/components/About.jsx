import Section from './Section.jsx'
import { about } from '../profile.js'

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Curious about how structure shapes biology">
      <div className="about">
        <div className="about__text">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'lead' : undefined}>
              {p}
            </p>
          ))}
        </div>
        <dl className="about__facts">
          {about.highlights.map((h) => (
            <div key={h.label} className="fact">
              <dt>{h.label}</dt>
              <dd>{h.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
