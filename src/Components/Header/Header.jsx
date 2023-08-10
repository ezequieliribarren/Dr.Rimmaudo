import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {

  const handleLlamarClick = () => {
    window.location.href = 'tel:+541164977403';
  };

  return (
    <header>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-interval="800">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/header/img1.png" className="d-block w-100 none-desktop" alt="..." />
            <img src="images/header/img4.png" className="d-block w-100 none-mobile" alt="..." />
            <div className="call-to-action">
              <button className='button2' onClick={handleLlamarClick}>Llamar</button>
              <a href="#contacto"><button className='button'>Contacto</button></a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/header/img2.png" className="d-block w-100 none-desktop" alt="..." />
            <img src="images/header/img3.png" className="d-block w-100 none-mobile" alt="..." />
            <div className="call-to-action">
              <button className='button2' onClick={handleLlamarClick}>Llamar</button>
              <a href="#contacto"><button className='button'>Contacto</button></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
