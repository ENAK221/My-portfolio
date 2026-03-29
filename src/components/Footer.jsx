import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Footer() {
  const ref = useScrollAnimation()

  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className="footer fade-up">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Portfolio</h4>
            <p className="muted">Développeur Full-Stack passionné par la création d'expériences web modernes et performantes.</p>
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

        <div className="footer-bottom">
          <p className="muted">&copy; {currentYear} Tous droits réservés. Conçu et développé avec passion.</p>
        </div>
      </div>
    </footer>
  )
}
