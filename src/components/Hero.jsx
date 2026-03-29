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
            <a href="/cv.pdf" download>
              <button className="btn btn-secondary fade-up" style={{animationDelay: '0.4s'}}>Télécharger mon CV</button>
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
