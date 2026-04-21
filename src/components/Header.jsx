import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [light, setLight] = useState({ x: 0, y: 0 })

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className="site-header"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(255,255,255,0.15)',
        boxShadow: `
          inset 0 0 25px rgba(255,255,255,0.08),
          0 8px 25px rgba(0,0,0,0.25)
        `,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.4s ease'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setLight({ x, y })
      }}
    >
      {/* Spotlight dynamique */}
      <div
        style={{
          position: 'absolute',
          top: light.y - 200,
          left: light.x - 200,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)',
          pointerEvents: 'none',
          transition: '0.1s'
        }}
      />

      {/* Particules */}
      {[...Array(14)].map((_, i) => (
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
        className="fa-solid fa-sparkles"
        style={{
          position: 'absolute',
          right: '10px',
          bottom: '-20px',
          fontSize: '4rem',
          opacity: 0.15,
          color: 'white',
          filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.4))',
          pointerEvents: 'none'
        }}
      />

      <div className="container header-content">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">{'</>'}</span>
          <span className="logo-text">Portfolio</span>
        </NavLink>

        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Accueil</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projets</NavLink>
          <NavLink to="/about" onClick={closeMenu}>À propos</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>

        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
