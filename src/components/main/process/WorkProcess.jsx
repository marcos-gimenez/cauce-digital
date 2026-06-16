import './WorkProcess.css';

const steps = [
  {
    title: 'Escuchamos',
    description: 'Conocemos el proyecto, sus necesidades, su contexto y sus objetivos.',
  },
  {
    title: 'Diagnosticamos',
    description: 'Revisamos los canales de comunicación actuales para detectar oportunidades y definir el camino más conveniente.',
  },
  {
    title: 'Planificamos',
    description: 'Diseñamos una estrategia ordenada y adaptada a cada proyecto, contemplando los recursos disponibles.',
  },
  {
    title: 'Producimos e implementamos',
    description: 'Creamos contenido, desarrollamos herramientas digitales y ponemos en marcha las acciones necesarias.',
  },
  {
    title: 'Medimos y ajustamos',
    description: 'Analizamos resultados continuamente para optimizar recursos y mejorar los procesos.',
  },
  {
    title: 'Acompañamos',
    description: 'No se trata de desarrollar un plan y desaparecer. Estamos presentes en cada etapa, acompañando el proceso y entendiendo las emociones que surgen cuando un proyecto se encuentra en transformación.',
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
