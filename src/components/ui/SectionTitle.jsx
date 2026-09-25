import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import './SectionTitle.css'

/**
 * SectionTitle — reusable section heading with animated underline accent.
 * @param {string} label  - small eyebrow text (e.g. "02 — ABOUT")
 * @param {string} title  - main heading text
 * @param {string} align  - 'left' | 'center' (default: 'center')
 */
export default function SectionTitle({ label, title, align = 'center' }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`section-title section-title--${align} reveal ${isVisible ? 'visible' : ''}`}
    >
      {label && <span className="section-title__label">{label}</span>}
      <h2 className="section-title__heading">{title}</h2>
      <span className="section-title__accent" aria-hidden="true" />
    </div>
  )
}
