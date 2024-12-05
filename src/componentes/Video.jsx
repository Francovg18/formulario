import React from 'react'
import ReactPlayer from 'react-player'
function Video() {
  return (
    <div className='container my-5'>
        <div className='card shadow-lg border-0'>
            <div card-header bg-primary text-white text-center>
                <h4>Video de youtube</h4>
            </div>
            <div className='card-body d-flex justify-content-center'>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=q1jqaK49SgU&list=PLFeTNZxoZpySr77qexSYZi2_70v2dA67_'
                    controls // Muestra los controles del video
                    playing={false} // Inicia el video automaticamente
                    loop={true} // Repite el video
                    volume={0.1} // Volumen del video
                    playbackRate={1} // Velocidad de reproduccion
                    width="100%"
                    height="400px"
                    onStart={() => alert('Video iniciado')}
            
                />
            </div>

            <div card-footer text-center>
                <p className='text-muted mb-0'> Disfruta este video proporcionado por <b>React Player</b> y con estilos <b>bootstrap</b></p>
            </div>
        </div>
    </div>
  )
}

export default Video