import React, { useState } from 'react'

export default function ProfileImage({ 
  src = '/images/ok picture/ok photo.jpeg', 
  alt = 'Photo de profil',
  size = 'large',
  className = ''
}) {
  const [imgError, setImgError] = useState(false)
  const sizeClass = `profile-image-${size}`
  const fallbackSrc = '/images/profile-placeholder.svg'
  
  const handleError = () => {
    setImgError(true)
  }
  
  return (
    <div className={`profile-image-wrapper ${sizeClass} ${className}`}>
      <img 
        src={imgError ? fallbackSrc : src} 
        alt={alt}
        className="profile-image"
        onError={handleError}
      />
      <div className="profile-image-border"></div>
      <div className="profile-image-glow"></div>
    </div>
  )
}
