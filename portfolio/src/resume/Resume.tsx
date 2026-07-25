import { Mail, MapPin, Printer } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import Nav, { type NavItem } from '../components/Nav'
import { LinkedinIcon } from '../components/BrandIcons'
import { useScrolled } from '../hooks'

const navItems: NavItem[] = [
  { href: '/', label: 'Portfolio' },
  { href: '/blog/', label: 'Blog', cta: true },
]

const skills = [
  'Gen AI',
  'Python',
  'RAG',
  'Multi-agentic systems',
  'AWS',
  'GCP',
  'Terraform',
  'AWS Glue',
  'SQL',
  'Redshift',
  'MCP',
  'Prompt Engineering',
  'A2A',
]

const experience = [
  {
    role: 'Software Engineer — Gen AI',
    org: 'Wells Fargo',
    period: '2025/08 – present',
    location: 'Bengaluru, India',
    points: [
      'Working in the Gen AI team building agentic solutions.',
      'Building internal SDKs, wrappers and APIs for google-adk, LangChain, A2A and model inferencing.',
      'Smart routing and fallback strategies for transient errors on LLM proxy services.',
      'Enterprise chat with Google Gemini Enterprise.',
    ],
  },
  {
    role: 'Data Engineer',
    org: 'Stealth startup',
    period: '2025/01 – 2025/08',
    location: 'Remote, India',
    points: [
      'Scaling data & AI: contributing to scaling data infra and AI from 0 to 1 in a startup environment.',
      'Infrastructure as Code: leading the entire data infrastructure migration to Terraform.',
      'ETL pipelines: designing, building and deploying ETL pipelines on AWS Glue with CI/CD using GitLab CI, ensuring seamless data integration and automation.',
    ],
  },
  {
    role: 'Trainee Engineer — Data Analyst',
    org: 'Yara International',
    period: '2023/08 – 2025/01',
    location: 'Bengaluru, India',
    points: [
      'Gen AI: developed an AI chatbot using Streamlit and AWS Bedrock, implementing Retrieval-Augmented Generation (RAG) with internal data; improved model performance through prompt engineering and function calling. Used by 1000s of internal agronomists.',
      'Deployment: deployed Streamlit applications on AWS Fargate via ECS; deployed fine-tuned LLMs on AWS SageMaker and established scalable infrastructure with vector databases for RAG.',
      'Data marts: designed and built data marts for in-house IoT sensor data, enabling efficient storage and analysis of sensor outputs for internal stakeholders.',
      'Geocoding automation: led the automation of reverse-geocoding for field boundaries across 18 countries — over 1.6 million boundaries — used by internal teams for marketing and growth.',
    ],
  },
]

export default function Resume() {
  const scrolled = useScrolled(40)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />

      <Nav
        items={navItems}
        brandHref="/"
        scrolled={scrolled}
        trailing={
          <button className="btn-print" onClick={() => window.print()}>
            <Printer size={14} aria-hidden="true" /> Print
          </button>
        }
      />

      <main className="wrap resume" id="main">
        <header className="resume-head">
          <h1 className="resume-name">Nidish G</h1>
          <ul className="resume-links">
            <li>
              <a href="mailto:resume@nidish.xyz">
                <Mail size={14} aria-hidden="true" /> resume@nidish.xyz
              </a>
            </li>
            <li>
              <a href="https://github.com/NidPlays" rel="noopener">
                <SiGithub size={14} aria-hidden="true" /> NidPlays
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nidish-g/" rel="noopener">
                <LinkedinIcon size={14} /> nidish-g
              </a>
            </li>
            <li>
              <MapPin size={14} aria-hidden="true" /> Bengaluru, India
            </li>
          </ul>
          <p className="resume-profile">
            Software/Data Engineer with 2.5+ years of experience building analytics
            solutions with Python, SQL, AWS Redshift and Apache Airflow. Track record in
            developing data pipelines and integrating services via REST APIs, now working on
            Gen AI and agentic systems.
          </p>
        </header>

        <section className="resume-section">
          <h2 className="resume-section-title">Experience</h2>
          <ul className="xp-list">
            {experience.map((xp) => (
              <li key={xp.role}>
                <h3 className="xp-role">{xp.role}</h3>
                <p className="xp-meta meta">
                  <span className="xp-org">{xp.org}</span>
                  <span>{xp.period}</span>
                  <span>{xp.location}</span>
                </p>
                <ul className="xp-points">
                  {xp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Skills</h2>
          <ul className="skill-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Awards</h2>
          <div>
            <h3 className="xp-role">Rockstar Rookie Award, Q1 2024</h3>
            <p className="xp-meta meta">
              <span className="xp-org">Yara International</span>
              <span>2024/05</span>
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div>
            <h3 className="xp-role">Information Science &amp; Engineering</h3>
            <p className="xp-meta meta">
              <span className="xp-org">RNS Institute of Technology, VTU</span>
              <span>2019/08 – 2023/07</span>
              <span>Bengaluru, India</span>
            </p>
            <p className="meta">
              Certificates:{' '}
              <a href="https://www.linkedin.com/in/nidish-g/" rel="noopener">
                see LinkedIn
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <p className="meta">© {new Date().getFullYear()} Nidish G</p>
          <p className="meta">
            <a href="/">Portfolio</a> · <a href="/blog/">Blog</a>
          </p>
        </div>
      </footer>
    </>
  )
}
