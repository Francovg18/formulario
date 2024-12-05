import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaUser, FaBirthdayCake, FaLock } from 'react-icons/fa';
import '../index.css';
import '../estilos/form.css';

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [validar, setValidar] = useState(false);

  // Observa los valores de contraseña y repetir contraseña
  const password = watch('contraseña');
  const repeatPassword = watch('repetirContraseña');

  useEffect(() => {
    // Validar si todos los campos están llenos
    const values = watch();
    setValidar(
      values.nombre && values.edad && password && repeatPassword && password === repeatPassword
    );
  }, [watch, password, repeatPassword]);

  const onSubmit = handleSubmit((data) => {
    Swal.fire({
      title: 'Datos enviados',
      text: 'El formulario ha sido enviado exitosamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      reset();
    });
  });

  return (
    <div className="container">
      <div className="form-container">
        <button className="close-button">×</button>
        <h2 className="title">Iniciar Sesion</h2>
        <form onSubmit={onSubmit} className="form">
          {/* Campo de Nombre */}
          <div className="form-group">
            <label htmlFor="nombre">
              <FaUser className="icon" /> NOMBRE:
            </label>
            <input
              type="text"
              id="nombre"
              className="input"
              {...register('nombre', {
                required: {
                  value: true,
                  message: 'Nombre requerido',
                },
              })}
            />
            {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
          </div>

          {/* Campo de Edad */}
          <div className="form-group">
            <label htmlFor="edad">
              <FaBirthdayCake className="icon" /> EDAD:
            </label>
            <input
              type="number"
              id="edad"
              className="input"
              {...register('edad', {
                required: {
                  value: true,
                  message: 'Edad requerida',
                },
                min: {
                  value: 18,
                  message: 'Debes ser mayor de 18 años',
                },
              })}
            />
            {errors.edad && <span className="error-message">{errors.edad.message}</span>}
          </div>

          {/* Campo de Contraseña */}
          <div className="form-group">
            <label htmlFor="contraseña">
              <FaLock className="icon" /> CONTRASEÑA:
            </label>
            <input
              type="password"
              id="contraseña"
              className="input"
              {...register('contraseña', {
                required: {
                  value: true,
                  message: 'Contraseña requerida',
                },
                minLength: {
                  value: 6,
                  message: 'Mínimo 6 caracteres',
                },
              })}
            />
            {errors.contraseña && <span className="error-message">{errors.contraseña.message}</span>}
          </div>

          {/* Campo de Repetir Contraseña */}
          <div className="form-group">
            <label htmlFor="repetirContraseña">
              <FaLock className="icon" /> REPETIR CONTRASEÑA:
            </label>
            <input
              type="password"
              id="repetirContraseña"
              className="input"
              {...register('repetirContraseña', {
                required: {
                  value: true,
                  message: 'Repetir contraseña es obligatorio',
                },
                validate: (value) => value === password || 'Las contraseñas no coinciden',
              })}
            />
            {errors.repetirContraseña && (
              <span className="error-message">{errors.repetirContraseña.message}</span>
            )}
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            className={`submit-button ${!validar && 'disabled'}`}
            disabled={!validar}
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}

export { Form };
