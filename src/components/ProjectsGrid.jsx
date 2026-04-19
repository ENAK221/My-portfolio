import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const sampleProjects = [
  {
    id: 1,
    title: 'Projet A',
    desc: "DigiShopz est une boutique e-commerce fullstack pour l'achat d'électronique. L'application, développée en PHP/HTML/CSS/JS, propose inscription, panier, wishlist et paiement. Un espace admin permet d'ajouter, modifier et supprimer des produits.",
    link: 'https://github.com/ENAK221/projet-finale',
    demo: 'https://mina-kane.fr/'
  },
  {
    id: 2,
    title: 'Projet B',
    desc: "Minachat est une application web moderne inspirée des réseaux sociaux actuels, conçue pour offrir une expérience fluide, esthétique et immersive. Elle combine une interface utilisateur élégante (React + TailwindCSS) avec une architecture backend robuste (Node.js, Express, PostgreSQL, Prisma).",
    link: 'https://github.com/ENAK221/minachat',
    demo: '#'
  },
  {
    id: 3,
    title: 'Projet C',
    desc: "Chifoumi est une petite application interactive que j’ai développée pour tester et consolider mes compétences en JavaScript. Le jeu propose des manches rapides de pierre, feuille, ciseaux entre le joueur et l’ordinateur, avec un suivi du score et des retours visuels pour chaque action.",
    link: 'https://github.com/ENAK221/Chifoumi',
    demo: '#'
  },
  {
    id: 4,
    title: 'Projet D',
    desc: "Edusphere est une plateforme de gestion scolaire complète que j’ai développée pour faciliter l’administration des écoles. Elle offre des fonctionnalités telles que la gestion des étudiants, des enseignants, des cours et des emplois du temps, avec une interface conviviale et responsive.",
    link: '#',
    demo: 'https://eduspheresite.netlify.app/login'
  }
]

export default function ProjectsGrid() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} id="projects" className="projects fade-up delay">
      <h2 className="section-title">Projets Récents</h2>

      <p className="muted section-subtitle">
        Sélection de mes derniers projets mettant en avant mon expertise en développement web moderne.
      </p>

      <div className="grid">
        {sampleProjects.map((project, idx) => (
          <article
            key={project.id}
            className="card fade-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <h3>{project.title}</h3>

            <p className="muted">{project.desc}</p>

            <div className="project-actions">
              <a href={project.link} className="btn btn-secondary">
                Code
              </a>

              {project.demo && (
                <a href={project.demo} className="btn btn-secondary">
                  Démo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}