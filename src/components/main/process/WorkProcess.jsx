import './WorkProcess.css';

const steps = [
  {
    title: 'Escuchamos',
    description: 'Conocemos el proyecto, sus necesidades, su contexto y sus objetivos.',
  },
  {
    title: 'Diagnosticamos',
    description: 'Revisamos la presencia digital actual, los canales, el contenido y las oportunidades de mejora.',
  },
  {
    title: 'Planificamos',
    description: 'Definimos una estrategia posible, ordenada y adaptada a los recursos de cada organización.',
  },
  {
    title: 'Producimos e implementamos',
    description: 'Diseñamos piezas, contenidos, sitios web o soluciones digitales según el plan acordado.',
  },
  {
    title: 'Acompañamos',
    description: 'Medimos, ajustamos y sostenemos el proceso para que la comunicación crezca con sentido.',
  },
];

export function WorkProcess() {
  return (
    <section id="process" className="process-section">
      <div className="process-container">
        <div className="process-header">
          <h2>Cómo trabajamos</h2>
          <p>Acompañamos cada proyecto con un proceso claro, cercano y orientado a resultados.</p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="process-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
