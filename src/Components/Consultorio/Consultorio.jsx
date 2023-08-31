import React from 'react';

const Consultorio = () => {
    return (
        <section id='consultorio'>
            <h2 className='margin-title'>Consultorios</h2>
            <div className='container-fluid'>
                <div className="row p-3">
                    <div className="col consult-left">
                        <p>
                            Disponemos de tres consultorios. <strong>Sede capital</strong> (Ceretti 2098 Villa Urquiza) y <strong>Sede Gran Bs. AS.</strong> (Agustín Cafferata 5212, Caseros). Trabajamos sólo con turno previo, para brindar el tiempo y la dedicación que cada paciente merece, asegurando una atención de calidad.
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
                                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.69681856833!2d-58.5745384243096!3d-34.61182727295134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb83e0409b309%3A0x91eebd33e4f834a3!2sAgust%C3%ADn%20Cafferata%205212%2C%20B1678BAL%20Caseros%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1693342429607!5m2!1ses-419!2sar" width="600" height="450"></iframe>
                                <h4 className='direccion'>Agustín Cafferata 5212, Caseros</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Consultorio;