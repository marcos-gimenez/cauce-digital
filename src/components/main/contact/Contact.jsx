import { MessageCircle } from 'lucide-react';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-card">
          <h2 className="contact-title">¿Hablamos?</h2>
          <p className="contact-text">
            Estamos para acompañarte en esta nueva etapa. Escribinos y empecemos a darle forma a tus ideas.
          </p>

          <a
            href="https://wa.me/5493413570792"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <MessageCircle size={22} />
            Enviar mensaje por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
