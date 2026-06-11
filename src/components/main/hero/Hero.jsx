import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Comunicación digital cercana y estratégica</span>
            </div>

            <h1 className="hero-title">
              Comunicación digital, diseño web y <span className="highlight-text">soluciones digitales.</span>
            </h1>

            <p className="hero-description">
              Acompañamos a instituciones, profesionales y proyectos en la construcción de una presencia digital clara,
              funcional y coherente. Desarrollamos estrategias de comunicación, contenido, sitios web, aplicaciones y
              herramientas propias para ordenar procesos y potenciar vínculos.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
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
