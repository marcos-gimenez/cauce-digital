import { trackCauceMedClick, trackContactClick } from '../../../utils/analytics';
import './CauceMed.css';

const benefits = [
  'Agenda online para profesionales y centros de salud',
  'Portal de turnos para pacientes',
  'Gestión de profesionales, especialidades y sedes',
  'Recordatorios y comunicaciones por WhatsApp',
  'Administración simple desde un panel web',
];

export function CauceMed() {
  return (
    <section id="caucemed" className="caucemed-section">
      <div className="caucemed-container">
        <div className="caucemed-header">
          <h2>Soluciones digitales para salud</h2>
          <p>
            Además del acompañamiento en comunicación digital, desarrollamos herramientas propias para instituciones y
            profesionales de la salud.
          </p>
        </div>

        <article className="caucemed-feature">
          <div className="caucemed-content">
            <span className="caucemed-eyebrow">Sistema de turnos médicos online</span>
            <h3>CauceMed</h3>
            <p>
              CauceMed es nuestro sistema de turnos médicos online, pensado para profesionales independientes, centros
              de salud y clínicas que necesitan ordenar la atención, mejorar la comunicación con pacientes y digitalizar
              procesos.
            </p>

            <ul className="caucemed-benefits">
              {benefits.map(benefit => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="caucemed-actions">
            <a
              className="caucemed-button"
              href="https://caucemed.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conocer CauceMed en una nueva pestaña"
              onClick={() => trackCauceMedClick('caucemed', 'https://caucemed.com.ar')}
            >
              Conocer CauceMed
            </a>
            <a
              className="caucemed-secondary"
              href="#contact"
              onClick={() =>
                trackContactClick(
                  'caucemed',
                  'Soluciones digitales para salud',
                  '#contact',
                )
              }
            >
              Consultar por soluciones para salud
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
