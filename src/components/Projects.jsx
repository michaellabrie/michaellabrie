import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { projects } from '../profile.js'

const LINK_LABELS = {
  github: 'Code',
  publication: 'Publication',
  poster: 'Poster',
  figure: 'Figure',
}

/** A project card. Optional `figure` and `links` render only when provided. */
function ProjectCard({ project }) {
  const links = Object.entries(project.links || {}).filter(([, url]) => url)
  return (
    <article className={`project project--${project.statusType}`}>
      {project.figure && (
        <figure className="project__figure">
          <img src={project.figure.src} alt={project.figure.alt} loading="lazy" />
          {project.figure.caption && <figcaption>{project.figure.caption}</figcaption>}
        </figure>
      )}
      <p className="badge">
        <span className="badge__dot" aria-hidden="true" />
        {project.status}
      </p>
      <h3 className="project__title">{project.title}</h3>
      <p className="project__summary">{project.summary}</p>
      <ul className="tags" aria-label="Themes">
        {project.themes.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {links.length > 0 && (
        <div className="project__links">
          {links.map(([type, url]) => (
            <a key={type} href={url} target="_blank" rel="noreferrer">
              {LINK_LABELS[type] || type} <Icon name="external" size={14} />
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Research projects"
      lede="Current work, ongoing training, and directions I intend to pursue. Each status label reflects where the project actually stands."
    >
      <div className="projects">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  )
}
