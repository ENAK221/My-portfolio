import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Footer() {
  const ref = useScrollAnimation()
  const [light, setLight] = useState({ x: 0, y: 0 })
  const currentYear = new Date().getFullYear()

  return (
    <footer
      ref={ref}
      className="footer fade-up"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '3rem 0',
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(18px)',
        borderTop: '1px solid rgba(255,255,255,0.15)',
        boxShadow: `
          inset 0 0 25px rgba(255,255,255,0.08),
          0 -8px 25px rgba(0,0,0,0.25)
        `,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.4s ease'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setLight({ x, y })
      }}
    >
      {/* Spotlight dynamique */}
      <div
        style={{
          position: 'absolute',
          top: light.y - 200,
          left: light.x - 200,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)',
          pointerEvents: 'none',
          transition: '0.1s'
        }}
      />

      {/* Particules */}
      {[...Array(14)].map((_, i) => (
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
        className="fa-solid fa-sparkles"
        style={{
          position: 'absolute',
          right: '20px',
          bottom: '-20px',
          fontSize: '5rem',
          opacity: 0.15,
          color: 'white',
          filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.4))',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        <div className="footer-content" style={{ position: 'relative', zIndex: 2 }}>
          <div className="footer-section">
            <h4>Portfolio</h4>
            <p className="muted">
              Développeur Full-Stack passionné par la création d'expériences web modernes et performantes.
            </p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="/#home">Accueil</a></li>
              <li><a href="/#projects">Projets</a></li>
              <li><a href="/about">À propos</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Réseaux</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/ousmane-kane-090380277/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom" style={{ marginTop: '2rem', position: 'relative', zIndex: 2 }}>
          <p className="muted">&copy; {currentYear} Tous droits réservés. Conçu et développé avec passion.</p>
        </div>
      </div>
    </footer>
  )
}
