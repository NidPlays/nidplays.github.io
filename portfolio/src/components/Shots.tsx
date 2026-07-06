import Section from './Section'

const shots = [
  { src: '/img/DSCF0829.jpg', alt: 'Highway at dusk under pink clouds and palm trees' },
  { src: '/img/DSCF0834.jpg', alt: 'Landscape photograph' },
  { src: '/img/DSCF0604.jpg', alt: 'Landscape photograph' },
]

export default function Shots() {
  return (
    <Section id="shots" command="feh ~/shots">
      <div className="grid three">
        {shots.map((shot) => (
          <figure className="panel shot" key={shot.src}>
            <img src={shot.src} alt={shot.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </Section>
  )
}
