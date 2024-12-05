import './App.css'
import Estado from './componentes/Estado.jsx'
import Inicio from './pages/Inicio.jsx'
import Contacto from './pages/Contacto.jsx'
import Nosotros from './pages/Nosotros.jsx'
import NavBar from './componentes/NavBar.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './componentes/Header.jsx'
import Home from './pages/Home.jsx'
import { Datos } from './contextos/Contexto.jsx'
import Pagina1 from './componentes/Pagina1.jsx'
import Colores from './componentes/Colores.jsx'
function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
        </Routes>
      </Router>  
      {/* <Datos>
      <div className='App'>
        <Pagina1/>
        <Pagina1/>
        <Pagina1/>
      </div>
      <Colores/>
      </Datos>  */}

    </>
  )
}

export default App
