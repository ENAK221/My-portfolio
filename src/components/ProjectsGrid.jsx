import React from 'react'

const sampleProjects = [
  { id: 1, title: 'Projet A', desc: "Une courte description du projet A.", link: '#' },
  { id: 2, title: 'Projet B', desc: "Une courte description du projet B.", link: '#' },
  { id: 3, title: 'Projet C', desc: "Une courte description du projet C.", link: '#' },
]

export default function ProjectsGrid() {
  return (
    <section id="projects" className="projects container fade-up delay">
      <h2>Projets</h2>
      <div className="grid">
        {sampleProjects.map(p => (
          <article key={p.id} className="card">
            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>
            <a href={p.link}>Voir le projet</a>
          </article>
        ))}
      </div>
    </section>
  )
}
