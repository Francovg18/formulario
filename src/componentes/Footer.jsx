import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../estilos/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1 */}
        <div className="footer-column">
          <h3>Sobre Nosotros</h3>
          <p>
            Somos una empresa dedicada a brindar soluciones tecnológicas innovadoras
            para mejorar la vida de nuestros usuarios.
          </p>
        </div>

        {/* Columna 2 */}
        <div className="footer-column">
          <h3>Enlaces Útiles</h3>
          <ul>
            <li><a href="/faq">Preguntas Frecuentes</a></li>
            <li><a href="/privacy">Política de Privacidad</a></li>
            <li><a href="/terms">Términos y Condiciones</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="footer-column">
          <h3>Contáctanos</h3>
          <p>Email: contacto@empresa.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>

        {/* Columna 4 */}
        <div className="footer-column">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
