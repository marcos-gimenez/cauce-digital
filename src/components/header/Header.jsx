import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollNavigation } from '../hooks/ScrollNavigation.js'
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollTo } = useScrollNavigation();

  const scrollToSection = (id) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Seccion del logo */}
        <div className="logo-section" onClick={() => scrollToSection('hero')}>
          <div className="logo-circle">
            <img className="img-logo" src="../../../assets/images/logo.png" alt="logo cauce digital" />
          </div>
          <span className="logo-name">Cauce Digital</span>
        </div>

        {/* Navegacion de escritorio */}
        <nav className="nav-desktop">
          <button className="btn-nav" onClick={() => scrollToSection('hero')}>
            Inicio
          </button>
          <button className="btn-nav" onClick={() => scrollToSection('services')}>
            Servicios
          </button>
          <button className="btn-nav" onClick={() => scrollToSection('about')}>
            Nosotros
          </button>
          <button className="btn-contact" onClick={() => scrollToSection('contact')}>
            Contacto
          </button>
        </nav>

        {/* Boton para mobiles */}
        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegacion para mobiles */}
        {isMenuOpen && (
          <nav className="nav-mobile">
            <button className="btn-nav" onClick={() => scrollToSection('hero')}>Inicio</button>
            <button className="btn-nav" onClick={() => scrollToSection('services')}>Servicios</button>
            <button className="btn-nav" onClick={() => scrollToSection('about')}>Nosotros</button>
            <button className="btn-contact" onClick={() => scrollToSection('contact')}>Contacto</button>
          </nav>
        )}
      </div>
    </header>
  );
}
