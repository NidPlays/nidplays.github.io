import Section from './Section'

export default function About() {
  return (
    <Section id="about" command="cat about.txt">
      <div className="panel about-panel">
        <img
          className="avatar"
          src="/img/nidish.jpg"
          alt="Portrait of Nidish"
          width="120"
          height="120"
          loading="lazy"
        />
        <div>
          <p>
            Hi, I'm <strong>Nidish</strong> — a software engineer working on Gen AI and
            data platforms, and capturing the world through a lens on the side.
          </p>
          <p>
            These days I build agentic systems and data pipelines; I still enjoy dark color
            schemes and the occasional long drive with a camera on the passenger seat. This
            site is my corner of the internet: a portfolio up front, a{' '}
            <a href="/blog/">blog</a> in the back, and a <a href="/resume/">resume</a> if
            you want the formal version.
          </p>
          <p className="dim"># currently: building agents, moving data, writing</p>
        </div>
      </div>
    </Section>
  )
}
