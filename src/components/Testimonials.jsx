import React, { useState } from 'react'
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
      <p className="muted" style={{ marginBottom: '2rem' }}>
        Ce que disent mes collaborateurs.
      </p>

      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={t.id} t={t} idx={idx} />
        ))}
      </div>
    </section>
  )
}

function TestimonialCard({ t, idx }) {
  const [light, setLight] = useState({ x: 0, y: 0 })

  return (
    <article
      className="testimonial-card fade-up"
      style={{
        animationDelay: `${idx * 0.15}s`,
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem',
        borderRadius: '1rem',
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: `
          inset 0 0 25px rgba(255,255,255,0.08),
          0 8px 25px rgba(0,0,0,0.25)
        `,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease'
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
      {[...Array(12)].map((_, i) => (
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
        className="fa-solid fa-quote-left"
        style={{
          position: 'absolute',
          right: '-10px',
          bottom: '-10px',
          fontSize: '6rem',
          opacity: 0.18,
          color: 'white',
          filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.4))',
          pointerEvents: 'none'
        }}
      />

      {/* Texte du témoignage */}
      <p className="testimonial-text" style={{ color: 'rgba(255,255,255,0.9)' }}>
        "{t.text}"
      </p>

      <div className="testimonial-author" style={{ marginTop: '1rem' }}>
        <p className="author-name" style={{ fontWeight: '600' }}>{t.author}</p>
        <p className="author-role" style={{ opacity: 0.8 }}>{t.role}</p>
      </div>
    </article>
  )
}
