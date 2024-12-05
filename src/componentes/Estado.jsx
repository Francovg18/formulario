import { useState } from "react";
import '../estilos/Estados.css';
import Button from 'react-bootstrap/Button';
import { CiAlarmOn } from "react-icons/ci";
import { CiFaceFrown } from "react-icons/ci";
function Estado() {
  const [nombre, setNombre] = useState('Juan');
  const cambiar=()=>{
    setNombre(nombre==='Juan'?'Pedro':'Juan');
  }

  const[contador, setContador] = useState(1);

  const aumentar=()=>{
    setContador(contador*3);
  }
  const reducir=()=>{
    setContador(contador-1);
  }
  const reiniciar=()=>{
    setContador(1);
  }

  const persona = [
    {
        nombre: 'Juan',
        edad: 25
    },
    {
        nombre: 'Pedro',
        edad: 18
    },{
        nombre: 'Ana',
        edad: 19
    }
  ]
  const [indice, setIndice] = useState(0);
  const siguiente=()=>{
    setIndice((indice+1)%persona.length);
  }
  return (
    <>
        <h1>Uso de estados</h1>
        <h2>Hola mi nombre es {nombre}</h2>
        <button onClick={cambiar}>Cambiar nombre <CiFaceFrown/></button>

        <h1>Contador <CiAlarmOn /></h1>
        <div className="cajita">
            {contador}
        </div>
        <Button variant="primary" onClick={aumentar} className="boton">Aumentar</Button>
        <Button variant="success" onClick={reducir} className="boton">Reducir</Button>
        <Button variant="info" onClick={reiniciar} className="boton">Reiniciar</Button>

        <h1>Arreglos</h1>
        <p>{persona[indice].nombre} tiene {persona[indice].edad} años</p>
        <button onClick={siguiente}>Ver siguietne</button>
    </>
  )
}

export default Estado