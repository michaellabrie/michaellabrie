import Section from './Section.jsx'
import { education } from '../profile.js'

export default function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education" title="Education & scientific development">
      <div className="education">
        <div>
          <h3 className="subhead">Academic</h3>
          {education.institutions.map((inst) => (
            <article key={inst.name} className="edu-card">
              <p className="edu-card__org">{inst.name}</p>
              <h4>{inst.degree}</h4>
              {inst.dates && <p className="edu-card__dates">{inst.dates}</p>}
              <ul className="tags">
                {inst.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div>
          <h3 className="subhead">Research development</h3>
          <ol className="timeline">
            {education.development.map((item) => (
              <li key={item.name}>
                <span className="timeline__dot" aria-hidden="true" />
                <div>
                  <h4>
                    {item.name}
                    {item.dates && <span className="timeline__dates">{item.dates}</span>}
                  </h4>
                  <p className="timeline__org">{item.org}</p>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
            {education.milestones.map((m) => (
              <li key={m.title}>
                <span className="timeline__dot" aria-hidden="true" />
                <div>
                  <h4>
                    {m.title}
                    {m.year && <span className="timeline__dates">{m.year}</span>}
                  </h4>
                  {m.org && <p className="timeline__org">{m.org}</p>}
                </div>
              </li>
            ))}
            {education.milestones.length === 0 && (
              <li className="timeline__future">
                <span className="timeline__dot" aria-hidden="true" />
                <p>Fellowships, presentations, certifications, and other milestones will appear here.</p>
              </li>
            )}
          </ol>
        </div>
      </div>
    </Section>
  )
}
