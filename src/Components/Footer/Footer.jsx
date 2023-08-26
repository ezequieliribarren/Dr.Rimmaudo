import React from 'react'

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
                        <a href="#servicios">Servicios</a>
                    </div>

                    <div>
                        <a href="#trayectoria">Mi Trayectoria</a>
                    </div>

                    <div>
                        <a href="#testimonios">Mis Pacientes</a>
                    </div>

                    <div>
                        <a href="#consultorio">Mi Consultorio</a>
                    </div>

                    <div>
                        <a href="#contacto">Contacto</a>
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