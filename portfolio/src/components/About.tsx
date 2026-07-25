import Section from './Section'

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      lead="Engineer by trade, and stubborn about the parts of a system nobody sees."
    >
      <div className="about-grid">
        <figure className="portrait">
          <img
            src="/img/nidish.jpg"
            alt="Nidish, standing against a brick wall"
            width={2000}
            height={1999}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 800px) 20rem, 100vw"
          />
          <figcaption className="meta">Nidish G — Bengaluru</figcaption>
        </figure>

        <div className="about-body">
          <p className="prose">
            I work on a Gen AI team, which in practice means most of my time goes to the
            unglamorous half of the problem: the SDKs, the routing, the fallbacks, the
            pipelines that still have to hold when a model doesn't.
          </p>
          <p className="prose">
            Before that I was a data engineer — ETL on AWS Glue, warehouses on Redshift, and
            an entire data infrastructure moved into Terraform. That work is the reason I
            trust systems I could rebuild from scratch, and distrust the ones I couldn't.
          </p>
          <p className="prose">
            Away from the screen I photograph the sky, mostly at the ends of the day. It's
            the one subject that never gives you the same frame twice. There's a{' '}
            <a href="/blog/">blog</a> where I write things down, and a{' '}
            <a href="/resume/">résumé</a> if you want the formal version.
          </p>

          <dl className="about-now">
            <dt className="meta">Currently</dt>
            <dd>building agents</dd>
            <dd>moving data</dd>
            <dd>writing</dd>
          </dl>
        </div>
      </div>
    </Section>
  )
}
