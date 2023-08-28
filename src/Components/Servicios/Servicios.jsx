import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import services from "../../js/services";

const Servicios = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleExpandCard = (cardId) => {
    if (expandedCard === cardId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardId);
    }
  };

  const handleCloseCard = () => {
    setExpandedCard(null);
  };

  return (
    <section className='services' id='servicios'>
      <h2 className='p-5'>Servicios</h2>
      <div className='content-services'>
        <div className='cards-services'>
          {services.map((service) => (
            <Card
              className={`card ${expandedCard === service.id ? 'expanded' : ''}`}
              key={service.id}
              style={{
                maxHeight: expandedCard === service.id ? '1000px' : '320px', 
                transition: 'max-height 1.2s ease',
              }}
            >
              <img src={service.img} alt="Servicio" />
              <CardContent>
                <h3>{service.titulo}</h3>
                {expandedCard === service.id && (
                  <div className={`card-content`}>
                    <ul className='ul-card'>
                      <li>{service.li1}</li>
                      <li>{service.li2}</li>
                      <li>{service.li3}</li>
                      <li>{service.li4}</li>
                    </ul>
                    <a href={service.wp} target='_blank' className='saber-mas-button'>
                      Contacto
                    </a>
                  </div>
                )}
              </CardContent>
              <div className='card-overlay'>
                {expandedCard === service.id ? (
                  <button className='cerrar' onClick={handleCloseCard}>
                    Cerrar
                  </button>
                ) : (
                  <button
                    className='saber-mas-button'
                    onClick={() => handleExpandCard(service.id)}
                  >
                    Saber más
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
        <div className='p-5 down-services'>
          {/* Resto del contenido */}
        </div>
      </div>

      <div className='p-5 down-services'>
          <div className='domicilio'>
          <div className='up-domicilio'>
            <div className='title-domicilio'>
              <h3>Nuevo servicio</h3>
            </div>
          </div>
          <div className='description-domicilio'>
            <div className='img-domicilio'><img src="/images/servicios/domicilio.png" alt="" /></div>
            <img className='img-mobile-domicilio' src="/images/servicios/mobile-domicilio.png" alt="" />
            <div className='medio-domicilio'>
              <h4>¡Pedí tu Consulta Cardiológica a Domicilio!</h4>
              <p className='p-mobile-domicilio'>Priorizamos tu comodidad y bienestar. Consultá por nuestras zonas de cobertura y lleva la atención cardiológica especializada directamente a tu puerta.</p>
              <a href="https://wa.me/+541164977403?text=Hola,%20solicito%20información%20sobre%20consulta%20cardiológica%20a%20domicilio"><button className='button'>Consultar</button></a>
            </div>
            <div className='p-domicilio none-domicilio'><p>Priorizamos tu comodidad y bienestar. Consultá por nuestras zonas de cobertura y lleva la atención cardiológica especializada directamente a tu puerta. </p></div>
          </div>

        </div>
        <div className='contact-services'>
          <h2 className='info-services-title'>¿Querés más información de nuestros servicios?</h2>
          <a href="https://wa.me/+541164977403" target='_blank'> <button className='button3'>Contanos</button></a>
        </div>
        </div>

    </section>
  );
};

export default Servicios;
