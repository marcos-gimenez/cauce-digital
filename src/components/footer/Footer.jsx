import { useScrollNavigation } from '../hooks/ScrollNavigation.js';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { scrollTo } = useScrollNavigation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo y descripción */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-circle">
                <img
                  className="footer-logo-circle"
                  src="../../../assets/images/logo.png"
                  alt="logo cauce digital"
                />
              </div>
              <span className="footer-logo-text">Cauce Digital</span>
            </div>
            <p className="footer-description">
              Marketing digital cercano y genuino para impulsar tu negocio
            </p>
          </div>

          {/* Navegación */}
          <div className="footer-navigation">
            <h4 className="footer-title">Navegación</h4>
            <ul className="footer-list">
              <li>
                <button className="btn-navigation" onClick={() => scrollTo('hero')}>
                  Inicio
                </button>
              </li>
              <li>
                <button className="btn-navigation" onClick={() => scrollTo('services')}>
                  Servicios
                </button>
              </li>
              <li>
                <button className="btn-navigation" onClick={() => scrollTo('about')}>
                  Nosotros
                </button>
              </li>
              <li>
                <button className="btn-navigation" onClick={() => scrollTo('contact')}>
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="footer-title">Contacto</h4>
            <ul className="footer-list">
              <li>
                <a href="mailto:digitalcauce@gmail.com">digitalcauce@gmail.com</a>
              </li>
              <li>Fray Luis Beltrán, Santa Fe</li>
            </ul>
            <div className="footer-socials">
              <a href="mailto:digitalcauce@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://instagram.com/cauce_digital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Cauce Digital. Sitio desarrollado por Marcos Giménez.</p>
        </div>
      </div>
      {/* Botón fijo de WhatsApp */}
      <a
        href="https://wa.me/5493413570792"
        className="whatsapp-fixed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/images/whatsapp.png" alt="WhatsApp" />
      </a>
    </footer>
  );
}
