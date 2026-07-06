import type { ReactNode } from 'react'
import { useReveal } from '../hooks'

interface SectionProps {
  id: string
  command: string
  children: ReactNode
}

/** A page section headed by a terminal-style command line. */
export default function Section({ id, command, children }: SectionProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <section id={id} className="section container reveal" ref={ref}>
      <h2 className="cmd">
        <span className="prompt">~$</span> {command}
      </h2>
      {children}
    </section>
  )
}
