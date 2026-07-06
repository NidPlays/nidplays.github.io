import { Bot, Camera, DatabaseZap } from 'lucide-react'
import Section from './Section'

const skills = [
  {
    icon: Bot,
    title: 'gen ai & agents',
    text: 'Agentic systems, RAG pipelines and LLM tooling — from internal SDKs to enterprise chat.',
    tags: ['Python', 'RAG', 'MCP', 'A2A', 'Prompt Engineering'],
  },
  {
    icon: DatabaseZap,
    title: 'data engineering',
    text: 'ETL pipelines, warehousing and infrastructure as code on the cloud.',
    tags: ['SQL', 'Redshift', 'AWS Glue', 'Airflow', 'Terraform'],
  },
  {
    icon: Camera,
    title: 'photography & video',
    text: 'Landscapes, streets and skies — shot, graded and edited end to end.',
    tags: ['Lightroom', 'Premiere', 'Fujifilm'],
  },
]

export default function Skills() {
  return (
    <Section id="skills" command="ls ./skills">
      <div className="grid three">
        {skills.map((skill) => (
          <div className="panel card" key={skill.title}>
            <span className="card-icon">
              <skill.icon size={26} aria-hidden="true" />
            </span>
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
            <ul className="tags">
              {skill.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
