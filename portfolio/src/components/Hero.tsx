export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          src="/img/DSCF0829.jpg"
          alt="Dusk over a highway — pink cumulus breaking up above a line of palms"
          width={2000}
          height={1125}
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="hero-inner">
        <p className="hero-meta meta">
          <span>Bengaluru, India</span>
          <span className="dot" aria-hidden="true" />
          <span>Software engineer — Gen AI</span>
        </p>

        <h1 className="hero-name">Nidish</h1>

        <p className="hero-line">
          I build Gen AI agents and the data platforms underneath them. Most evenings I'm
          outside with a camera, pointed at the sky.
        </p>

        <div className="hero-actions">
          <a className="btn primary" href="#work">
            See the work
          </a>
          <a className="btn" href="#photographs">
            Photographs
          </a>
        </div>
      </div>
    </section>
  )
}
