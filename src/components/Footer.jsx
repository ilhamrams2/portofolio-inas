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
            <button className="get-in-touch-btn">
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
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-col-title">LOCATION</h4>
            <ul className="footer-links">
              <li>Jakarta, Indonesia</li>
              <li>Depok, Indonesia</li>
              <li>Cimanggis, West Java</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">DIRECT CONTACT</h4>
            <ul className="footer-links">
              <li>inaswork@gmail.com</li>
              <li>+62 895 3016 4170</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">SOCIAL CHANNELS</h4>
            <div className="social-icons">
              <a href="#" className="social-icon"><Camera size={24} /></a>
              <a href="#" className="social-icon"><Briefcase size={24} /></a>
              <a href="#" className="social-icon"><MessageSquare size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} INAS ZHAFIRAH. ALL RIGHTS RESERVED.</p>
          <p>PRIVACY POLICY TERMS OF SERVICE {currentDate}</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
