import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header container">
      <div className="logo">Ton Nom</div>
      <nav className="nav-links">
        <NavLink to="/" end style={{textDecoration:'none'}}>Home</NavLink>
        <NavLink to="/projects" style={{textDecoration:'none'}}>Projets</NavLink>
        <NavLink to="/about" style={{textDecoration:'none'}}>À propos</NavLink>
        <NavLink to="/contact" style={{textDecoration:'none'}}>Contact</NavLink>
      </nav>
    </header>
  )
}
