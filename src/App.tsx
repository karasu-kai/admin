import { useMemo, useState } from 'react'
import { categories, projects, type Project } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import './App.css'

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const grouped = useMemo(() => {
    if (activeCategory !== 'all') return [{ label: null, items: filtered }]
    return categories
      .map((cat) => ({
        label: cat.label,
        items: projects.filter((p) => p.category === cat.id),
      }))
      .filter((g) => g.items.length > 0)
  }, [activeCategory, filtered])

  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">Karasu-kai · Project Hub</p>
        <h1>One place for every build.</h1>
        <p className="lede">
          Each project has its own repo — upload code there, build independently.
          This hub showcases everything and links out to live demos.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="https://github.com/karasu-kai/admin/blob/main/docs/REPO_MAP.md" target="_blank" rel="noreferrer">
            Repo map
          </a>
          <a className="btn ghost" href="https://github.com/karasu-kai" target="_blank" rel="noreferrer">
            GitHub org
          </a>
        </div>
      </header>

      <nav className="filters" aria-label="Filter by category">
        <FilterChip active={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>
          All ({projects.length})
        </FilterChip>
        {categories.map((cat) => {
          const count = projects.filter((p) => p.category === cat.id).length
          if (!count) return null
          return (
            <FilterChip
              key={cat.id}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label} ({count})
            </FilterChip>
          )
        })}
      </nav>

      <main>
        {grouped.map((group) => (
          <section key={group.label ?? 'filtered'} className="section">
            {group.label && <h2 className="section-title">{group.label}</h2>}
            <div className="grid">
              {group.items.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="footer">
        <p>
          Spec documents live in{' '}
          <a href="https://github.com/karasu-kai/admin/tree/main/docs/portfolio">docs/portfolio/</a>
          {' '}· Update project links in <code>src/data/projects.ts</code>
        </p>
      </footer>
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button type="button" className={`chip ${active ? 'active' : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}
