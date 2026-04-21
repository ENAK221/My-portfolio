import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ProfileImage from '../components/ProfileImage'

export default function About() {
  const ref = useScrollAnimation()
  const [light, setLight] = useState({ x: 0, y: 0 })

  const experience = [
    {
      year: 'Mars 2025 - Juin 2025',
      role: 'Stagiaire Développeur Full-Stack',
      company: 'Innovqube Paris',
      desc: `Stagiaire sur des applications mobiles à forte audience (Waze, Airbnb) entièrement construites en Laravel. J'ai pris part à l'ensemble du cycle de développement :
• Analyse des besoins et modélisation relationnelle pour la base de données MySQL
• Élaboration d'API REST sécurisées avec Laravel, intégration de services tiers (Stripe, Firebase)
• Optimisation des requêtes, indexes et migrations pour garantir la scalabilité
• Gestion des tâches cron et du versioning des schémas
• Mise en place de tests unitaires (PHPUnit) et fonctionnels
• Déploiements sur serveurs Docker via GitLab CI/CD
En pratique, j'ai manipulé quasiment toutes les briques (BDD, back, intégration, déploiement), ce qui m'a permis d'acquérir une vision end-to-end du produit.`
    }
  ]

  return (
    <div
      ref={ref}
      className="container about-page fade-up"
      style={{ padding: '3rem 0', position: 'relative' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setLight({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
    >
      {/* Spotlight global */}
      <div
        style={{
          position: 'absolute',
          top: light.y - 250,
          left: light.x - 250,
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)',
          pointerEvents: 'none',
          transition: '0.1s',
          zIndex: 0
        }}
      />

      {/* Particules globales */}
      {[...Array(20)].map((_, i) => (
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
            animationDelay: `${Math.random()}s`,
            zIndex: 0
          }}
        />
      ))}

      {/* SECTION HERO */}
      <div
        className="about-hero"
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div className="about-content">
          <h1 style={{ marginBottom: '0.5rem' }}>À propos de moi</h1>
          <p className="muted" style={{ maxWidth: '72ch', marginBottom: '2rem' }}>
            Je suis un développeur Full-Stack passionné par la création de solutions web innovantes et performantes.
            Avec une expérience en React, Node.js et cloud architecture, j'aime transformer les idées en produits réels.
          </p>
        </div>

        <div className="about-image">
          <ProfileImage size="medium" />
        </div>
      </div>

      {/* EXPÉRIENCE */}
      <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Expérience</h2>

      <div className="timeline">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="timeline-item"
            style={{
              position: 'relative',
              overflow: 'hidden',
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: `
                inset 0 0 25px rgba(255,255,255,0.08),
                0 8px 25px rgba(0,0,0,0.25)
              `,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.4s ease',
              marginBottom: '1.5rem'
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              const rotateX = (y - rect.height / 2) / 20
              const rotateY = (x - rect.width / 2) / -20
              e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
            }}
          >
            {/* Spotlight */}
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

            {/* Icône watermark */}
            <i
              className="fa-solid fa-briefcase"
              style={{
                position: 'absolute',
                right: '-10px',
                bottom: '-10px',
                fontSize: '5rem',
                opacity: 0.18,
                color: 'white',
                filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.4))',
                pointerEvents: 'none'
              }}
            />

            <p className="timeline-year">{exp.year}</p>
            <h3 style={{ margin: '0.25rem 0' }}>{exp.role}</h3>
            <p className="muted" style={{ fontSize: '0.95rem' }}>{exp.company}</p>
            <p style={{ marginTop: '0.5rem', whiteSpace: 'pre-line' }}>{exp.desc}</p>
          </div>
        ))}
      </div>

      {/* ÉDUCATION */}
      <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Éducation</h2>

      <article
        className="education-card"
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '1.5rem',
          borderRadius: '1rem',
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: `
            inset 0 0 25px rgba(255,255,255,0.08),
            0 8px 25px rgba(0,0,0,0.25)
          `,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.4s ease'
        }}
      >
        {/* Icône watermark */}
        <i
          className="fa-solid fa-graduation-cap"
          style={{
            position: 'absolute',
            right: '-10px',
            bottom: '-10px',
            fontSize: '5rem',
            opacity: 0.18,
            color: 'white',
            filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.4))',
            pointerEvents: 'none'
          }}
        />

        <h3>Bachelor 3 - HETIC</h3>
        <p className="muted">HETIC, 2025</p>
        <p>
          Approfondissement en développement web et design numérique. Projets collaboratifs, UX/UI, JavaScript avancé,
          gestion de bases de données et déploiement d'applications. Stage en entreprise inclus.
        </p>
      </article>
    </div>
  )
}
