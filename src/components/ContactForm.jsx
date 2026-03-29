import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ContactForm() {
  const [status, setStatus] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
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
      <h1 style={{marginBottom: '0.5rem'}}>Prenons contact</h1>
      <p className="muted" style={{maxWidth: '72ch', marginBottom: '2rem'}}>
        Vous avez un projet en tête? N'hésitez pas à me contacter. Je serai ravi de discuter de vos idées.
      </p>
      
      <form onSubmit={handleSubmit} style={{maxWidth: 600}}>
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

        <div style={{marginTop: '1.5rem'}}>
          <button type="submit" className="btn btn-primary">Envoyer le message</button>
        </div>
        
        {status && (
          <div style={{
            marginTop: '1rem',
            padding: '0.75rem',
            borderRadius: '8px',
            background: status.includes('succès') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(124, 92, 255, 0.1)',
            color: status.includes('succès') ? '#22c55e' : 'var(--accent)',
            fontSize: '0.9rem'
          }}>
            {status}
          </div>
        )}
      </form>
    </section>
  )
}

