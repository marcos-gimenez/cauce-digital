import { BarChart3, Calendar, Palette } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Calendar,
    title: 'Comunicación digital',
    description:
      'Convertimos ideas en estrategias de comunicación claras y sostenibles. Analizamos el proyecto, sus objetivos, sus recursos y las personas a las que quiere llegar para construir una estrategia realista y fácil de sostener.',
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
    title: 'Diseño gráfico y producción de contenido',
    description:
      'Creamos contenido alineado con la marca, cuidando tanto la estética como el mensaje para construir una presencia digital auténtica y memorable.',
    items: [
      'Diseño de piezas gráficas',
      'Producción integral de contenido',
      'Servicio de fotografía y video',
      'Edición de imágenes y videos',
      'Manual de marca',
      'Diseño de logos y packaging',
    ],
  },
  {
    icon: BarChart3,
    title: 'Diseño web y aplicaciones',
    description:
      'Desarrollamos sitios, aplicaciones web y soluciones digitales simples, funcionales y adaptadas a cada proyecto.',
    items: [
      'Sitios institucionales',
      'Landing pages',
      'Aplicaciones web',
      'Sistemas de turnos',
      'Soluciones digitales a medida',
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
