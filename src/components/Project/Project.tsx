import { Container } from './styles'
import githubIcon from '../../assets/github.svg'
import externalLink from '../../assets/external-link.svg'
import androidIcon from '../../assets/android-icon.svg'
import iosIcon from '../../assets/ios-icon.svg'
import ScrollAnimation from 'react-animate-on-scroll'
import { PROJECTS } from '../../data/projects'
import { ProjectCarousel } from './ProjectCarousel'

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {PROJECTS.map((project) => (
          <ScrollAnimation animateIn="flipInX" key={project.id}>
            <div className="project" id={`project-${project.id}`}>
              <header>
                <img
                  src={project.icon}
                  alt={project.iconAlt}
                className={`app-icon${['snapquotegt', 'wantlyst'].includes(project.id) ? '' : ' app-icon--white'}`}
                />
                <div className="project-links">
                  {project.links.android ? (
                    <a
                      href={project.links.android}
                      target="_blank"
                      rel="noreferrer"
                      title="Google Play"
                    >
                      <img src={androidIcon} alt="" className="store-icon" />
                    </a>
                  ) : null}
                  {project.links.ios ? (
                    <a
                      href={project.links.ios}
                      target="_blank"
                      rel="noreferrer"
                      title="App Store"
                    >
                      <img src={iosIcon} alt="" className="store-icon" />
                    </a>
                  ) : null}
                  {project.links.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub profile"
                    >
                      <img src={githubIcon} alt="" className="store-icon" />
                    </a>
                  ) : null}
                  {project.links.web ? (
                    <a
                      href={project.links.web}
                      target="_blank"
                      rel="noreferrer"
                      title="Website"
                    >
                      <img src={externalLink} alt="" className="store-icon" />
                    </a>
                  ) : null}
                  {project.ongoing ? (
                    <span className="badge-ongoing">⚡ Ongoing</span>
                  ) : null}
                </div>
              </header>

              <ProjectCarousel images={project.gallery} label={project.title} />

              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  )
}
