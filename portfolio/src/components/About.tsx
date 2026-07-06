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
            Hi, I'm <strong>Nidish</strong> — a developer and designer who likes building
            things for the web and capturing the world through a lens.
          </p>
          <p>
            I enjoy clean interfaces, dark color schemes, and the occasional long drive with
            a camera on the passenger seat. This site is my corner of the internet: a
            portfolio up front, a <a href="/blog/">blog</a> in the back.
          </p>
          <p className="dim"># currently: building, learning, writing</p>
        </div>
      </div>
    </Section>
  )
}
