import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const testimonials = [
  {
    id: 1,
    text: "Ousmane a été un stagiaire exceptionnel chez Innovqube. Sa maîtrise technique en développement full-stack, combinée à son approche rigoureuse et sa capacité d'adaptation, en font un candidat idéal pour une alternance. Il a su prendre en charge des projets complexes, optimiser les performances et contribuer activement à l'équipe. Ce témoignage a été donné lors d'un sprint où j'ai démontré mes compétences de manière remarquable.",
    author: "Arnaud",
    role: "Tuteur de Stage - Innovqube Paris"
  }
]

export default function Testimonials() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} id="testimonials" className="testimonials container fade-up">
      <h2>Témoignages</h2>
      <p className="muted" style={{marginBottom: '2rem'}}>Ce que disent mes collaborateurs.</p>
      <div className="testimonials-grid">
        {testimonials.map(t => (
          <article key={t.id} className="testimonial-card">
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <p className="author-name">{t.author}</p>
              <p className="author-role">{t.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
