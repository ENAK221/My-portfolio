import React, { useState } from 'react'

export default function ProfileImage({ 
  src = '/images/ok picture/ok photo.jpeg', 
  alt = 'Photo de profil',
  size = 'large',
  className = ''
}) {
  const [imgError, setImgError] = useState(false)
  const [light, setLight] = useState({ x: 0, y: 0 })

  const sizeClass = `profile-image-${size}`
  const fallbackSrc = '/images/profile-placeholder.svg'
  
  const handleError = () => setImgError(true)

  return (
    <div
      className={`profile-image-wrapper ${sizeClass} ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '50%',
        padding: '8px',
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,255,255,0.15)',
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

        const rotateX = (y - rect.height / 2) / 20
        const rotateY = (x - rect.width / 2) / -20
        e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
      }}
    >
      {/* Spotlight dynamique */}
      <div
        style={{
          position: 'absolute',
          top: light.y - 120,
          left: light.x - 120,
          width: 240,
          height: 240,
          background: 'radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)',
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

      {/* Halo lumineux */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          boxShadow: '0 0 35px rgba(255,255,255,0.35)',
          pointerEvents: 'none'
        }}
      />

      {/* Image */}
      <img 
        src={imgError ? fallbackSrc : src} 
        alt={alt}
        className="profile-image"
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          objectFit: 'cover',
          position: 'relative',
          zIndex: 2
        }}
      />

      {/* Inner shadow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          boxShadow: 'inset 0 0 40px rgba(0,0,0,0.45)',
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}
