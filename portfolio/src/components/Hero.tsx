import { BookOpen, FolderGit2 } from 'lucide-react'
import { useTypewriter } from '../hooks'

const roles = ['a Developer.', 'a Designer.', 'a Photographer.', 'a Thinker.']

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section className="hero container">
      <div className="term-window">
        <div className="term-bar">
          <span className="term-dot red" />
          <span className="term-dot yellow" />
          <span className="term-dot green" />
          <span className="term-title">nidish@portfolio: ~</span>
        </div>
        <div className="term-body">
          <p className="term-line">
            <span className="prompt">nidish@portfolio:~$</span> whoami
          </p>
          <h1 className="term-output">
            Nidish<span className="accent">.</span>
          </h1>
          <p className="term-line">
            <span className="prompt">nidish@portfolio:~$</span> cat role.txt
          </p>
          <p className="term-output typed-wrap">
            &gt; {typed}
            <span className="cursor" aria-hidden="true">
              &nbsp;
            </span>
          </p>
          <p className="term-line">
            <span className="prompt">nidish@portfolio:~$</span> ./explore.sh
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              <FolderGit2 size={16} aria-hidden="true" /> view projects
            </a>
            <a className="btn" href="/blog/">
              <BookOpen size={16} aria-hidden="true" /> read the blog
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
