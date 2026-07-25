import { Mail } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { LinkedinIcon } from './BrandIcons'
import { useReveal } from '../hooks'

export default function Contact() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="contact" className="contact wrap reveal" ref={ref}>
      <h2 className="contact-statement">
        Happy to talk about agents, data platforms, or where to find a decent sky.
      </h2>

      <ul className="contact-list">
        <li>
          <a href="mailto:admin@nidish.xyz">
            <Mail size={16} aria-hidden="true" />
            admin@nidish.xyz
          </a>
        </li>
        <li>
          <a href="https://github.com/NidPlays" rel="noopener">
            <SiGithub size={16} aria-hidden="true" />
            github.com/NidPlays
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nidish-g/" rel="noopener">
            <LinkedinIcon size={16} />
            linkedin.com/in/nidish-g
          </a>
        </li>
      </ul>
    </section>
  )
}
