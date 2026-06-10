import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Seccion del logo */}
        <a className="logo-section" href="#hero" aria-label="Ir al inicio" onClick={closeMenu}>
          <div className="logo-circle">
            <img className="img-logo" src="/images/logo.png" alt="logo cauce digital" />
          </div>
          <span className="logo-name">Cauce Digital</span>
        </a>

        {/* Navegacion de escritorio */}
        <nav className="nav-desktop" aria-label="Navegacion principal">
          <a className="btn-nav" href="#hero">
            Inicio
          </a>
          <a className="btn-nav" href="#services">
            Servicios
          </a>
          <a className="btn-nav" href="#about">
            Nosotros
          </a>
          <a className="btn-contact" href="#contact">
            Contacto
          </a>
        </nav>

        {/* Boton para mobiles */}
        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegacion para mobiles */}
        {isMenuOpen && (
          <nav id="mobile-navigation" className="nav-mobile" aria-label="Navegacion mobile">
            <a className="btn-nav" href="#hero" onClick={closeMenu}>Inicio</a>
            <a className="btn-nav" href="#services" onClick={closeMenu}>Servicios</a>
            <a className="btn-nav" href="#about" onClick={closeMenu}>Nosotros</a>
            <a className="btn-contact" href="#contact" onClick={closeMenu}>Contacto</a>
          </nav>
        )}
      </div>
    </header>
  );
}
