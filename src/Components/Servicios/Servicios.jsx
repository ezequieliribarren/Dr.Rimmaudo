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
              <img src={service.img} alt="" />
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
                  <button className='saber-mas-button' onClick={handleCloseCard}>
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
    </section>
  );
};

export default Servicios;
