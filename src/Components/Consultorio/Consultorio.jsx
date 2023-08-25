import React from 'react';

const Consultorio = () => {
    return (
        <section id='consultorio'>
            <h2 className='margin-title'>Consultorios</h2>
            <div className='container-fluid'>
                <div className="row p-3">
                    <div className="col consult-left">
                        <p>
                            Disponemos de tres consultorios. Dos ubicdos en la zona de capital y uno en la zona de Caseros ( Tres de Febrero - Provincia de Bs. As.). Trabajamos sólo con turno previo, para brindar el tiempo y la dedicación que cada paciente merece, asegurando una atención de calidad.
                        </p>
                        <p>
                            Si estás buscando un enfoque personalizado y comprometido con tu bienestar cardiovascular, no dudes en contactarme para programar tu consulta. Mi objetivo es acompañarte en el camino hacia una vida más saludable, brindándote las mejores opciones de tratamiento y cuidado para tu salud.
                        </p>
                        <p className='p-blue'>¡Pedí tu turno! </p>

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
                    <div className="col contenedor-maps">
                        <div className='map-border'>
                            <div>
                                <iframe
                                    className="map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.700230995897!2d-58.57164299999999!3d-34.611740999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb83e0733d92b%3A0x658eb5ca2a6ca5bc!2sAgust%C3%ADn%20Cafferata%205210%2C%20B1678BAL%20Caseros%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1691088857350!5m2!1ses!2sar"
                                    width="600"
                                    height="450"
                                    loading="lazy"
                                ></iframe>
                                <h4 className='direccion'>Agustín Cafferata 5210, Caseros</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Consultorio;