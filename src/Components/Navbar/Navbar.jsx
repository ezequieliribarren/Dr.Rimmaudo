import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link smooth to="/#" className="navbar-brand px-3"><img className='logo-navbar' src="./images/logo.png" alt="Logo" /></Link>
          <button
            className={`navbar-toggler ${isMenuOpen ? "collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className={`navbar-toggler-icon ${isMenuOpen ? "d-none" : ""}`}></span>
            <span id="close-icon" className={`close-icon ${isMenuOpen ? "" : "d-none"}`}>&#88;</span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto px-5">
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="/#servicios" className="nav-link">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="/#trayectoria" className="nav-link">
                  Mi trayectoria
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="/#testimonios" className="nav-link">
                  Mis pacientes
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="/#consultorio" className="nav-link">
                  Consultorio
                </Link>
              </li>
              <li className="nav-item li-contact">
                <Link smooth to="/#contacto" className="nav-link">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar;
