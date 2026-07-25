import { ArrowUpRight } from 'lucide-react'
import Section from './Section'

const work = [
  {
    title: 'This site',
    year: '2026',
    desc: 'A React and Vite front end with a Zensical blog behind it, sharing one set of design tokens so the two halves read as a single thing. One build script assembles both and ships them to GitHub Pages and Netlify.',
    stack: ['React', 'Vite', 'TypeScript', 'Zensical'],
    href: 'https://github.com/NidPlays/nidplays.github.io',
    go: 'View source',
  },
  {
    title: 'Everything else',
    year: 'ongoing',
    desc: 'Experiments, scripts and half-finished ideas. New things land on GitHub before they land anywhere else.',
    stack: ['Python', 'TypeScript', 'Terraform'],
    href: 'https://github.com/NidPlays',
    go: 'github.com/NidPlays',
  },
]

export default function Work() {
  return (
    <Section id="work" title="Work" lead="What's public, at least.">
      <ul className="work-list">
        {work.map((item) => (
          <li className="work-item" key={item.title}>
            <a className="work-link" href={item.href} rel="noopener">
              <div>
                <h3 className="work-title">{item.title}</h3>
                <p className="meta">{item.year}</p>
              </div>
              <div>
                <p className="work-desc">{item.desc}</p>
                <ul className="stack">
                  {item.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <span className="work-go">
                {item.go} <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
