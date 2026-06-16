import './Sectors.css';

const sectors = [
  {
    title: 'Servicios profesionales',
    description:
      'Nos comprometemos en construir una presencia digital que transmita confianza, cercanía y profesionalismo. Abogados, contadores, asesores comerciales y equipos administrativos.',
  },
  {
    title: 'Salud',
    description:
      'Detrás de cada consulta hay personas con urgencias y la comunicación se transforma en parte esencial del cuidado. Acompañamos clínicas, consultorios y profesionales independientes.',
  },
  {
    title: 'Deportes',
    description:
      'Trabajamos junto a clubes, deportistas e instituciones deportivas. El deporte no es solamente resultados. Son historias de procesos que merecen ser contadas.',
  },
  {
    title: 'Empresas e industrias',
    description:
      'Las redes funcionan como una vidriera y la web como una herramienta de validación profesional. Desarrollamos soluciones digitales que acompañan el crecimiento y la organización de cada empresa.',
  },
  {
    title: 'Arte y cultura',
    description:
      'Acompañamos talleres, espacios culturales y propuestas independientes para visibilizar el trabajo que sostienen estos proyectos.',
  },
];

export function Sectors() {
  return (
    <section id="sectors" className="sectors-section">
      <div className="sectors-container">
        <div className="sectors-header">
          <h2>¿A QUIÉNES ACOMPAÑAMOS?</h2>
          <p>
            Cada organización tiene realidades diferentes. Por lo tanto, la comunicación tiene que responder al presente de ese proyecto.
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
