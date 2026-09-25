import './SkillBadge.css'

/**
 * SkillBadge — displays a skill with its SVG icon and name.
 * @param {string} name   - Skill name
 * @param {string} svg    - Raw SVG string for the icon
 * @param {string} color  - Brand color for the icon
 */
export default function SkillBadge({ name, svg, color }) {
  return (
    <div className="skill-badge">
      <span
        className="skill-badge__icon"
        style={{ color }}
        dangerouslySetInnerHTML={{ __html: svg }}
        aria-hidden="true"
      />
      <span className="skill-badge__name">{name}</span>
    </div>
  )
}
