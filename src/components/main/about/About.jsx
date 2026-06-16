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
              Junto a mi equipo, acompañamos proyectos desde una mirada crítica, clara y estratégica, ayudándolos a comunicar mejor, organizar sus procesos y construir una presencia digital coherente con lo que representan.
            </p>
            <p>
              Creemos que cada detalle importa: desde un elemento gráfico, un texto o una publicación en redes, hasta la forma de agilizar un proceso cotidiano como la gestión de turnos o una inscripción.
            </p>
            <p>
              Entendemos la comunicación digital como una herramienta para crear comunidad, mejorar procesos y construir vínculos más claros, humanos y accesibles con las personas.
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
