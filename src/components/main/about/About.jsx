import { CheckCircle2, Target, Users } from 'lucide-react';
import './About.css';

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-bg"></div>
            <div className="about-image">
              <img src="/images/cauce-digital-2.webp" alt="Coordinadora de Cauce Digital" />
            </div>
          </div>

          <div className="about-text">
            <h2>Nosotros</h2>
            <p>
              Soy <span className="highlight">Anahí Giménez</span>, creadora de Cauce Digital.
            </p>
            <p>
              Junto con mi equipo, trabajamos con una mirada cercana, clara y estratégica para que cada proyecto pueda
              comunicar mejor, ordenar su presencia online y desarrollar soluciones digitales útiles.
            </p>
            <p>
              Creemos en la comunicación digital como una herramienta para crear comunidad, mejorar procesos y construir
              vínculos más claros con las personas.
            </p>

            <div className="about-values">
              <div className="value-item">
                <div className="value-icon red" aria-hidden="true">
                  <CheckCircle2 size={20} color="#fff" />
                </div>
                <span>Compromiso</span>
              </div>

              <div className="value-item">
                <div className="value-icon yellow" aria-hidden="true">
                  <Users size={20} color="#fff" />
                </div>
                <span>Cercanía</span>
              </div>

              <div className="value-item">
                <div className="value-icon purple" aria-hidden="true">
                  <Target size={20} color="#fff" />
                </div>
                <span>Confianza</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
