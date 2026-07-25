import type { ReactNode } from 'react'
import { useReveal } from '../hooks'

interface SectionProps {
  id: string
  title: string
  lead?: ReactNode
  children: ReactNode
}

/** A page section: hairline, title, optional lead, then its own structure. */
export default function Section({ id, title, lead, children }: SectionProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <section id={id} className="section wrap reveal" ref={ref}>
      <div className="section-head">
        <h2 className="section-title">{title}</h2>
        {lead ? <p className="lead">{lead}</p> : null}
      </div>
      {children}
    </section>
  )
}
