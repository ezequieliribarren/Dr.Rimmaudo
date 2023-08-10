import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import services from "../../js/services"

const Servicios = () => {
  return (
    <section className='services' id='servicios'>
      <h2 className='p-5'>Servicios</h2>
      <div className='content-services'>        <div className='cards-services'>
        {services.map((service) => (
          <Card className='card' key={service.id} sx={{ maxWidth: 320 }}>
            <img src={service.img} alt="" />
            <CardContent>
              <h3>{service.titulo}</h3>
              <p>{service.description}</p>

              <ul>
                <li>{service.li1}</li>
                <li>{service.li2}</li>
                <li>{service.li3}</li>
                <li>{service.li4}</li>
              </ul>
            </CardContent>
            <div className='card-overlay'>
                <a href='#' className='saber-mas-button'>
                  Saber más
                </a>
              </div>
          </Card>
        ))}

      </div>
        <div className='contact-services'>
          <h3>¿Querés saber más?</h3>
          <a   href="https://wa.me/+541164977403" target='_blank'>Contanos</a>
        </div></div>

    </section>
  )
}

export default Servicios