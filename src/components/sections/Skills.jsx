import SectionTitle from '../ui/SectionTitle'
import SkillBadge from '../ui/SkillBadge'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import skills from '../../data/skills'
import './Skills.css'

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="skills" className="skills section" aria-labelledby="skills-heading">
      <div className="container">
        <SectionTitle label="02 — SKILLS" title="Tools & Technologies" />

        <div ref={ref} className={`skills__groups reveal ${isVisible ? 'visible' : ''}`}>
          {skills.map(({ category, items }) => (
            <div key={category} className="skills__group">
              <h3 className="skills__category">{category}</h3>
              <div className="skills__grid" role="list" aria-label={`${category} skills`}>
                {items.map((skill) => (
                  <div key={skill.name} role="listitem">
                    <SkillBadge {...skill} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
