import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs
      .sendForm('service_w44f964', 'template_t2acy5f', form.current, 'LgEhSjwAP1rgAQNO_')
      .then((result) => {
        window.location.href = "#/enviado"
    }, (error) => {
      window.location.href = "#/error"
    });
  };
  return (
    <section id='contacto'>
      <h2 className='margin-title'>Pedí tu turno</h2>
      <div className='container contenedor-contacto'>
          <div className='contacto'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='nombre-apellido'>
            <input
              type="text"
              placeholder="Nombre" name='user_name'
              required
            />
            <input
              type="text"
              placeholder="Apellido" name='user_apellido'
              required
            />
          </div>
          <input
            type="email"
            placeholder="Correo Electrónico" name='user_email'
            required
          />
            <input
            type="tel"
            placeholder="Teléfono" name='user_tel'
            required
          />
          <textarea className='textarea' 
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Escribe aquí tu consulta..."
            required
          ></textarea>
          <button className='button' type="submit">Enviar</button>
        </form>
      </div>

      </div>
      <div className='redes-contacto'>
          <div><h4>También <br /> visitame en:</h4></div>
          <div className='red'><a target='_blank' href="https://m.facebook.com/diego.rimmaudo.5/"><img src="/images/contacto/facebook.png" alt="Facebook" />@drrimmaudo</a></div>
          <div className='red'><a target='_blank' href="https://www.instagram.com/dr.rimmaudo/"><img src="/images/contacto/instagram.png" alt="Instagram" />@dr.rimmaudo</a></div>
          <div className='red'><a target='_blank' href="https://g.co/kgs/v4Y1jv"><img src="/images/contacto/google.png" alt="Google" />Doctor Rimmaudo</a></div>
          </div>
    </section>

  )
}

export default Contacto