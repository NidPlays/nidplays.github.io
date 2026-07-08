import { useEffect, useState } from 'react'
import { BookOpen, Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: './about' },
  { href: '#skills', label: './skills' },
  { href: '#projects', label: './projects' },
  { href: '#shots', label: './shots' },
  { href: '#contact', label: './contact' },
  { href: '/resume/', label: './resume' },
]

const sectionIds = ['about', 'skills', 'projects', 'shots', 'contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // close the menu on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

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
        {open && (
          <div className="nav-scrim" aria-hidden="true" onClick={() => setOpen(false)} />
        )}
        <nav aria-label="Main navigation">
          <ul className={`nav-links${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? 'active' : undefined}
                  aria-current={active === link.href ? 'true' : undefined}
                >
                  {link.label}
                </a>
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
