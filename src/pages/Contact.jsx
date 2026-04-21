import React, { useState } from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div style={{ padding: '3rem 0' }}>
      <ContactForm />

      <section className="container" style={{ marginTop: '4rem', paddingBottom: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Autres moyens de contact</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          <ContactCard
            icon="fa-solid fa-envelope"
            title="Email"
            text="kane.ousmane2@ugb.edu.sn"
            link="mailto:kane.ousmane2@ugb.edu.sn"
            linkLabel="Envoyer un email"
          />

          <ContactCard
            icon="fa-solid fa-share-nodes"
            title="Réseaux Sociaux"
            text="Retrouvez-moi sur les réseaux"
            links={[
              { label: 'GitHub', url: 'https://github.com/dashboard' },
              { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ousmane-kane-090380277/' }
            ]}
          />

          <ContactCard
            icon="fa-solid fa-location-dot"
            title="Localisation"
            text="France (Télétravail possible)"
            extra="Basé en France mais ouvert à la collaboration internationale."
          />
        </div>
      </section>
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
