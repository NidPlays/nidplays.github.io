import Section from './Section'

const practice = [
  {
    term: 'Gen AI & agents',
    desc: 'Agentic systems and RAG pipelines, plus the plumbing that makes them usable by other teams — internal SDKs and wrappers over google-adk, LangChain and A2A, smart routing and fallback strategies for LLM proxy services, enterprise chat on Gemini Enterprise.',
    stack: ['Python', 'RAG', 'MCP', 'A2A', 'LangChain', 'google-adk'],
  },
  {
    term: 'Data engineering',
    desc: 'ETL on AWS Glue, warehousing on Redshift, and infrastructure defined in Terraform with CI/CD around it. Pipelines built to be re-run rather than babysat — including a reverse-geocoding job that chewed through 1.6 million field boundaries across 18 countries.',
    stack: ['SQL', 'Redshift', 'AWS Glue', 'Airflow', 'Terraform'],
  },
  {
    term: 'Photography',
    desc: 'Landscapes, streets, and a great deal of sky. Shot on Fujifilm, graded and cut end to end — the same instinct as the engineering, aimed at something that does not have a spec.',
    stack: ['Fujifilm', 'Lightroom', 'Premiere'],
  },
]

export default function Practice() {
  return (
    <Section
      id="practice"
      title="What I do"
      lead="Three things, and they inform each other more than you'd expect."
    >
      <dl className="index-list">
        {practice.map((item) => (
          <div className="index-row" key={item.term}>
            <dt className="index-term">{item.term}</dt>
            <dd className="index-desc">
              {item.desc}
              <ul className="stack">
                {item.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
