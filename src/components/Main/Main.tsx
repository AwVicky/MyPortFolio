import { Container } from './styles'
import { Hero } from '../Hero/Hero'
// import { FeaturedProjects } from '../FeaturedProjects/FeaturedProjects'
import { About } from '../About/About'
import { Experience } from '../Experience/Experience'
import { Education } from '../Education/Education'
import { Contact } from '../Contact/Contact'
import { Project } from '../Project/Project'
import { ParticlesBackground } from './ParticlesBackground'

export function Main() {
  return (
    <Container>
      <ParticlesBackground />
      <Hero />
      {/* <FeaturedProjects /> */}
      <About />
      <Experience />
      <Education />
      <Project />
      <Contact />
    </Container>
  )
}
