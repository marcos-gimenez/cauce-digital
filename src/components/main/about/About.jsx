import { CheckCircle2, Target, Users } from 'lucide-react';
import './About.css';

const sectors = [
  {
    title: 'Servicios profesionales',
    description:
      'Comunicación y presencia digital para profesionales, estudios, consultorios, emprendimientos y equipos de trabajo.',
  },
  {
    title: 'Salud',
    description:
      'Acompañamiento para profesionales independientes, centros de salud y clínicas. Comunicación digital, presencia online y soluciones para ordenar la atención.',
  },
  {
    title: 'Deportes',
    description:
      'Comunicación para clubes, instituciones deportivas, escuelas, eventos y proyectos comunitarios.',
  },
  {
    title: 'Arte y cultura',
    description:
      'Difusión para proyectos culturales, talleres, obras, espacios artísticos y propuestas independientes.',
  },
];

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
            <h2>Te acompañamos en tu transformación digital</h2>
            <p>
              Soy <span className="highlight">Anahí Giménez</span>, creadora de Cauce Digital.
            </p>
            <p>
              Junto con mi equipo, trabajamos con una mirada cercana, clara y estratégica para que cada proyecto
              pueda comunicar mejor, ordenar su presencia online y desarrollar soluciones digitales útiles.
            </p>
            <p>
              Creemos en la comunicación digital como una herramienta para crear comunidad, mejorar procesos y
              construir vínculos más claros con las personas.
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

        <div className="about-values-section">
          <div className="values-header">
            <h3>Sectores que acompañamos</h3>
            <p>Adaptamos la estrategia y las soluciones digitales según el contexto de cada organización.</p>
          </div>

          <div className="sectors-grid">
            {sectors.map(sector => (
              <article className="sector-card" key={sector.title}>
                <h4>{sector.title}</h4>
                <p>{sector.description}</p>
              </article>
            ))}
          </div>

          <article className="caucemed-card">
            <div>
              <span className="caucemed-eyebrow">Solucion para salud</span>
              <h4>CauceMed</h4>
              <p>
                Para el sector salud también desarrollamos CauceMed, una solución propia para la gestión de turnos
                médicos, pensada para profesionales, centros de salud y clínicas que necesitan ordenar la atención,
                mejorar la comunicación con pacientes y digitalizar procesos.
              </p>
            </div>
            <a className="caucemed-button" href="#contact">
              Consultar por CauceMed
            </a>
            {/* Cuando exista la pagina, usar href="/caucemed". */}
          </article>
        </div>
      </div>
    </section>
  );
}
