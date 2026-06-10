import { Container } from './styles'
import ScrollAnimation from 'react-animate-on-scroll'
import { FEATURED_PROJECTS } from '../../data/projects'

export function FeaturedProjects() {
  return (
    <Container id="featured" aria-labelledby="featured-heading">
      <ScrollAnimation animateIn="fadeInUp">
        <h2 id="featured-heading">Featured work</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
        <p className="intro">
          Flagship React Native apps shipped on the App Store and Google Play —
          tap a card to jump to the full write-up.
        </p>
      </ScrollAnimation>
      <div className="grid">
        {FEATURED_PROJECTS.map((project, index) => (
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={(0.2 + index * 0.12) * 1000}
            key={project.id}
          >
            <a
              href={`#project-${project.id}`}
              className="featured-card"
              aria-label={`${project.title}: ${project.summary}`}
            >
              <img
                className="thumb"
                src={project.gallery[0]}
                alt=""
                loading="lazy"
              />
              <h3>{project.title}</h3>
              <p className="summary">{project.summary}</p>
              <span className="cta">View details →</span>
            </a>
          </ScrollAnimation>
        ))}
      </div>
      <div className="footer-row">
        <a className="all" href="#project">
          Browse all projects
        </a>
      </div>
    </Container>
  )
}
