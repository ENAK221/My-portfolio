import React, { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Envoi en cours...')
    setTimeout(() => setStatus('Message envoyé (démo)'), 800)
  }

  return (
    <section id="contact" className="contact container fade-up">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} style={{maxWidth: 600}}>
        <label>Nom</label>
        <input required name="name" className="input" />

        <label>Email</label>
        <input required name="email" type="email" className="input" />

        <label>Message</label>
        <textarea required name="message" rows={5} className="input" />

        <div style={{marginTop: '1rem'}}>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </div>
        <div style={{marginTop: '0.6rem'}} className="muted">{status}</div>
      </form>
    </section>
  )
}

