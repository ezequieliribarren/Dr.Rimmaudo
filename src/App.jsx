
import Exito from "./Components/Exito/Exito"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Components/Layout/Layout";
import Error from "./Components/Error/Error";

function App() {


  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/enviado" element={<Exito/>} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
