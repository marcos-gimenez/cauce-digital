import { Heart, Users, Target, CheckCircle2 } from 'lucide-react';
import './About.css';

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-bg"></div>
            <div className="about-image">
              <img src="../../../../assets/images/cauce-digital-2.webp" alt="Coordinadora Cauce Digital" />
            </div>
          </div>

          <div className="about-text">
            <h2>Te acompañamos en esta transformación</h2>
            <p>
              Soy <span className="highlight">Anahí Giménez</span>, creadora de Cauce Digital.
            </p>
            <p>
              Junto con mi equipo, queremos acompañarte en el proceso de transformación digital
              desde una mirada cercana, clara y estratégica.
            </p>
            <p>
              Creemos en el marketing digital como una herramienta para crear comunidad, no solo
              acumular seguidores.
            </p>

            <div className="about-values">
              <div className="value-item">
                <div className="value-icon red">
                  <CheckCircle2 size={20} color="#fff" />
                </div>
                <span>Compromiso</span>
              </div>

              <div className="value-item">
                <div className="value-icon yellow">
                  <Users size={20} color="#fff" />
                </div>
                <span>Cercanía</span>
              </div>

              <div className="value-item">
                <div className="value-icon purple">
                  <Target size={20} color="#fff" />
                </div>
                <span>Confianza</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-values-section">
          <div className="values-header">
            <h3>Nuestros valores</h3>
            <p>Son la base que nos permite crecer y acompañar a nuestros clientes con sensibilidad.</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-circle pink-bg">
                <CheckCircle2 size={28} color="#fff" />
              </div>
              <h4>Compromiso</h4>
              <p>Cada proyecto es un desafío que asumimos con la dedicación y responsabilidad que merece.</p>
            </div>

            <div className="value-card">
              <div className="value-circle yellow-bg">
                <Users size={28} color="#fff" />
              </div>
              <h4>Cercanía</h4>
              <p>Proponemos acompañar cada etapa de este proceso con calidez y escucha activa.</p>
            </div>

            <div className="value-card">
              <div className="value-circle purple-bg">
                <Target size={28} color="#fff" />
              </div>
              <h4>Confianza</h4>
              <p>Cauce es un espacio donde se habilita la consulta constante, lo que permite aprender y despejar dudas durante todo el proceso.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
