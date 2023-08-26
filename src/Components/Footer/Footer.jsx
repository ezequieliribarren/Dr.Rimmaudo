import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
const Footer = () => {
    return (
        <footer>
            <div className="container-fluid footer">
                <div className="row">
                    <div className="logo-footer"><img src="/images/logo-grande.png" alt="Logo" /></div>

                </div>
                <div className="row">
                    <div className="redes-footer">
                        <div><h4>Encontrame en las redes</h4></div>
                        <div className='iconos-redes'>
                           <a target='_blank' href="https://m.facebook.com/diego.rimmaudo.5/"><img src="/images/face.png" alt="Facebook" /></a> 
                            <a target='_blank' href="https://www.instagram.com/dr.rimmaudo/"><img src="/images/insta.png" alt="Instagram" /></a>
                            <img src="/images/contacto/gog.png" alt="Google" />
                        </div>
                    </div>
                </div>
                <div className="links">
                    <div>
                        <Link  smooth to="/#servicios">Servicios</Link>
                    </div>

                    <div>
                        <Link  smooth to="/#trayectoria">Mi Trayectoria</Link>
                    </div>

                    <div>
                        <Link  smooth to="/#testimonios">Mis Pacientes</Link>
                    </div>

                    <div>
                        <Link smooth to="/#consultorio">Mi Consultorio</Link>
                    </div>

                    <div>
                        <Link  smooth to="/#contacto">Contacto</Link>
                    </div>

                </div>
                <div className="line-footer"></div>
                <div className="copy">
                 <a target='_blank' href="https://versadigital.com.ar/">Copyright © 2023 Versa Digital</a>
                </div>
            </div>

        </footer>
    )
}

export default Footer