import Section from './Section.jsx'
import { interests } from '../profile.js'

export default function Interests() {
  return (
    <Section
      id="interests"
      index="06"
      eyebrow="Interests & goals"
      title="Questions that motivate me"
      lede={interests.intro}
      tone="dark"
    >
      <ol className="interests">
        {interests.themes.map((t, i) => (
          <li key={t.title} className="interest">
            <span className="interest__num" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </li>
        ))}
      </ol>
      <blockquote className="goal">
        <p>{interests.goal}</p>
      </blockquote>
    </Section>
  )
}
