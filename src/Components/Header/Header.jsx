import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/header/img1.png" className="d-block w-100" alt="..." />
            <div className="call-to-action">
            <a href="#" className='button'>Llamar</a>
              <a href="#" className='button'>Contacto</a>
            </div>
          </div>
          <div className="carousel-item active">
            <img src="images/header/img1.png" className="d-block w-100" alt="..." />
            <div className="call-to-action">
              <a href="#" className='button'>Llamar</a>
              <a href="#" className='button'>Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
