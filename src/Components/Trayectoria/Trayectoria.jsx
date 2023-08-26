import React from 'react'
import LiniaDeTiempo from '../Timeline/Timeline'


const Trayectoria = () => {
    return (
        <section id='trayectoria'>
            <h2  className='margin-title'>Mi Trayectoria</h2>
            <div className='capacitations'>
                <div className='card-capacitations'>
                    <div className='capacitations-img'>
                        <img src="/images/trayectoria/img1.png" alt="Trayectoria" />
                    </div>
                    <div className='capacitations-description'>
                        <div><h3>Médico | UBA</h3></div>
                        <div className='line'></div>
                        <div className='p-capacitations'><p>Me recibí de médico en el año 2000.</p></div>
                    </div>
                </div>
                <div className='card-capacitations'>
                    <div className='trayecto-img'>
                        <img src="/images/trayectoria/img2.png" alt="Trayectoria" />
                    </div>
                    <div className='capacitations-description'>
                        <div><h3>Especialización
Cardiología | UBA</h3></div>
                        <div className='line'></div>
                        <div className='p-capacitations'><p>Soy especialista en Cardiología egresado de la Universidad de Buenos Aires.</p></div>
                    </div>
                </div>
                <div className='card-capacitations'>
                    <div className='trayecto-img'>
                        <img src="/images/trayectoria/img3.png" alt="Trayectoria" />
                    </div>
                    <div className='capacitations-description'>
                        <div><h3> 
Medicina Deportiva | UBA</h3></div>
                        <div className='line'></div>
                        <div className='p-capacitations'><p>Me especializo en medicina deportiva, puedo guiarte a alcanzar tus objetivos de manera sana.</p></div>
                    </div>
                </div>
            </div>
            <LiniaDeTiempo/>
        </section>
    )
}

export default Trayectoria