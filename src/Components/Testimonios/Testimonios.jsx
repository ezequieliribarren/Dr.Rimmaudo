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
    <section id="testimonios"><h2 class="margin-title">Mis pacientes</h2><h3>Conocé testimonios de mis pacientes</h3><div class="reseñas"><iframe src="https://widgets.sociablekit.com/google-reviews/iframe/25439006" frameborder="0" width="90%" height="510"></iframe></div></section>
  )
}

export default Testimonios;