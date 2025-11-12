import React from 'react'

export default function Header() {
  return (
    <>
     <div class="header">
          <img
            src="src/assets/website_qr.png"
            alt="website"
            class="header-img left-img"
          />

          <div class="header-text">
            <p class="header-title">header-title</p>
            <p class="header-subtitle">header-subtitle</p>
          </div>

          <img
            src="src/assets/location.png"
            alt="location"
            class="header-img right-img"
          />
        </div>
    
    </>
  )
}
