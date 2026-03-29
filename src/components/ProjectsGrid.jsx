import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const sampleProjects = [
  { id: 1, title: 'Projet A', desc: "DigiShopz est une boutique e-commerce fullstack pour l'achat d'électronique. L'application, développée en PHP/HTML/CSS/JS, propose inscription, panier, wishlist et paiement. Un espace admin permet d'ajouter, modifier et supprimer des produits.", link: 'https://github.com/ENAK221/projet-finale', demo: 'https://mina-kane.fr/' },
  { id: 2, title: 'Projet B', desc: "Minachat est une application web moderne inspirée des réseaux sociaux actuels, conçue pour offrir une expérience fluide, esthétique et immersive. Elle combine une interface utilisateur élégante (React + TailwindCSS) avec une architecture backend robuste (Node.js, Express, PostgreSQL, Prisma).", link: 'https://github.com/ENAK221/minachat', demo: '' },
  { id: 3, title: 'Projet C', desc: "Chifoumi est une petite application interactive que j’ai développée pour tester et consolider mes compétences en JavaScript. Le jeu propose des manches rapides de pierre, feuille, ciseaux entre le joueur et l’ordinateur, avec un suivi du score et des retours visuels pour chaque action.", link: 'https://github.com/ENAK221/Chifoumi', demo: '#' },
]

export default function ProjectsGrid() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} id="projects" className="projects fade-up delay">
      <h2 style={{marginBottom: '0.5rem'}}>Projets Récents</h2>
      <p className="muted" style={{maxWidth: '72ch', marginBottom: '2rem'}}>Sélection de mes derniers projets mettant en avant mon expertise en développement web moderne.</p>
      <div className="grid">
        {sampleProjects.map((p, idx) => (
          <article key={p.id} className="card fade-up" style={{animationDelay: `${idx * 0.1}s`}}>
            <h3>{p.title}</h3>
            <p className="muted" style={{flex: 1}}>{p.desc}</p>
            <div style={{display: 'flex', gap: '0.75rem', marginTop: '1rem'}}>
              <a href={p.link} className="btn btn-secondary" style={{fontSize: '0.85rem', padding: '0.5rem 1rem'}}>Code</a>
              <a href={p.demo} className="btn btn-secondary" style={{fontSize: '0.85rem', padding: '0.5rem 1rem'}}>Démo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
