import { MessageCircle } from 'lucide-react';
import './Contact.css';

const whatsappBase = 'https://wa.me/5493413697253';

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-card">
          <h2 className="contact-title">Hablemos de tu proyecto</h2>
          <p className="contact-text">
            No hace falta que tengas todo resuelto. Contanos qué necesitás y buscamos la mejor manera de acompañarte.
          </p>

          <div className="contact-actions">
            <a
              href={`${whatsappBase}?text=Hola%20Cauce%20Digital%2C%20quiero%20hablar%20de%20mi%20proyecto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              <MessageCircle size={22} />
              Hablemos de mi proyecto
            </a>
            <a
              href={`${whatsappBase}?text=Hola%20Cauce%20Digital%2C%20quiero%20mejorar%20mi%20comunicacion%20digital.`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button contact-button-secondary"
            >
              Quiero mejorar mi comunicación digital
            </a>
            <a
              href={`${whatsappBase}?text=Hola%20Cauce%20Digital%2C%20quiero%20consultar%20por%20una%20web%20o%20aplicacion.`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button contact-button-secondary"
            >
              Consultar por una web o aplicación
            </a>
            <a
              href="https://caucemed.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button contact-button-secondary"
            >
              Conocer CauceMed
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
