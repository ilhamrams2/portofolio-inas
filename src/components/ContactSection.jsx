import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import backshape1 from '../assets/images/experience/backshape1.png';
import './ContactSection.css';

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <img src={backshape1} alt="" className="backshape-contact" />

      <div className="container contact-container">
        {/* Header Area */}
        <div className="contact-header" data-aos="fade-up">
          <div className="section-label">
            <span className="red-dash"></span>
            <span className="label-text">LET'S CONNECT</span>
          </div>
          <h2 className="contact-title">CONTACT ME</h2>
          <p className="contact-subtitle">FEEL FREE TO REACH OUT FOR COLLABORATION OR JUST A FRIENDLY HELLO.</p>
        </div>

        {/* Content Area */}
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right" data-aos-delay="200">
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h4>EMAIL</h4>
                <p>
                  <a href="mailto:inaszha.work@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }} aria-label="Send email to inaszha.work@gmail.com">
                    inaszha.work@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>PHONE</h4>
                <p>
                  <a href="https://wa.me/62895325868312" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} aria-label="WhatsApp or Call +62 895 3258 68312">
                    +62 895 3258 68312
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>LOCATION</h4>
                <p style={{ margin: 0, lineHeight: '1.6' }}>Depok, West Java</p>
                <p style={{ margin: 0, lineHeight: '1.6' }}>Bogor, West Java</p>
                <p style={{ margin: 0, lineHeight: '1.6' }}>Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          <form className="contact-form" data-aos="fade-left" data-aos-delay="400" onSubmit={(e) => { e.preventDefault(); alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.'); }}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                id="contact-name"
                placeholder="Your Name" 
                required 
                autoComplete="name"
                aria-label="Your Name"
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                id="contact-email"
                placeholder="Your Email" 
                required 
                autoComplete="email"
                aria-label="Your Email"
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                id="contact-message"
                placeholder="Your Message" 
                rows="5" 
                required
                aria-label="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="cta-btn submit-btn" aria-label="Send message to Inas Zhafirah">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
