import React from 'react';
import { ArrowRight, Camera, Briefcase, MessageSquare } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).toUpperCase().replace(',', ',');

  return (
    <footer className="footer-section">
      <div className="container footer-container" data-aos="fade-up">

        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-subtitle">CREATIVE | LITERACY & SOCIAL COLLABORATION</span>
            <h2 className="brand-title">INAS ZHAFIRAH</h2>
          </div>
          <div className="footer-cta">
            <button className="get-in-touch-btn" onClick={() => window.location.href='#contact'} aria-label="Get in touch with Inas Zhafirah">
              GET IN TOUCH <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-col">
            <h4 className="footer-col-title">NAVIGATION</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#experiences">Experiences</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#certification">Certification</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">LOCATION</h4>
            <ul className="footer-links">
              <li>Jakarta, Indonesia</li>
              <li>Depok, West Java</li>
              <li>Cimanggis, Indonesia</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">DIRECT CONTACT</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:inaswork@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }} aria-label="Email Inas Zhafirah">
                  inaswork@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/62895325868312" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} aria-label="WhatsApp or Call Inas Zhafirah">
                  +62 895 3258 68312
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">SOCIAL CHANNELS</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram Profile"><Camera size={24} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile"><Briefcase size={24} /></a>
              <a href="https://wa.me/62895325868312" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp Message"><MessageSquare size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} INAS ZHAFIRAH. ALL RIGHTS RESERVED.</p>
          <p>JOURNALIST &bull; MEDIA SPECIALIST &bull; EDUCATOR &bull; {currentDate}</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
