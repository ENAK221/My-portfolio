import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ProfileImage from '../components/ProfileImage'

export default function About(){
  const ref = useScrollAnimation()

  const experience = [
    {
      year: 'Mars 2025 - Juin 2025',
      role: 'Stagiaire Développeur Full-Stack',
      company: 'Innovqube Paris',
      desc: `Stagiaire sur des applications mobiles à forte audience (Waze, Airbnb) entièrement construites en Laravel. J'ai pris part à l'ensemble du cycle de développement :
• Analyse des besoins et modélisation relationnelle pour la base de données MySQL
• Élaboration d'API REST sécurisées avec Laravel, intégration de services tiers (Stripe, Firebase)
• Optimisation des requêtes, indexes et migrations pour garantir la scalabilité
• Gestion des tâches cron et du versioning des schémas
• Mise en place de tests unitaires (PHPUnit) et fonctionnels
• Déploiements sur serveurs Docker via GitLab CI/CD
En pratique, j'ai manipulé quasiment toutes les briques (BDD, back, intégration, déploiement), ce qui m'a permis d'acquérir une vision end-to-end du produit.`
    },
    /*{
      year: '2021 - 2023',
      role: 'Développeur Frontend',
      company: 'Startup ABC',
      desc: ''
    }*/,
   /* {
      year: '2020 - 2021',
      role: 'Développeur Junior',
      company: 'Agence Web',
      desc: 'Premiers projets web, apprentissage des fondamentaux.'
    }
  ]*/
  ]
  return (
    <div ref={ref} className="container about-page fade-up" style={{padding: '3rem 0'}}>
      <div className="about-hero">
        <div className="about-content">
          <h1 style={{marginBottom: '0.5rem'}}>À propos de moi</h1>
          <p className="muted" style={{maxWidth: '72ch', marginBottom: '2rem'}}>
            Je suis un développeur Full-Stack passionné par la création de solutions web innovantes et performantes. 
            Avec une expérience en React, Node.js et cloud architecture, j'aime transformer les idées en produits réels.
          </p>
        </div>

        <div className="about-image">
          <ProfileImage size="medium" />
        </div>
      </div>

      <h2 style={{marginTop: '3rem', marginBottom: '1.5rem'}}>Expérience</h2>
      <div className="timeline">
        {experience.map((exp, idx) => (
          <article key={idx} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="timeline-year">{exp.year}</p>
              <h3 style={{margin: '0.25rem 0'}}>{exp.role}</h3>
              <p className="muted" style={{fontSize: '0.95rem'}}>{exp.company}</p>
              <p style={{marginTop: '0.5rem'}}>{exp.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <h2 style={{marginTop: '2rem', marginBottom: '1rem'}}>Éducation</h2>
      <article className="education-card">
        <h3>Bachelor 3 - HETIC</h3>
        <p className="muted">HETIC, 2025</p>
        <p>Approfondissement en développement web et design numérique. Projets collaboratifs, UX/UI, JavaScript avancé, gestion de bases de données et déploiement d'applications. Stage en entreprise inclus.</p>
      </article>
    </div>
  )
}
