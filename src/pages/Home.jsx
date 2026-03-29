import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Hero from '../components/Hero'
import ProjectsGrid from '../components/ProjectsGrid'
import Skills from '../components/Skills'
import Cybersecurity from '../components/Cybersecurity'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import ProfileImage from '../components/ProfileImage'

export default function Home(){
  const ref = useScrollAnimation()

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
    <div>
      <Hero />
      <section className="container">
        <ProjectsGrid />
      </section>
      <Skills />
      <Cybersecurity />

      {/* À propos de moi */}
      <div ref={ref} className="container about-page fade-up" style={{padding: '3rem 0'}}>
        <div className="about-hero">
          <div className="about-content">
            <h2 style={{marginBottom: '0.5rem'}}>À propos de moi</h2>
            <p className="muted" style={{maxWidth: '72ch', marginBottom: '2rem'}}>
              Je suis un développeur Full-Stack passionné par la création de solutions web innovantes et performantes. 
              Avec une expérience en React, Node.js et cloud architecture, j'aime transformer les idées en produits réels.
            </p>
          </div>

          <div className="about-image">
            <ProfileImage size="medium" />
          </div>
        </div>

        <h3 style={{marginTop: '3rem', marginBottom: '1.5rem'}}>Expérience</h3>
        <div className="timeline">
          {experience.map((exp, idx) => (
            <article key={idx} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <p className="timeline-year">{exp.year}</p>
                <h4 style={{margin: '0.25rem 0'}}>{exp.role}</h4>
                <p className="muted" style={{fontSize: '0.95rem'}}>{exp.company}</p>
                <p style={{marginTop: '0.5rem'}}>{exp.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Éducation</h3>
        <article className="education-card">
          <h4>Bachelor 3 - HETIC</h4>
          <p className="muted">HETIC, 2025</p>
          <p>Approfondissement en développement web et design numérique. Projets collaboratifs, UX/UI, JavaScript avancé, gestion de bases de données et déploiement d'applications. Stage en entreprise inclus.</p>
        </article>
      </div>

      <Testimonials />

      {/* Contact */}
      <div style={{padding: '3rem 0'}}>
        <ContactForm />
        
        <section className="container" style={{marginTop: '4rem', paddingBottom: '2rem'}}>
          <h2 style={{marginBottom: '2rem'}}>Autres moyens de contact</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
            <div className="card">
              <h3 style={{color: 'var(--accent)'}}>Email</h3>
              <p className="muted">kane.ousmane2@ugb.edu.sn</p>
              <a href="mailto:kane.ousmane2@ugb.edu.sn" className="btn btn-secondary" style={{marginTop: '1rem', display: 'inline-block'}}>
                Envoyer un email
              </a>
            </div>

            <div className="card">
              <h3 style={{color: 'var(--accent)'}}>Réseaux Sociaux</h3>
              <p className="muted">Retrouvez-moi sur les réseaux</p>
              <div style={{display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap'}}>
                <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{fontSize: '0.85rem', padding: '0.5rem 0.75rem'}}>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/ousmane-kane-090380277/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{fontSize: '0.85rem', padding: '0.5rem 0.75rem'}}>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="card">
              <h3 style={{color: 'var(--accent)'}}>Localisation</h3>
              <p className="muted">France (Télétravail possible)</p>
              <p style={{marginTop: '1rem', fontSize: '0.9rem'}}>
                Basé en France mais ouvert à la collaboration internationale.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
