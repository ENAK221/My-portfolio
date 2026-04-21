import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ProfileImage from './ProfileImage'

export default function Hero() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} id="home" className="hero container fade-up">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Bienvenue dans mon portfolio
          </h1>
          <p className="hero-sub">
            Je suis développeur Full-Stack passionné par la création d'applications web performantes, accessibles et innovantes. 
            Spécialisé en React, Node.js et architecture moderne.
          </p>
          <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
            <a href="#projects">
              <button className="btn btn-primary fade-up" style={{animationDelay: '0.2s'}}>Voir mes projets</button>
            </a>
            <a href="/contact">
              <button className="btn btn-secondary fade-up" style={{animationDelay: '0.3s'}}>Me contacter</button>
            </a>
          <a href="/cv (4).pdf" target="_blank" rel="noopener noreferrer">
  <button
    className="btn fade-up"
    style={{
      animationDelay: '0.4s',
      backgroundColor: '#373e51',
      color: 'white',
      border: '1px solid rgba(255,255,255,0.15)',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#4B5563';
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.25)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#374151';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    Télécharger mon CV
  </button>
</a>


          </div>
        </div>

        <div className="hero-image">
          <ProfileImage size="large" />
        </div>
      </div>
    </section>
  )
}
