import { useEffect, useState, type ReactNode } from 'react'
import { Menu, X } from 'lucide-react'

export interface NavItem {
  href: string
  label: string
  /** id of the section this item points at, for the current-section marker */
  sectionId?: string
  cta?: boolean
}

interface NavProps {
  items: NavItem[]
  /** id of the section currently in view */
  active?: string
  /** extra row rendered at the end of the list (e.g. the resume print button) */
  trailing?: ReactNode
  brandHref?: string
  scrolled?: boolean
}

const MOBILE = 780

export default function Nav({
  items,
  active = '',
  trailing,
  brandHref = '#top',
  scrolled = false,
}: NavProps) {
  const [open, setOpen] = useState(false)

  // Escape closes the sheet
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // the sheet only exists below the breakpoint; leaving it "open" past that
  // width would strand the scroll lock
  useEffect(() => {
    if (!open) return
    const onResize = () => {
      if (window.innerWidth > MOBILE) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  // hold the page still behind the open sheet
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <header className={`nav${scrolled ? ' is-stuck' : ''}`}>
      <div className="wrap nav-inner">
        <a className="brand" href={brandHref}>
          Nidish
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>

        {open ? (
          <button
            type="button"
            className="nav-scrim"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
        ) : null}

        <nav aria-label="Main">
          <ul
            id="nav-menu"
            className={`nav-links${open ? ' is-open' : ''}`}
            onClick={() => setOpen(false)}
          >
            {items.map((item) => {
              const current = item.sectionId != null && item.sectionId === active
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={item.cta ? 'nav-cta' : undefined}
                    aria-current={current ? 'true' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
            {trailing ? <li>{trailing}</li> : null}
          </ul>
        </nav>
      </div>
    </header>
  )
}
