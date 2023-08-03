import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
  return (
    <div className='header'>
    <div className='forma'>
        
    </div>
    <div className="carousel-container">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/header/img1.png" className="d-block w-100" alt="Imagen 1" />
          </div>
          <div className="carousel-item">
            <img src="/images/header/img1.png" className="d-block w-100" alt="Imagen 2" />
          </div>
          <div className="carousel-item">
            <img src="/images/header/img1.png" className="d-block w-100" alt="Imagen 3" />
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Header