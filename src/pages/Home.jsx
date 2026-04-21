import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Hero from '../components/Hero'
import ProjectsGrid from '../components/ProjectsGrid'
import Skills from '../components/Skills'
import Cybersecurity from '../components/Cybersecurity'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import ProfileImage from '../components/ProfileImage'

export default function Home() {
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
      className="home-page fade-up"
      style={{ position: 'relative' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setLight({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
    >
      {/* Spotlight global */}
      <div
        style={{
          position: 'absolute',
          top: light.y - 300,
          left: light.x - 300,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)',
          pointerEvents: 'none',
          transition: '0.1s',
          zIndex: 0
        }}
      />

      {/* Particules globales */}
      {[...Array(25)].map((_, i) => (
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

      {/* HERO */}
      <Hero />

      {/* PROJETS */}
      <section className="container" style={{ position: 'relative', zIndex: 2 }}>
        <ProjectsGrid />
      </section>

      {/* COMPÉTENCES */}
      <Skills />

      {/* CYBERSÉCURITÉ */}
      <Cybersecurity />

      {/* À PROPOS */}
      <div className="container about-page fade-up" style={{ padding: '3rem 0', position: 'relative', zIndex: 2 }}>
        <div className="about-hero" style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="about-content">
            <h2 style={{ marginBottom: '0.5rem' }}>À propos de moi</h2>
            <p className="muted" style={{ maxWidth: '72ch', marginBottom: '2rem' }}>
              Je suis un développeur Full-Stack passionné par la création de solutions web innovantes et performantes. 
              Avec une expérience en React, Node.js et cloud architecture, j'aime transformer les idées en produits réels.
            </p>
          </div>

          <div className="about-image">
            <ProfileImage size="medium" />
          </div>
        </div>

        <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Expérience</h3>
        <div className="timeline">
          {experience.map((exp, idx) => (
            <article
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
                transition: 'transform 0.4s ease'
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
              <h4 style={{ margin: '0.25rem 0' }}>{exp.role}</h4>
              <p className="muted" style={{ fontSize: '0.95rem' }}>{exp.company}</p>
              <p style={{ marginTop: '0.5rem', whiteSpace: 'pre-line' }}>{exp.desc}</p>
            </article>
          ))}
        </div>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Éducation</h3>
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

          <h4>Bachelor 3 - HETIC</h4>
          <p className="muted">HETIC, 2025</p>
          <p>
            Approfondissement en développement web et design numérique. Projets collaboratifs, UX/UI, JavaScript avancé,
            gestion de bases de données et déploiement d'applications. Stage en entreprise inclus.
          </p>
        </article>
      </div>

      {/* TÉMOIGNAGES */}
      <Testimonials />

      {/* CONTACT */}
      <div style={{ padding: '3rem 0', position: 'relative', zIndex: 2 }}>
        <ContactForm />

        {/* AUTRES MOYENS DE CONTACT — VERSION PREMIUM */}
        <section className="container" style={{ marginTop: '4rem', paddingBottom: '2rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Autres moyens de contact</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {/* EMAIL */}
            <ContactCard
              icon="fa-solid fa-envelope"
              title="Email"
              text="kane.ousmane2@ugb.edu.sn"
              link="mailto:kane.ousmane2@ugb.edu.sn"
              linkLabel="Envoyer un email"
            />

            {/* RÉSEAUX SOCIAUX */}
            <ContactCard
              icon="fa-solid fa-share-nodes"
              title="Réseaux Sociaux"
              text="Retrouvez-moi sur les réseaux"
              links={[
                { label: 'GitHub', url: 'https://github.com/ENAK221' },
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ousmane-kane-090380277/' }
              ]}
            />

            {/* LOCALISATION */}
            <ContactCard
              icon="fa-solid fa-location-dot"
              title="Localisation"
              text="France (Télétravail possible)"
              extra="Basé en France mais ouvert à la collaboration internationale."
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function ContactCard({ icon, title, text, link, linkLabel, links, extra }) {
  const [light, setLight] = useState({ x: 0, y: 0 })

  return (
    <div
      className="card"
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

      {/* Particules */}
      {[...Array(10)].map((_, i) => (
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

      {/* Icône watermark */}
      <i
        className={icon}
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

      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p className="muted">{text}</p>

      {extra && (
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.85 }}>{extra}</p>
      )}

      {link && (
        <a
          href={link}
          className="btn btn-secondary"
          style={{ marginTop: '1rem', display: 'inline-block' }}
        >
          {linkLabel}
        </a>
      )}

      {links && (
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          {links.map((l, i) => (
            <a
              key={i}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: '0.85rem', padding: '0.5rem 0.75rem' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
