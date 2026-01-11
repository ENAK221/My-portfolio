import React from 'react'
import Hero from '../components/Hero'
import ProjectsGrid from '../components/ProjectsGrid'

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="container">
        <h2 style={{marginTop: '1.5rem'}}>Projets récents</h2>
        <ProjectsGrid />
      </section>
    </div>
  )
}
