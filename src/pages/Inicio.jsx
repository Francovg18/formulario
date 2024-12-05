import React from 'react'
import Estado from '../componentes/Estado'
import Video from '../componentes/Video'
import Footer from '../componentes/Footer'
import { Form } from '../componentes/Form.jsx'
import Formulario from '../componentes/Formulario.jsx'
function Inicio() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        <Form/>
        <Video/>
        <Footer/>
    </>
  )
}

export default Inicio