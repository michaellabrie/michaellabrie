import Section from './Section.jsx'
import { research } from '../profile.js'

export default function Research() {
  return (
    <Section
      id="research"
      index="02"
      eyebrow="Research"
      title="Three complementary directions"
      lede="Experimental and computational structural biology, plus the emerging technologies I hope to work on next."
      tone="alt"
    >
      <div className="research">
        {research.map((area) => (
          <article key={area.id} className={`research-area research-area--${area.id}`}>
            <div className="research-area__head">
              <span className="research-area__label" aria-hidden="true">
                {area.label}
              </span>
              <div>
                <p className="research-area__status">{area.status}</p>
                <h3>{area.title}</h3>
              </div>
            </div>
            <p className="research-area__summary">{area.summary}</p>
            <ul className="research-area__list">
              {area.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
