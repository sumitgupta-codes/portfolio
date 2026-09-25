import SectionTitle from '../ui/SectionTitle'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import './About.css'

const FOCUS_ITEMS = [
  { icon: '🧩', text: 'Data Structures & Algorithms' },
  { icon: '⚛️', text: 'Advanced JavaScript & React' },
  { icon: '🛠️', text: 'Building full-stack web apps' },
  { icon: '📖', text: 'Computer Science fundamentals' },
]

export default function About() {
  const [cardRef, cardVisible] = useIntersectionObserver({ threshold: 0.15 })

  return (
    <section id="about" className="about section" aria-labelledby="about-heading">
      <div className="container">
        <SectionTitle label="01 — ABOUT" title="Who I Am" />

        <div
          ref={cardRef}
          className={`about__grid reveal ${cardVisible ? 'visible' : ''}`}
        >
          {/* Avatar column */}
          <div className="about__avatar-wrap">
            <div className="about__avatar" aria-label="Sumit Gupta avatar — initials SG">
              <span className="about__avatar-initials">SG</span>
            </div>
            {/* Floating chip */}
            <div className="about__chip" aria-hidden="true">
              <span className="about__chip-dot" />
              Open to Internships
            </div>
          </div>

          {/* Bio column */}
          <div className="about__bio">
            <p className="about__para">
              I'm a third-year college student with a strong interest in full-stack web
              development. I'm currently strengthening my problem-solving skills through
              Data Structures and Algorithms while exploring JavaScript at an advanced level.
            </p>
            <p className="about__para">
              I enjoy building practical projects and continuously improving my development
              skills by turning ideas into functional, user-friendly applications.
            </p>

            <div className="about__focus">
              <h3 className="about__focus-heading">Currently focused on</h3>
              <ul className="about__focus-list">
                {FOCUS_ITEMS.map(({ icon, text }) => (
                  <li key={text} className="about__focus-item">
                    <span className="about__focus-icon" aria-hidden="true">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
