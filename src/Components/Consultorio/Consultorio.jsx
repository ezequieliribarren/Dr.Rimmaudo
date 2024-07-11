import React from 'react';

const Consultorio = () => {
    return (
        <section id='consultorio'>
            <h2 className='margin-title'>Consultorios</h2>
            <div className='container-fluid'>
                <div className="row p-3">
                    <div className="col-lg-6 consult-left">
                        <p>
                         Nuestro consultorio se encuentra en <strong>Agustín Cafferata 5212, Caseros</strong> . Trabajamos sólo con turno previo, para brindar el tiempo y la dedicación que cada paciente merece, asegurando una atención de calidad.
                        </p>
                        <p>
                            Si estás buscando un enfoque personalizado y comprometido con tu bienestar cardiovascular, no dudes en contactarme para programar tu consulta. Mi objetivo es acompañarte en el camino hacia una vida más saludable, brindándote las mejores opciones de tratamiento y cuidado para tu salud.
                        </p>
                        <p className='p-blue'>¡Pedí tu turno! </p>

                    </div>
                    <div className="col-lg-6">
                        <div className='consultorios'>         
                            <div style={{margin: "1rem"}}><img src="images/cons1.png" alt="" /> <div><p>Consultorio CABA<br />
                                <strong>Blanco Encalada<br />3473 6° B, Belgrano.</strong></p></div></div>
                            <div><img src="images/cons2.png" alt="" /> <div><p>Consultorio Caseros<br />
                                <strong>Agustín<br />Cafferata 5212</strong></p></div></div>
                       
                           
                        </div>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-lg-6">
                        <div className="canales-contacto">
                            <div className='canal'>
                                <div className='img-canal'>
                                    <img src="/images/contacto/whats.png" alt="" />
                                </div> <h4>11-6497-7403</h4> <a target='_blank' href="https://wa.me/+541164977403">contactar</a>
                            </div>
                            <div className='canal'>
                                <div className='img-canal'>
                                    <img src="/images/contacto/mail.png" alt="" />
                                </div> <h4>info@doctorrimmaudo.com</h4> <a href="mailto:info@doctorrimmaudo.com">contactar</a>
                            </div>
                            <div className='canal'>
                                <div className='img-canal'>
                                    <img src="/images/contacto/tel.png" alt="" />
                                </div>
                                <h4>11-6497-7403</h4> <a href="tel:+541164977403">llamar</a>
                            </div>
                            <div className='horario-atencion'>
                                <h4><strong>Horario de atención telefónica:</strong> Lunes a Viernes de 9 a 20 hs.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 contenedor-maps">
                        <div className='map-border'>
                            <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5306619957373!2d-58.470091700000005!3d-34.5654369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb67dca958bf9%3A0xbe3e2c11a72f5159!2sBlanco%20Encalada%203473%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1720660412769!5m2!1ses-419!2sar" width="600" height="250" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <h4 className='direccion'>Blanco Encalada 3473 6° B, Belgrano</h4>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Consultorio;