import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import projects from '../../data/projects'
import './Projects.css'

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="projects" className="projects section" aria-labelledby="projects-heading">
      <div className="container">
        <SectionTitle label="03 — PROJECTS" title="Things I've Built" />

        <div
          ref={ref}
          className={`projects__grid reveal ${isVisible ? 'visible' : ''}`}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <p className="projects__note">
          More projects coming soon — currently focused on strengthening fundamentals and
          building in public.
        </p>
      </div>
    </section>
  )
}
