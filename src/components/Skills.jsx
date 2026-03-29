import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express','PHP' ,'PostgreSQL', 'REST APIs']
  },
  {
    category: 'Outils & DevOps',
    skills: ['Git', 'Docker', 'GitHub Actions', 'AWS']
  }
]

export default function Skills() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} id="skills" className="skills container fade-up">
      <h2>Compétences</h2>
      <div className="skills-grid">
        {skillsData.map((skillGroup, idx) => (
          <article key={idx} className="skill-card fade-up" style={{animationDelay: `${idx * 0.1}s`}}>
            <h3>{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
