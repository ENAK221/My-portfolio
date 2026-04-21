import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ContactForm() {
  const [status, setStatus] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [light, setLight] = useState({ x: 0, y: 0 })
  const ref = useScrollAnimation()

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Envoi en cours...')
    setTimeout(() => {
      setStatus('Message envoyé avec succès! (démo)')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 800)
  }

  return (
    <section ref={ref} id="contact" className="contact container fade-up">
      <h1 style={{ marginBottom: '0.5rem' }}>Prenons contact</h1>
      <p className="muted" style={{ maxWidth: '72ch', marginBottom: '2rem' }}>
        Vous avez un projet en tête? N'hésitez pas à me contacter. Je serai ravi de discuter de vos idées.
      </p>

      <div
        className="contact-card"
        style={{
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
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          maxWidth: 650
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          setLight({ x, y })

          const rotateX = (y - rect.height / 2) / 20
          const rotateY = (x - rect.width / 2) / -20
          e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
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
          className="fa-solid fa-paper-plane"
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

        {/* FORMULAIRE */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nom</label>
            <input
              required
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              required
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="input"
              placeholder="Décrivez votre projet..."
            />
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <button type="submit" className="btn btn-primary">Envoyer le message</button>
          </div>

          {status && (
            <div
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: '0.9rem',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
