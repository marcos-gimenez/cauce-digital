import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  trackContactClick,
  trackEmailClick,
  trackWhatsAppClick,
} from '../../utils/analytics';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-circle">
                <img
                  className="footer-logo-circle"
                  src="/images/logo.png"
                  alt="logo cauce digital"
                />
              </div>
              <span className="footer-logo-text">Cauce Digital</span>
            </div>
            <p className="footer-description">
              Comunicación digital cercana y genuina para impulsar tu proyecto
            </p>
          </div>

          <div className="footer-navigation">
            <h4 className="footer-title">Navegación</h4>
            <ul className="footer-list">
              <li>
                <a className="btn-navigation" href="#hero">
                  Inicio
                </a>
              </li>
              <li>
                <a className="btn-navigation" href="#services">
                  Servicios
                </a>
              </li>
              <li>
                <a className="btn-navigation" href="#about">
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  className="btn-navigation"
                  href="#contact"
                  onClick={() => trackContactClick('footer', undefined, '#contact')}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contacto</h4>
            <ul className="footer-list">
              <li>
                <a
                  href="mailto:digitalcauce@gmail.com"
                  onClick={() => trackEmailClick('footer')}
                >
                  digitalcauce@gmail.com
                </a>
              </li>
              <li>Fray Luis Beltrán, Santa Fe</li>
            </ul>
            <div className="footer-socials">
              <a
                href="mailto:digitalcauce@gmail.com"
                aria-label="Enviar email a Cauce Digital"
                onClick={() => trackEmailClick('footer')}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://instagram.com/cauce_digital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram de Cauce Digital"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Cauce Digital. Todos los derechos reservados.</p>
        </div>
      </div>
      <a
        href="https://wa.me/5493413697253"
        className="whatsapp-fixed"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enviar mensaje por WhatsApp a Cauce Digital"
        onClick={() => trackWhatsAppClick('floating_button')}
      >
        <img src="/images/whatsapp.png" alt="WhatsApp" />
      </a>
    </footer>
  );
}
