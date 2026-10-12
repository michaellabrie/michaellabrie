import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { contact } from '../profile.js'

export default function Contact() {
  const items = [
    {
      icon: 'github',
      label: 'GitHub',
      value: contact.github && contact.github.replace('https://', ''),
      href: contact.github,
      external: true,
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: contact.linkedin && 'View profile',
      href: contact.linkedin,
      external: true,
    },
    {
      icon: 'mail',
      label: 'Email',
      value: contact.email,
      href: contact.email && `mailto:${contact.email}`,
    },
    {
      icon: 'file',
      label: 'Curriculum vitae',
      value: contact.cv && 'Download CV (PDF)',
      href: contact.cv,
      external: true,
    },
  ]

  return (
    <Section
      id="contact"
      index="08"
      eyebrow="Contact"
      title="Let’s connect"
      lede="I welcome conversations with researchers, mentors, and fellow students interested in structural virology, bioinformatics, and biotechnology."
    >
      <ul className="contact">
        {items.map((it) =>
          it.href ? (
            <li key={it.label}>
              <a
                className="contact__card"
                href={it.href}
                {...(it.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <Icon name={it.icon} size={22} />
                <span className="contact__label">{it.label}</span>
                <span className="contact__value">{it.value}</span>
              </a>
            </li>
          ) : (
            <li key={it.label}>
              <div className="contact__card contact__card--pending">
                <Icon name={it.icon} size={22} />
                <span className="contact__label">{it.label}</span>
                <span className="contact__value">Coming soon</span>
              </div>
            </li>
          ),
        )}
      </ul>
    </Section>
  )
}
