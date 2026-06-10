import ScrollAnimation from 'react-animate-on-scroll'
import { Container } from './styles'

const ROLES = [
  {
    title: 'React Native Developer',
    meta: '724.ONE · Jan 2024 — Present · Lahore, Pakistan',
    highlights: [
      'Developed and shipped 3+ cross-platform production apps using React Native, Firebase, Supabase, and Node.js — covering iOS and Android from architecture to store deployment.',
      'Reduced average API response handling time by ~35% through optimized caching strategies using TanStack Query and improved state management with Redux Toolkit.',
      'Led end-to-end App Store and Google Play releases for multiple apps, managing signing, build pipelines, and post-launch stability with zero critical rollback incidents.',
      'Collaborated with design and backend teams to deliver features on schedule, maintaining high code quality through peer reviews and modular component architecture.',
      'Integrated third-party services including Stripe, RevenueCat, Firebase FCM, Google Sign-In, and AdMob across multiple production apps.',
    ],
  },
]

export function Experience() {
  return (
    <Container id="experience" aria-labelledby="experience-heading">
      <ScrollAnimation animateIn="fadeInLeft">
        <h2 id="experience-heading">Experience</h2>
      </ScrollAnimation>
      <div className="timeline">
        {ROLES.map((role, index) => (
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={(0.15 + index * 0.12) * 1000}
            key={role.title}
          >
            <article className="experience-card">
              <h3>{role.title}</h3>
              <p className="meta">{role.meta}</p>
              <ul>
                {role.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  )
}
