import { Camera, CodeXml, Palette } from 'lucide-react'
import Section from './Section'

const skills = [
  {
    icon: CodeXml,
    title: 'web development',
    text: 'Building fast, responsive sites and apps — from static pages to full front-end experiences.',
    tags: ['React', 'TypeScript', 'Vite', 'Python'],
  },
  {
    icon: Palette,
    title: 'design',
    text: 'Interfaces, layouts and visual identities with an eye for typography and color.',
    tags: ['UI/UX', 'Figma', 'Branding'],
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
