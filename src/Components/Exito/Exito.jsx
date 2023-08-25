import React, { useState, useEffect } from 'react';

const Exito = () => {

    const [countdown, setCountdown] = useState(5);//

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            window.location.href = 'https://www.drdiegobrimmaudo.com.ar/';
        }, 5000);

        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => {
            clearTimeout(redirectTimer);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='exito'>
            <h1>Tu mensaje ha sido enviado con éxito</h1>
            <img src="/images/logo-grande.png" alt="" />
            <h3>Serás redirigido hacia la página principal en {countdown} segundos...</h3>
        </div>
    )
}

export default Exito