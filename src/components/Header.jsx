import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="site-header">
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
