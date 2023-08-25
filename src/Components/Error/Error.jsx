import React from 'react'

const Error = () => {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
      const redirectTimer = setTimeout(() => {
        window.location.href = 'https://www.drdiegobrimmaudo.com.ar/';
      }, 5000);
  
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000); // Actualiza cada 1 segundo
  
      return () => {
        clearTimeout(redirectTimer);
        clearInterval(interval);
      };
    }, []);
  
  return (
    <div>
        <h1>Ha habido un error en el envio del mensaje, intentalo de nuevo</h1>
        <img src="/images/logo-grande.png" alt="" />
        <h3>Serás redirigido hacia la página principal en {countdown} segundos...</h3>
    </div>
  )
}


export default Error