import CapsidIllustration from './CapsidIllustration.jsx'
import Icon from './Icon.jsx'
import { profile, contact } from '../profile.js'

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__affiliation">
            <span className="dot" aria-hidden="true" />
            {profile.affiliation}
          </p>
          <h1 id="hero-title" className="hero__name">
            {profile.name}
          </h1>
          <p className="hero__role">
            {profile.title}
            <span className="hero__sep" aria-hidden="true">|</span>
            <span className="hero__focus">{profile.focus}</span>
          </p>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#research">
              Explore my research <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn--ghost" href="#projects">
              View projects
            </a>
            <a className="btn btn--icon" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in new tab)">
              <Icon name="github" size={20} />
            </a>
          </div>

          <ul className="hero__keywords" aria-label="Research keywords">
            {profile.keywords.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </div>

        <figure className="hero__art">
          <CapsidIllustration />
          <figcaption>Schematic icosahedral capsid · illustrative, not experimental data</figcaption>
        </figure>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <Icon name="chevron" size={20} />
      </a>
    </section>
  )
}
