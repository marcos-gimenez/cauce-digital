import { Calendar, BarChart3, Palette, MessageCircle, Mail } from 'lucide-react';
import './Services.css';

export function Services() {
  const services = [
    {
      icon: Calendar,
      title: 'Estrategias Digitales',
      description:
        'Aportamos a tu proyecto con contenido sincero y planes simples que fortalecen tu identidad en redes.',
    },
    {
      icon: BarChart3,
      title: 'Campañas publicitarias (Meta Ads)',
      description:
        'Acompañamos tu iniciativa digital con campañas claras, sencillas y pensadas para tu comunidad.',
    },
    {
      icon: Palette,
      title: 'Diseño web',
      description: 'Creamos sitios web funcionales y coherentes con tu marca, para transmitir solidez y transparencia.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Servicios que impulsan tu crecimiento</h2>
          <p>Ofrecemos soluciones integrales de marketing digital adaptadas a cada cliente</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={`service-card service-card-${index}`}>
                <div className={`service-icon icon-${index}`}>
                  <Icon size={28} color="#fff" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
