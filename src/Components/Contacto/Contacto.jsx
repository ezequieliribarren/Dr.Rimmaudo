import React from 'react'

const Contacto = () => {
  return (
    <section id='contacto'>
      <h2 className='margin-title'>Pedí tu turno</h2>
      <div className='container contenedor-contacto'>
          <div className='contacto'>
        <form action="">
          <div className='nombre-apellido'>
            <input
              type="text"
              placeholder="Nombre"
              required
            />
            <input
              type="text"
              placeholder="Apellido"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Correo Electrónico"
            required
          />
            <input
            type="tel"
            placeholder="Telefono"
            required
          />
          <textarea className='textarea'
            name="consulta"
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
          <div className='red'><a href=""><img src="/images/contacto/facebook.png" alt="" />@drrimaudo</a></div>
          <div className='red'><a href=""><img src="/images/contacto/instagram.png" alt="" />@drrimaudo</a></div>
          <div className='red'><a href=""><img src="/images/contacto/google.png" alt="" />Doctor Rimaudo</a></div>
          </div>
    </section>

  )
}

export default Contacto