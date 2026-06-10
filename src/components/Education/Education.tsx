import ScrollAnimation from 'react-animate-on-scroll'
import { Container } from './styles'

const DEGREES = [
  {
    id: 'bs-cs',
    title: 'BS (Computer Science)',
    meta: 'Virtual University of Pakistan · 2014 — 2019 · Lahore, Pakistan',
  },
  {
    id: 'fsc-pre-engg',
    title: 'F.Sc (Pre-Engineering)',
    meta: 'Govt. Shalimar Boy College Baghbanpura Lahore · 2012 — 2014 · Lahore',
  },
]

export function Education() {
  return (
    <Container id="education" aria-labelledby="education-heading">
      <ScrollAnimation animateIn="fadeInLeft">
        <h2 id="education-heading">Education</h2>
      </ScrollAnimation>
      <div className="timeline">
        {DEGREES.map((degree, index) => (
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={(0.15 + index * 0.12) * 1000}
            key={degree.id}
          >
            <article className="education-card">
              <h3>{degree.title}</h3>
              <p className="meta">{degree.meta}</p>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  )
}
