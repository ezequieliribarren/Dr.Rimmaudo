import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {

  const handleLlamarClick = () => {
    window.location.href = 'tel:+541164977403';
  };

  return (
    <header>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="100">
            <img src="/images/header/img1.png" className="d-block w-100 none-desktop" alt="Doctor Rimmaudo" />
            <img src="/images/header/img3.png" className="d-block w-100 none-mobile" alt="Doctor Rimmaudo" />
            <div className="call-to-action">
              <button className='button2' onClick={handleLlamarClick}>Llamar</button>
              <a target='_blank' href='https://wa.me/+541164977403?text=Hola,%20estoy%20en%20la%20página%20del%20Dr.%20Rimmaudo%20y%20quiero%20 pedir%20más%20información"'><button className='button'>Contacto</button></a>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src="/images/header/img2.png" className="d-block w-100 none-desktop" alt="Doctor Rimmaudo" />
            <img src="/images/header/img4.png" className="d-block w-100 none-mobile" alt="Doctor Rimmaudo" />
            <div className="call-to-action">
              <button className='button2' onClick={handleLlamarClick}>Llamar</button>
              <a target='_blank' href='https://wa.me/+541164977403?text=Hola,%20estoy%20en%20la%20página%20del%20Dr.%20Rimmaudo%20y%20quiero%20 pedir%20más%20información"'><button className='button'>Contacto</button></a>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src="/images/header/img6.png" className="d-block w-100 none-desktop" alt="Doctor Rimmaudo" />
            <img src="/images/header/img5.png" className="d-block w-100 none-mobile" alt="Doctor Rimmaudo" />
            <div className="call-to-action">
              <button className='button2' onClick={handleLlamarClick}>Llamar</button>
              <a target='_blank' href='https://wa.me/+541164977403?text=Hola,%20estoy%20en%20la%20página%20del%20Dr.%20Rimmaudo%20y%20quiero%20 pedir%20más%20información"'><button className='button'>Contacto</button></a>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src="/images/header/img8.png" className="d-block w-100 none-desktop" alt="Doctor Rimmaudo" />
            <img src="/images/header/img7.png" className="d-block w-100 none-mobile" alt="Doctor Rimmaudo" />
            <div className="call-to-action">
              <button className='button2' onClick={handleLlamarClick}>Llamar</button>
              <a target='_blank' href='https://wa.me/+541164977403?text=Hola,%20estoy%20en%20la%20página%20del%20Dr.%20Rimmaudo%20y%20quiero%20 pedir%20más%20información"'><button className='button'>Contacto</button></a>
            </div>
          </div>
        </div>
      </div>
      <a className='whatsFlot' target='_blank' href="https://wa.me/+541164977403?text=Hola,%20estoy%20en%20la%20página%20del%20Dr.%20Rimmaudo%20y%20quiero%20 pedir%20más%20información">
        <img alt="Chatear en Whatsapp" src="/images/wp.png" />
      </a>
    </header>
  )
}

export default Header;