import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Shots from './components/Shots'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Shots />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
