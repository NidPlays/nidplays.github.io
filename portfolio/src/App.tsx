import Nav, { type NavItem } from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Practice from './components/Practice'
import Work from './components/Work'
import Photographs from './components/Photographs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useActiveSection, useScrolled } from './hooks'

const items: NavItem[] = [
  { href: '#about', label: 'About', sectionId: 'about' },
  { href: '#practice', label: 'What I do', sectionId: 'practice' },
  { href: '#work', label: 'Work', sectionId: 'work' },
  { href: '#photographs', label: 'Photographs', sectionId: 'photographs' },
  { href: '#contact', label: 'Contact', sectionId: 'contact' },
  { href: '/resume/', label: 'Résumé' },
  { href: '/blog/', label: 'Blog', cta: true },
]

const sectionIds = items
  .map((item) => item.sectionId)
  .filter((id): id is string => id != null)

export default function App() {
  const scrolled = useScrolled(120)
  const active = useActiveSection(sectionIds)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <Nav items={items} active={active} scrolled={scrolled} />
      <main id="main">
        <div id="top" />
        <Hero />
        <About />
        <Practice />
        <Work />
        <Photographs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
