import React from 'react'

const Contacto = () => {
  return (
    <section id='contacto'>
      <h2 className='margin-title'>Pedí tu turno</h2>
      <div className='container contacto'>
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
    </section>

  )
}

export default Contacto