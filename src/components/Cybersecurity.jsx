import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const cybersecuritySkills = [
  {
    skill: 'Linux',
    icon: 'fa-brands fa-linux',
    description: 'Administration système Linux : gestion des utilisateurs, permissions, installation de paquets, et configuration de services réseau.'
  },
  {
    skill: 'Adressage IP',
    icon: 'fa-solid fa-network-wired',
    description: 'Configuration et gestion des adresses IP, masques de sous-réseau, routage, et dépannage des problèmes de connectivité réseau.'
  },
  {
    skill: 'DHCP',
    icon: 'fa-solid fa-server',
    description: 'Configuration de serveurs DHCP pour l\'attribution automatique d\'adresses IP, gestion des baux et résolution des conflits d\'adresses.'
  },
  {
    skill: 'DNS',
    icon: 'fa-solid fa-globe',
    description: 'Mise en place et administration de serveurs DNS, gestion des zones, enregistrements, et résolution des noms de domaine.'
  },
  {
    skill: 'Cisco Packet Tracer',
    icon: 'fa-solid fa-diagram-project',
    description: 'Simulation de réseaux avec Cisco Packet Tracer : conception de topologies, configuration d\'équipements Cisco, et test de scénarios réseau.'
  },
  {
    skill: 'Active Directory Windows',
    icon: 'fa-solid fa-building-shield',
    description: 'Gestion de l\'Active Directory : création et gestion des utilisateurs, groupes, politiques de groupe (GPO), et sécurisation des domaines Windows.'
  }
]

export default function Cybersecurity() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} id="cybersecurity" className="cybersecurity container fade-up">
      <h2>Cybersécurité</h2>
      <p className="cybersecurity-intro">
        Compétences acquises dans les bases de la cybersécurité, incluant l'administration système et réseau.
      </p>

      <div className="cybersecurity-grid">
        {cybersecuritySkills.map((item, idx) => (
          <CyberCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </section>
  )
}

function CyberCard({ item, idx }) {
  const [light, setLight] = useState({ x: 0, y: 0 })

  return (
    <article
      className="cybersecurity-card fade-up"
      style={{
        animationDelay: `${idx * 0.15}s`,
        position: 'relative',
        overflow: 'hidden',
        padding: '1.5rem',
        borderRadius: '1rem',
        color: 'white',
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
      {[...Array(10)].map((_, i) => (
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
        className={item.icon}
        style={{
          position: 'absolute',
          right: '-10px',
          bottom: '-10px',
          fontSize: '5rem',
          opacity: 0.18,
          color: 'white',
          filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.4))',
          pointerEvents: 'none'
        }}
      />

      <h3>{item.skill}</h3>
      <p>{item.description}</p>
    </article>
  )
}
