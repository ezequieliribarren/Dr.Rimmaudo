import Consultorio from "./Components/Consultorio/Consultorio"
import Contacto from "./Components/Contacto/Contacto"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar"
import Servicios from "./Components/Servicios/Servicios"
import Testimonios from "./Components/Testimonios/Testimonios"
import Trayectoria from "./Components/Trayectoria/Trayectoria"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //

function App() {


  return (
    <>
<Navbar/>
<Header/>
<Servicios/>
<Trayectoria/>
<Testimonios/>
<Consultorio/>
<Contacto/>
<Footer/>
    </>
  )
}

export default App
