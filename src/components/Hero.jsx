import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="hero container fade-up">
      <h1 className="hero-title">Bonjour — je suis développeur Full‑Stack</h1>
      <p className="hero-sub">Je conçois et développe des applications web performantes et accessibles. J'aime travailler sur des projets qui ont un impact réel, en utilisant React, Node.js et des architectures modernes.</p>
      <p style={{marginTop: '1.2rem'}}>
        <a href="#contact"><button className="btn btn-primary">Contacte-moi</button></a>
      </p>
    </section>
  )
}
