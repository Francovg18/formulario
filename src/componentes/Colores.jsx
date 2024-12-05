import React from 'react'
import { useContext } from 'react'
import { Contexto } from '../contextos/Contexto'
function Colores() {
    const {setColor} = useContext(Contexto)
  return (
    <div className='colores'>
        <div className='color' onClick={()=>{
            setColor('red')
        }}></div>
        <div className='color' onClick={()=>{
            setColor('blue')
        }}></div>
        <div className='color' onClick={()=>{
            setColor('green')
        }}></div>
        <div className='color' onClick={()=>{
            setColor('yellow')
        }}></div>
    </div>
  )
}

export default Colores