import { Mail } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import Section from './Section'
import { LinkedinIcon } from './BrandIcons'

export default function Contact() {
  return (
    <Section id="contact" command="ssh contact@nidish.xyz">
      <div className="panel contact-panel">
        <p className="term-line">
          <span className="prompt">&gt;</span> Connection established. Say hello:
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="mailto:admin@nidish.xyz" aria-label="Email Nidish">
            <Mail size={16} aria-hidden="true" /> admin@nidish.xyz
          </a>
          <a
            className="btn"
            href="https://github.com/NidPlays"
            rel="noopener"
            aria-label="Nidish on GitHub"
          >
            <SiGithub size={16} aria-hidden="true" /> NidPlays
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/nidish-g/"
            rel="noopener"
            aria-label="Nidish on LinkedIn"
          >
            <LinkedinIcon size={16} /> nidish-g
          </a>
        </div>
      </div>
    </Section>
  )
}
