import { ArrowRight, GitCommitHorizontal } from 'lucide-react'
import Section from './Section'

const projects = [
  {
    hash: 'a1b2c3d',
    title: 'this website',
    text: (
      <>
        A terminal-themed React + Vite portfolio plus a blog powered by{' '}
        <a href="https://zensical.org" rel="noopener">
          Zensical
        </a>
        , deployed on GitHub Pages and Netlify.
      </>
    ),
    tags: ['React', 'Vite', 'Zensical'],
    link: { href: 'https://github.com/NidPlays/nidplays.github.io', label: 'view source' },
  },
  {
    hash: 'e4f5a6b',
    title: 'more on github',
    text: (
      <>
        Experiments, scripts and works-in-progress live on my GitHub profile — new things
        land there first.
      </>
    ),
    tags: ['WIP', 'open source'],
    link: { href: 'https://github.com/NidPlays', label: 'github.com/NidPlays' },
  },
]

export default function Projects() {
  return (
    <Section id="projects" command="git log ./projects">
      <div className="grid two">
        {projects.map((project) => (
          <div className="panel card" key={project.hash}>
            <p className="commit dim">
              <GitCommitHorizontal size={14} aria-hidden="true" /> commit{' '}
              <span className="accent">{project.hash}</span>
            </p>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a className="card-link" href={project.link.href} rel="noopener">
              {project.link.label} <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
