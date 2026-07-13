import { ArrowRight, Sparkles } from 'lucide-react';
import { trackCauceMedClick, trackContactClick } from '../../../utils/analytics';
import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-text">
            {/* <div className="hero-badge">
              <Sparkles size={16} />
              <span>Comunicación y soluciones digitales</span>
            </div> */}

            <h1 className="hero-title">
              Comunicación y <span className="highlight-text">soluciones digitales.</span>
            </h1>

            <p className="hero-description">
              Acompañamos proyectos en la construcción de una comunicación clara, funcional y
alineada con los valores que representan. Somos un equipo de trabajo que integra
comunicación, diseño, tecnología y soluciones administrativas para que cada
proyecto pueda crecer de forma organizada, profesional y sostenible.
            </p>

            <div className="hero-buttons">
              <a
                href="#contact"
                className="btn-primary"
                onClick={() =>
                  trackContactClick('hero', 'Comunicación digital', '#contact')
                }
              >
                Comunicación digital <ArrowRight size={20} color="white" />
              </a>
              <a href="#services" className="btn-outline">
                Webs y aplicaciones
              </a>
              <a
                href="https://caucemed.com.ar"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCauceMedClick('hero', 'https://caucemed.com.ar')}
              >
                Conocer CauceMed
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <div className="hero-image">
              <img src="/images/cauce-digital-1.webp" alt="Equipo de Cauce Digital trabajando en estrategia digital" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
