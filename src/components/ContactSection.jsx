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
                <p>inaswork@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>PHONE</h4>
                <p>+62 895 3016 4170</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>LOCATION</h4>
                <p>Depok, West Java, Indonesia</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" data-aos="fade-left" data-aos-delay="400">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="cta-btn submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
