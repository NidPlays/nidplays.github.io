import type { CSSProperties } from 'react'
import Section from './Section'
import { useReveal } from '../hooks'

interface Shot {
  src: string
  alt: string
  title: string
  note: string
  /** object-position, for the frames the layout has to crop */
  pos?: string
}

const shots: Shot[] = [
  {
    src: '/img/DSCF0834.jpg',
    alt: 'The Milky Way rising over a silhouetted line of trees on a clear night',
    title: 'The core, rising',
    note: 'Milky Way over the treeline',
  },
  {
    src: '/img/DSCF0604.jpg',
    alt: 'Tall monsoon cloud building over low rooftops and a mango tree in the afternoon',
    title: 'Afternoon build-up',
    note: 'Cloud over the rooftops',
    pos: '32% 58%',
  },
  {
    src: '/img/DSCF0829.jpg',
    alt: 'A highway running into the distance at dusk beneath pink cumulus and palms',
    title: 'The road out',
    note: 'Last light on the highway',
    pos: '50% 56%',
  },
]

function Frame({ shot, index }: { shot: Shot; index: number }) {
  const ref = useReveal<HTMLElement>()

  return (
    <figure
      className="shot reveal"
      ref={ref}
      style={{ '--i': index, '--pos': shot.pos } as CSSProperties}
    >
      <div className="shot-frame">
        <img
          src={shot.src}
          alt={shot.alt}
          width={2000}
          height={1125}
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption>
        <span className="shot-caption">{shot.title}</span>
        <span className="meta">{shot.note}</span>
      </figcaption>
    </figure>
  )
}

export default function Photographs() {
  return (
    <Section
      id="photographs"
      title="Photographs"
      lead="Almost all of it is sky. That wasn't a plan, it's just where I keep looking."
    >
      <div className="shots">
        {shots.map((shot, i) => (
          <Frame shot={shot} index={i} key={shot.src} />
        ))}
      </div>
    </Section>
  )
}
