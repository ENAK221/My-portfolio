import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const sampleProjects = [
  {
    id: 1,
    title: 'DigiShopz – E-commerce Fullstack',
    desc: "DigiShopz est une boutique e-commerce fullstack développée en PHP, HTML, CSS et JavaScript. Elle permet l'inscription, la connexion, la gestion du panier, la wishlist, ainsi que le paiement. Un espace administrateur complet permet d'ajouter, modifier et supprimer des produits.",
    link: 'https://github.com/ENAK221/projet-finale',
    demo: 'https://mina-kane.fr/',
    icon: 'fa-solid fa-cart-shopping'
  },
  {
    id: 2,
    title: 'Minachat – Social Media App',
    desc: "Minachat est une application web moderne inspirée des réseaux sociaux actuels. Elle propose une expérience fluide et immersive grâce à une interface élégante construite avec React et TailwindCSS.",
    link: 'https://github.com/ENAK221/minachat',
    demo: 'https://minachatsite.vercel.app/',
    icon: 'fa-solid fa-comments'
  },
  {
    id: 3,
    title: 'Chifoumi – Jeu interactif',
    desc: "Chifoumi est une application interactive développée pour renforcer mes compétences en JavaScript. Le jeu oppose le joueur à l’ordinateur avec un suivi du score et des animations.",
    link: 'https://github.com/ENAK221/Chifoumi',
    demo: '/chifoumi.png',
    icon: 'fa-solid fa-gamepad'
  },
  {
    id: 4,
    title: 'Edusphere – Plateforme de gestion scolaire',
    desc: "Edusphere est une plateforme complète destinée à faciliter la gestion des écoles. Elle permet d’administrer les étudiants, enseignants, cours, emplois du temps et bien plus encore.",
    link: 'https://github.com/ENAK221/Edusphere',
    demo: 'https://edusphere-df3ezs7x6-enak221.vercel.app/login',
    icon: 'fa-solid fa-school'
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
          <ProjectCard key={project.id} project={project} idx={idx} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, idx }) {
  const [light, setLight] = useState({ x: 0, y: 0 })

  return (
    <article
      className="card fade-up"
      style={{
        animationDelay: `${idx * 0.15}s`,
        position: 'relative',
        overflow: 'hidden',
        padding: '1.5rem',
        borderRadius: '1rem',
        color: 'white',
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: `
          inset 0 0 25px rgba(255,255,255,0.08),
          0 8px 25px rgba(0,0,0,0.25)
        `,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setLight({ x, y })

        const rotateX = (y - rect.height / 2) / 20
        const rotateY = (x - rect.width / 2) / -20
        e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
      }}
    >
      {/* Spotlight dynamique */}
      <div
        style={{
          position: 'absolute',
          top: light.y - 150,
          left: light.x - 150,
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)',
          pointerEvents: 'none',
          transition: '0.1s'
        }}
      />

      {/* Particules */}
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '6px',
            height: '6px',
            background: 'rgba(255,255,255,0.25)',
            borderRadius: '50%',
            filter: 'blur(2px)',
            animation: `float ${3 + Math.random() * 3}s infinite ease-in-out`,
            animationDelay: `${Math.random()}s`
          }}
        />
      ))}

      {/* Icône watermark + halo */}
      <i
        className={project.icon}
        style={{
          position: 'absolute',
          right: '-10px',
          bottom: '-10px',
          fontSize: '6rem',
          opacity: 0.18,
          color: 'white',
          filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.4))',
          pointerEvents: 'none'
        }}
      />

      <h3>{project.title}</h3>

      <p className="muted" style={{ color: 'rgba(255,255,255,0.85)' }}>
        {project.desc}
      </p>

      <div className="project-actions">
        <a href={project.link} className="btn btn-secondary">Code</a>
        {project.demo && <a href={project.demo} className="btn btn-secondary">Démo</a>}
      </div>
    </article>
  )
}
