import React, { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [nota, setNota] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Efecto para validar el formulario
  useEffect(() => {
    if (nombre.trim() && edad && nota) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [nombre, edad, nota]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado con éxito");
    // Limpiar el formulario después de enviar
    setNombre("");
    setEdad("");
    setNota("");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header text-center bg-info text-white">
          <h4>Formulario</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Campo de Nombre */}
            <div className="mb-4">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            {/* Campo de Edad */}
            <div className="mb-3">
              <label htmlFor="edad" className="form-label">
                Edad
              </label>
              <input
                type="number"
                id="edad"
                className="form-control"
                placeholder="Ingresa tu edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </div>

            {/* Campo de Nota */}
            <div className="mb-3">
              <label htmlFor="nota" className="form-label">
                Nota
              </label>
              <input
                type="number"
                id="nota"
                className="form-control"
                placeholder="Ingresa tu nota"
                value={nota}
                onChange={(e) => setNota(e.target.value)}
              />
            </div>

            {/* Botón de Enviar */}
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-warning"
                disabled={!isFormValid}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
