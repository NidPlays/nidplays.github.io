import { useState } from 'react'
import { BookOpen, Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: './about' },
  { href: '#skills', label: './skills' },
  { href: '#projects', label: './projects' },
  { href: '#shots', label: './shots' },
  { href: '#contact', label: './contact' },
  { href: '/resume/', label: './resume' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        <a className="brand" href="#top">
          nidish<span className="dim">@portfolio</span>
          <span className="accent">:~$</span>
        </a>
        <nav aria-label="Main navigation">
          <ul className={`nav-links${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a className="btn-blog" href="/blog/">
                blog <BookOpen size={14} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
