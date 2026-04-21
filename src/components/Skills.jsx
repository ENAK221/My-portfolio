import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillsData = [
  {
    category: 'Frontend',
    icon: 'fa-solid fa-code',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design']
  },
  {
    category: 'Backend',
    icon: 'fa-solid fa-server',
    skills: ['Node.js', 'Express', 'PHP', 'PostgreSQL', 'REST APIs']
  },
  {
    category: 'Outils & DevOps',
    icon: 'fa-solid fa-gears',
    skills: ['Git', 'Docker', 'GitHub Actions', 'AWS']
  }
]

export default function Skills() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} id="skills" className="skills container fade-up">
      <h2>Compétences</h2>

      <div className="skills-grid">
        {skillsData.map((group, idx) => (
          <SkillCard key={idx} group={group} idx={idx} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ group, idx }) {
  const [light, setLight] = useState({ x: 0, y: 0 })

  return (
    <article
      className="skill-card fade-up"
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
        className={group.icon}
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

      <h3>{group.category}</h3>

      <div className="skill-tags">
        {group.skills.map((skill, i) => (
          <span key={i} className="skill-tag">{skill}</span>
        ))}
      </div>
    </article>
  )
}
