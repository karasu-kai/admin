import type { Project } from '../data/projects'
import { statusLabels } from '../data/projects'
import './ProjectCard.css'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <div className="card-top">
        <h3>{project.name}</h3>
        <span className={`badge status-${project.status}`}>{statusLabels[project.status]}</span>
      </div>
      <p className="tagline">{project.tagline}</p>
      {project.stack && (
        <ul className="stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      )}
      <p className="upload-hint">
        <span className="upload-label">Upload to repo:</span> {project.uploadHint}
      </p>
      <div className="card-links">
        <a href={project.repo} target="_blank" rel="noreferrer">
          Repository →
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo →
          </a>
        )}
      </div>
    </article>
  )
}
