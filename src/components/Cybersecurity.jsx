import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const cybersecuritySkills = [
  {
    skill: 'Linux',
    description: 'Administration système Linux : gestion des utilisateurs, permissions, installation de paquets, et configuration de services réseau.'
  },
  {
    skill: 'Adressage IP',
    description: 'Configuration et gestion des adresses IP, masques de sous-réseau, routage, et dépannage des problèmes de connectivité réseau.'
  },
  {
    skill: 'DHCP',
    description: 'Configuration de serveurs DHCP pour l\'attribution automatique d\'adresses IP, gestion des baux et résolution des conflits d\'adresses.'
  },
  {
    skill: 'DNS',
    description: 'Mise en place et administration de serveurs DNS, gestion des zones, enregistrements, et résolution des noms de domaine.'
  },
  {
    skill: 'Cisco Packet Tracer',
    description: 'Simulation de réseaux avec Cisco Packet Tracer : conception de topologies, configuration d\'équipements Cisco, et test de scénarios réseau.'
  },
  {
    skill: 'Active Directory Windows',
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
          <article key={idx} className="cybersecurity-card fade-up" style={{animationDelay: `${idx * 0.1}s`}}>
            <h3>{item.skill}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}