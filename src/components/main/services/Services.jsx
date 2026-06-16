import { BarChart3, Calendar, Palette } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Calendar,
    title: 'Comunicación digital',
    description:
      'Convertimos ideas en estrategias de comunicación claras y sostenibles. Antes de avanzar, analizamos el proyecto, sus objetivos, sus recursos y las personas a las que quiere llegar. A partir de esa información, construimos una estrategia realista y fácil de sostener en el tiempo.',
    items: [
      'Administración de redes',
      'Estrategias de comunicación',
      'Asesoramiento personalizado',
      'Organización de contenidos',
      'Calendarios de publicación',
      'Análisis y optimización continua',
    ],
  },
  {
    icon: Palette,
    title: 'Producción de contenido',
    description:
      'Las personas empatizan con historias, no con publicaciones aisladas. Lo audiovisual es uno de los pilares fundamentales para construir una presencia digital auténtica y memorable. El contenido que proponemos está alineado con la marca, cuidando tanto la estética como el mensaje.',
    items: [
      'Diseño de piezas gráficas',
      'Producción integral de contenido',
      'Servicio de fotografía y video',
      'Edición de imágenes y videos',
    ],
  },
  {
    icon: BarChart3,
    title: 'Diseño web y aplicaciones',
    description:
      'Cuando las redes cumplen su función, llega el momento de dar un paso más. Las redes generan cercanía. La web aporta profesionalismo. Las aplicaciones aportan eficiencia. Desarrollamos herramientas digitales simples, funcionales y adaptadas a cada proyecto.',
    items: [
      'Diseño y desarrollo web',
      'Landing pages',
      'Aplicaciones web',
      'Sistemas de turnos',
      'Soluciones digitales internas y externas',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Servicios principales</h2>
          <p>Comunicación, contenido y tecnología con criterio.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className={`service-card service-card-${index}`}>
                <div className={`service-icon icon-${index}`} aria-hidden="true">
                  <Icon size={28} color="#fff" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-list">
                  {service.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
