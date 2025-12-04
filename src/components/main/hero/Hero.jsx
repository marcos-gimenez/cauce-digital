import { useScrollNavigation } from '../../hooks/ScrollNavigation.js';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

export function Hero() {
  const { scrollTo } = useScrollNavigation();

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Marketing digital cercano y genuino</span>
            </div>

            <h1 className="hero-title">
              Transformamos tu marca con <span className="highlight-text">ideas auténticas.</span>
            </h1>

            <p className="hero-description">
              Somos Cauce Digital, y ayudamos a reformular tu proyecto a través del marketing. Creamos
              soluciones personalizadas que garantizan una base sólida en el mundo digital,
              potenciando tu forma de habitar este espacio.
            </p>

            <div className="hero-buttons">
              <button onClick={() => scrollTo('contact')} className="btn-primary">
                Comenzar ahora <ArrowRight size={20} color="white" />
              </button>
              <button onClick={() => scrollTo('services')} className="btn-outline">
                Ver servicios
              </button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <div className="hero-image">
              <img src="../../../../assets/images/cauce-digital-1.webp" alt="Foto de Ejemplo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
