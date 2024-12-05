import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/NavBar.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/nosotros" className="nav-link">Nosotros</Link>
      <Link to="/contacto" className="nav-link">Contacto</Link>
    </nav>
  );
}

export default NavBar;
