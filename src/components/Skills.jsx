import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { skills } from '../profile.js'

export default function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Methods"
      title="Technical skills & methods"
      lede={skills.note}
      tone="alt"
    >
      <div className="skills">
        {skills.categories.map((cat) => (
          <article key={cat.title} className="skill-group">
            <div className="skill-group__head">
              <span className="skill-group__icon">
                <Icon name={cat.icon} size={22} />
              </span>
              <h3>{cat.title}</h3>
            </div>
            <ul>
              {cat.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
