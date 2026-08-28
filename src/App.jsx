import React, { useState, useEffect, useRef } from 'react'
import { ArrowUp, ArrowRight, Menu, X } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import personImg from './assets/images/landing/inas-zhafirah-landing.png'
import AboutSection from './components/AboutSection'
import ExperiencesSection from './components/ExperiencesSection'
import ProjectsSection from './components/ProjectsSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      offset: 50,
      disable: function() {
        return window.innerWidth <= 768;
      }
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down
        setNavbarHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setNavbarHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="landing-container" id="home">
        <div className="container">
          <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${navbarHidden ? 'navbar-hidden' : ''}`} aria-label="Main Navigation">
            <div className="nav-container">
              <a href="#home" className="logo" style={{ textDecoration: 'none' }}>INAS ZHAFIRAH</a>
              
              {/* Hamburger Button */}
              <button 
                className="mobile-menu-btn" 
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                <a href="#home" className="active" onClick={handleNavClick}>HOME</a>
                <a href="#about" onClick={handleNavClick}>ABOUT ME</a>
                <a href="#experiences" onClick={handleNavClick}>EXPERIENCES</a>
                <a href="#projects" onClick={handleNavClick}>PROJECTS</a>
                <a href="#certification" onClick={handleNavClick}>CERTIFICATION</a>
                <a href="#contact" onClick={handleNavClick}>CONTACT</a>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-btn" onClick={handleNavClick} aria-label="Download Curriculum Vitae PDF">DOWNLOAD CV</a>
              </div>
            </div>
          </nav>

          <main className="main-content">
            <h1 className="sr-only">Inas Zhafirah — Broadcast Journalist, Media Specialist &amp; Educator Portfolio</h1>
            <div className="text-section" data-aos="fade-right">
              <div className="intro">
                <span className="red-dash"></span>
                <span className="intro-text">HI, THIS IS INAS'S</span>
              </div>

              <p className="description" style={{ marginTop: '220px' }}>
                I am a Communication Professional and Education Enthusiast with a background
                in Journalism, Broadcasting, and Film. With experience in television journalism,
                education, content production, and strategic communication, I bring together
                storytelling, creativity, and meaningful communication.
              </p>

              <button className="cta-btn" onClick={() => window.location.href = '#about'} aria-label="Know more about Inas Zhafirah">
                KNOW ME MORE <ArrowRight size={20} />
              </button>
            </div>

            <img 
              src={personImg} 
              alt="Inas Zhafirah - Broadcast Journalist and Media Specialist" 
              className="person-image" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              data-aos="fade-left" 
              data-aos-delay="200" 
            />
          </main>
        </div>
      </div>
      <AboutSection />
      <div style={{ backgroundColor: '#1a1a1a' }}>
        <ExperiencesSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
      <Footer />

      {showTopBtn && (
        <button className="back-to-top" onClick={goToTop} aria-label="Scroll back to top of page">
          <ArrowUp size={24} />
        </button>
      )}
    </>
  )
}

export default App
