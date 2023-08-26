import React from 'react';
import Carousel from "react-elastic-carousel";
import { testimonios } from '../../js/testimonios';

const Testimonios = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },    
    { width: 550, itemsToShow: 1 },  
    { width: 900, itemsToShow: 2 },   
  ];

  
  return (
    <section id='testimonios'>
      <h2 className='margin-title'>Mis pacientes</h2>
      <h3>Conocé testimonios de mis pacientes</h3>
      <div className='container testimonios'>
        <Carousel breakPoints={breakPoints}>
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className='testimonio'>
              <img src={testimonio.imgUrl} alt="Testimonio" />
              <div>
                <p>{testimonio.description}</p>
              </div>
              
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonios;