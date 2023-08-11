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
      <div className='p-5'>
          <div className='domicilio'>
          <div className='up-domicilio'>
            <div className='title-domicilio'>
              <h3>Nuevo servicio</h3>
            </div>
            <div>
             <img className='none-mobile' src="/images/servicios/domicilio.png" alt="" /> 
            </div>
            
          </div>
          <div className='description-domicilio'>
            <div className='img-domicilio'><img src="/images/servicios/domicilio.png" alt="" /></div>
            <div className='medio-domicilio'>
              <h4>¡Pedí tu Consulta Cardiológica a Domicilio!</h4>
              <a href=""><button className='button'>Consultar</button></a>
            </div>
            <div className='p-domicilio'><p>Priorizamos tu comodidad y bienestar. Consultá por nuestras zonas de cobertura y lleva la atención cardiológica especializada directamente a tu puerta. </p></div>
          </div>

        </div>
        <div className='contact-services'>
          <h3>¿Querés más información de nuestros servicios?</h3>
          <a href="https://wa.me/+541164977403" target='_blank'> <button className='button3'>Contanos</button></a>
        </div></div>
      </div>
      

    </section>
  )
}

export default Servicios