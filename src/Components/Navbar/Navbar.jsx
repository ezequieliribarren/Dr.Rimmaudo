import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
                    <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid ">
                    <a className="navbar-brand px-3" href="#"><img className='logo-navbar' src="./images/logo.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto px-5 ">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#servicios">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="#trayectoria">Mi Trayectoria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="#testimonios">Mis pacientes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="#consultorio">Consultorio</a>
                            </li>
                            <li className="nav-item li-contact">
                                <a className="nav-link"  href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Navbar