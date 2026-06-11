import './Sectors.css';

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

export function Sectors() {
  return (
    <section id="sectors" className="sectors-section">
      <div className="sectors-container">
        <div className="sectors-header">
          <h2>Sectores que acompañamos</h2>
          <p>
            Cada organización tiene necesidades distintas. Adaptamos la comunicación, el contenido y las soluciones
            digitales según el contexto de cada proyecto.
          </p>
        </div>

        <div className="sectors-grid">
          {sectors.map(sector => (
            <article className="sector-card" key={sector.title}>
              <h3>{sector.title}</h3>
              <p>{sector.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
