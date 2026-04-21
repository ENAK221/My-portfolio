import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const detailedProjects = [
  {
    id: 1,
    title: 'DigiShopz - E-commerce Fullstack',
    desc: 'Application mobile de commerce électronique.',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    link: 'https://github.com/ENAK221/projet-finale',
    demo: 'https://mina-kane.fr/',
    bg: 'linear-gradient(135deg, #0f172a, #1e293b)' // E-commerce / Tech
  },
  {
    id: 2,
    title: 'Minachat - Social Media App',
    desc: 'MinaChat — réseau social centré sur la messagerie instantanée.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    link: 'https://github.com/ENAK221/minachat',
    demo: 'https://minachatsite.vercel.app/',
    bg: 'linear-gradient(135deg, #1e3a8a, #3b82f6)' // Social / Moderne
  },
  {
    
  id: 3,
  title: 'Chifoumi Game',
  desc: 'Jeu interactif pierre-feuille-ciseaux avec score et animations.',
  tech: ['JavaScript', 'HTML', 'CSS'],
  link: 'https://github.com/ENAK221/Chifoumi',
  demo: '/chifoumi.png',
  bg: 'linear-gradient(135deg, #4f46e5, #a855f7)'
}

    
  ,
  {
    id: 4,
    title: 'Edusphere - Plateforme de gestion des écoles',
    desc: 'Plateforme complète pour la gestion scolaire.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://gestedusphere.netlify.app/login',
    demo: 'https://edusphere-df3ezs7x6-enak221.vercel.app/login',
    bg: 'linear-gradient(135deg, #0ea5e9, #22d3ee)' // Education / Dashboard
  },


 /* 
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
