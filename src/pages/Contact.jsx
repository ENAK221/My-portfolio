import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
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
  )
}
