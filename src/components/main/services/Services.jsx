import { BarChart3, Calendar, Palette } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Calendar,
    title: 'Comunicación digital',
    description:
      'Acompañamiento estratégico para ordenar, fortalecer y sostener la presencia digital de tu proyecto.',
    items: [
      'Gestión y acompañamiento en redes sociales',
      'Análisis de cuentas',
      'Desarrollo y planificación de estrategia de contenidos',
      'Copywriting y textos para redes y campañas',
      'Optimización de perfiles',
      'Asesorías en comunicación digital',
    ],
  },
  {
    icon: Palette,
    title: 'Producción de contenido',
    description:
      'Piezas visuales y contenido pensado para comunicar con claridad en redes, instituciones y campañas.',
    items: [
      'Edición de piezas gráficas',
      'Servicio de fotografía',
      'Servicio de video',
      'Contenido visual para redes, instituciones y campañas',
    ],
  },
  {
    icon: BarChart3,
    title: 'Diseño web y aplicaciones',
    description:
      'Desarrollo de espacios digitales profesionales y herramientas a medida para mejorar procesos.',
    items: [
      'Diseño y desarrollo web',
      'Landings institucionales',
      'Sitios profesionales',
      'Aplicaciones web a medida',
      'Soluciones digitales para gestión interna o atención al público',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Servicios principales</h2>
          <p>Comunicación, contenido y tecnología para proyectos que necesitan crecer con orden y criterio.</p>
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
