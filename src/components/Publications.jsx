import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { publications } from '../profile.js'

/** Expandable categories; empty categories show a placeholder instead of invented entries. */
export default function Publications() {
  const total = publications.reduce((n, c) => n + c.entries.length, 0)

  return (
    <Section
      id="publications"
      index="07"
      eyebrow="Publications"
      title="Publications, presentations & communication"
      lede={
        total === 0
          ? 'My research is in progress. Verified publications, posters, and presentations will be listed here as they are completed.'
          : undefined
      }
      tone="alt"
    >
      <div className="pubs">
        {publications.map((cat, i) => (
          <details key={cat.category} className="pub-group" open={i === 0 || cat.entries.length > 0}>
            <summary>
              <span>{cat.category}</span>
              <span className="pub-group__count">{cat.entries.length || '—'}</span>
              <Icon name="chevron" size={18} className="pub-group__chevron" />
            </summary>
            {cat.entries.length === 0 ? (
              <p className="empty">No entries yet — forthcoming.</p>
            ) : (
              <ol className="pub-list">
                {cat.entries.map((e) => (
                  <li key={e.title}>
                    <p className="pub-list__title">
                      {e.url ? (
                        <a href={e.url} target="_blank" rel="noreferrer">
                          {e.title}
                        </a>
                      ) : (
                        e.title
                      )}
                    </p>
                    {e.authors && <p className="pub-list__meta">{e.authors}</p>}
                    <p className="pub-list__meta">
                      {[e.venue, e.year].filter(Boolean).join(' · ')}
                      {e.note && ` — ${e.note}`}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </details>
        ))}
      </div>
    </Section>
  )
}
