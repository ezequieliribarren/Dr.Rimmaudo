import React, { useState, useEffect } from 'react';

const Error = () => {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
      const redirectTimer = setTimeout(() => {
        window.location.href = 'https://www.drdiegobrimmaudo.com.ar/';
      }, 6000);
  
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000); // Actualiza cada 1 segundo
  
      return () => {
        clearTimeout(redirectTimer);
        clearInterval(interval);
      };
    }, []);
  
  return (
    <div className='exito'>
    <img src="/images/logo.png" alt="Logo" />
    <h1>Ocurrió un error inesperado, vuelve a intentarlo.</h1>

    <h3>Serás redirigido hacia la página principal en {countdown} segundos...</h3>
</div>
  )
}


export default Error