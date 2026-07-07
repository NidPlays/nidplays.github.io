import { ArrowLeft, Award, BookOpen, Briefcase, GraduationCap, Mail, MapPin, Printer } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { LinkedinIcon } from '../components/BrandIcons'

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
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="/">
            nidish<span className="dim">@resume</span>
            <span className="accent">:~$</span>
          </a>
          <nav aria-label="Main navigation">
            <ul className="nav-links resume-nav">
              <li>
                <a href="/" aria-label="Back to portfolio">
                  <ArrowLeft size={14} aria-hidden="true" />
                  <span className="nav-label">portfolio</span>
                </a>
              </li>
              <li>
                <a href="/blog/" aria-label="Blog">
                  <BookOpen size={14} aria-hidden="true" />
                  <span className="nav-label">blog</span>
                </a>
              </li>
              <li>
                <button
                  className="btn-print"
                  onClick={() => window.print()}
                  aria-label="Print resume"
                >
                  <Printer size={14} aria-hidden="true" />
                  <span className="nav-label">print</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container resume">
        {/* ------------------------------ header ----------------------------- */}
        <section className="section resume-head">
          <h1 className="cmd">
            <span className="prompt">~$</span> cat resume.md
          </h1>
          <div className="panel">
            <h2 className="resume-name">
              Nidish G<span className="accent">.</span>
            </h2>
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
              <li className="dim">
                <MapPin size={14} aria-hidden="true" /> Bengaluru, India
              </li>
            </ul>
            <p className="resume-profile">
              Software/Data Engineer with 2.5+ years of experience skilled in developing
              analytics solutions leveraging Python, SQL, AWS Redshift and Apache Airflow.
              Proven track record in developing data pipelines and integrating services via
              REST APIs. Passionate about driving technological innovation while enhancing
              security and privacy.
            </p>
          </div>
        </section>

        {/* ---------------------------- experience ---------------------------- */}
        <section className="section">
          <h2 className="cmd">
            <span className="prompt">~$</span> git log ./experience
          </h2>
          <div className="xp-list">
            {experience.map((xp) => (
              <article className="panel xp" key={xp.role}>
                <header className="xp-head">
                  <h3>
                    <Briefcase size={16} aria-hidden="true" /> {xp.role}
                  </h3>
                  <p className="xp-meta">
                    <span className="accent">{xp.org}</span>
                    <span className="dim">
                      {' '}
                      · {xp.period} · {xp.location}
                    </span>
                  </p>
                </header>
                <ul className="xp-points">
                  {xp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ------------------------------ skills ------------------------------ */}
        <section className="section">
          <h2 className="cmd">
            <span className="prompt">~$</span> ls ./skills
          </h2>
          <div className="panel">
            <ul className="tags resume-tags">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ------------------------- awards & education ------------------------ */}
        <section className="section">
          <h2 className="cmd">
            <span className="prompt">~$</span> cat awards.txt education.txt
          </h2>
          <div className="grid two">
            <div className="panel xp">
              <h3>
                <Award size={16} aria-hidden="true" /> Rockstar Rookie Award, Q1 2024
              </h3>
              <p className="xp-meta">
                <span className="accent">Yara International</span>
                <span className="dim"> · 2024/05</span>
              </p>
            </div>
            <div className="panel xp">
              <h3>
                <GraduationCap size={16} aria-hidden="true" /> Information Science &
                Engineering
              </h3>
              <p className="xp-meta">
                <span className="accent">RNS Institute of Technology, VTU</span>
                <span className="dim"> · 2019/08 – 2023/07 · Bengaluru, India</span>
              </p>
            </div>
          </div>
          <p className="dim resume-certs">
            # certificates:{' '}
            <a href="https://www.linkedin.com/in/nidish-g/" rel="noopener">
              see LinkedIn
            </a>
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            <span className="prompt">~$</span> echo "© {new Date().getFullYear()} Nidish ·{' '}
            <a href="/">portfolio</a> · <a href="/blog/">blog</a>"
          </p>
        </div>
      </footer>
    </>
  )
}
