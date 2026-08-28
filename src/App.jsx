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
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useRef(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      disable: function () {
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

      // Scrollspy detection
      const sections = ['home', 'about', 'experiences', 'projects', 'certification', 'contact'];
      if (window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
      } else {
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const top = el.offsetTop;
            if (currentScrollY >= top - 220) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
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

  const handleNavClick = (sectionId) => {
    if (sectionId) {
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="landing-container" id="home">
        <div className="container">
          <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${navbarHidden ? 'navbar-hidden' : ''}`} aria-label="Main Navigation">
            <div className="nav-container">
              <a href="#home" className="logo" style={{ textDecoration: 'none' }} onClick={() => handleNavClick('home')}>INAS ZHAFIRAH</a>

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
                <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>HOME</a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>ABOUT ME</a>
                <a href="#experiences" className={activeSection === 'experiences' ? 'active' : ''} onClick={() => handleNavClick('experiences')}>EXPERIENCES</a>
                <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleNavClick('projects')}>PROJECTS</a>
                <a href="#certification" className={activeSection === 'certification' ? 'active' : ''} onClick={() => handleNavClick('certification')}>CERTIFICATION</a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>CONTACT</a>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-btn" onClick={() => handleNavClick()} aria-label="Download Curriculum Vitae PDF">DOWNLOAD CV</a>
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
                I am a Communication Professional with a multidisciplinary background in Journalism, Creative, Broadcasting & Film, Production, Copywriting, and Education. I bring together storytelling, creativity, and strategic communication to deliver impactful content and meaningful learning experiences.
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
