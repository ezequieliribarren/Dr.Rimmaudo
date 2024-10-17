import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "trayectoria", label: "Mi trayectoria" },
    { id: "testimonios", label: "Mis pacientes" },
    { id: "consultorio", label: "Consultorio" },
    { id: "contacto", label: "Contacto" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <ScrollLink to="inicio" smooth={true} duration={500} className="navbar-brand px-3">
          <img className='logo-navbar' src="./images/logo.png" alt="Logo" />
        </ScrollLink>
        <button
          className={`navbar-toggler ${isMenuOpen ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className={`navbar-toggler-icon ${isMenuOpen ? "d-none" : ""}`}></span>
          <span id="close-icon" className={`close-icon ${isMenuOpen ? "" : "d-none"}`}>&#88;</span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto px-5">
            {sections.map(section => (
              <li className="nav-item" key={section.id}>
                <ScrollLink className="nav-link" to={section.id} smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                  {section.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
