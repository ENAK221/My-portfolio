import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const detailedProjects = [
  {
    id: 1,
    title: 'DigiShopz - E-commerce Fullstack',
    desc: 'Application mobile de commerce électronique.',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    link: 'https://github.com/ENAK221/projet-finale',
    
  },
  {
    id: 2,
    title: 'Minachat - Social Media App',
    desc: 'MinaChat — réseau social centré sur la messagerie instantanée, le partage multimédia et les contrôles de confidentialité.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    link: 'https://github.com/ENAK221/minachat',
    demo: '#'
  },
  {
    id: 3,
    title: 'Chifoumi Game',
    desc: 'Chifoumi est une petite application interactive que j’ai développée pour tester et consolider mes compétences en JavaScript. Le jeu propose des manches rapides de pierre, feuille, ciseaux entre le joueur et l’ordinateur, avec un suivi du score et des retours visuels pour chaque action.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/ENAK221/Chifoumi',
    
  },
  {
  id: 4,
    title: 'Edusphere - Plateforme de gestion des écoles',
    desc: 'Edusphere est une plateforme de gestion scolaire complète que j’ai développée pour faciliter l’administration des écoles. Elle offre des fonctionnalités telles que la gestion des étudiants, des enseignants, des cours et des emplois du temps, avec une interface conviviale et responsive.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL.'],
    link: 'https://69de3fa5e9ee31073d620ad3--fancy-praline-46bbc3.netlify.app/login',
},
 /* {
    id: 4,
    title: 'AI Content Generator',
    desc: 'Outil SaaS utilisant OpenAI API pour générer du contenu marketing automatisé.',
    tech: ['Next.js', 'OpenAI', 'Tailwind'],
    link: '#',
    demo: '#'
  },*/
  /*{
    id: 5,
    title: 'Portfolio Web',
    desc: 'Site portfolio moderne et performant avec animations et optimisation SEO.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    link: '#',
    demo: '#'
  },*/
  /*{
   id: 6,
    title: 'Chat Application',
    desc: 'Plateforme de chat en temps réel avec support des emojis et media sharing.',
    tech: ['Node.js', 'Socket.io', 'React'],
    link: '#',
    demo: '#'
  }
]*/
]
export default function Projects(){
  const ref = useScrollAnimation()

  return (
    <div ref={ref} className="container projects-page fade-up" style={{padding: '3rem 0'}}>
      <h1 style={{marginBottom: '0.5rem'}}>Mes Projets</h1>
      <p className="muted" style={{maxWidth: '72ch', marginBottom: '2rem'}}>
        Découvrez une sélection de mes projets récents. Chaque projet représente une opportunité 
        d'apprentissage et d'innovation avec les technologies modernes.
      </p>

      <div className="projects-grid">
        {detailedProjects.map(project => (
          <article key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-index">0{project.id}</span>
            </div>
            
            <p className="project-desc">{project.desc}</p>
            
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.link} className="btn btn-secondary">Code</a>
              <a href={project.demo} className="btn btn-secondary">Démo</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
