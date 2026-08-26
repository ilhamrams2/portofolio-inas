import React, { useState, useEffect } from 'react';
import { Mic, BookOpen, User, X, Maximize2, MapPin, Calendar, Briefcase, CheckCircle2 } from 'lucide-react';
import backshape1 from '../assets/images/experience/backshape1.png';
import backshape2 from '../assets/images/experience/backshape2.png';
import './ExperiencesSection.css';

import exp1 from '../assets/images/experience/inas-zhafirah-garudatv.png';
import exp2 from '../assets/images/experience/inas-zhafirah-sparkpreschool.jpeg';
import exp3 from '../assets/images/experience/inas-zhafirah-prestasiprima.png';

import logo1 from '../assets/images/experience/logo/logo-garudatv.png';
import logo2 from '../assets/images/experience/logo/logo-sparkpreschool.png';
import logo3 from '../assets/images/experience/logo/logo-prestasiprima.png';

// Garuda TV Gallery Images
import garudaImg20 from '../assets/images/experience/garudatv/image 20.png';
import garudaImg21 from '../assets/images/experience/garudatv/image 21.png';
import garudaImg22 from '../assets/images/experience/garudatv/image 22.png';
import garudaImg23 from '../assets/images/experience/garudatv/image 23.png';
import garudaImg24 from '../assets/images/experience/garudatv/image 24.png';
import garudaImg25 from '../assets/images/experience/garudatv/image 25.png';
import garudaImg26 from '../assets/images/experience/garudatv/image 26.png';

// Sparks Preschool Gallery Images
import sparkActivityImg from '../assets/images/experience/spark/WhatsApp Image 2026-08-26 at 21.14.43 (2).jpeg';

const experiencesData = [
  {
    id: 1,
    role: 'Journalist',
    employmentType: 'On-site Broadcast',
    period: 'February – August 2026',
    location: 'Jakarta, Indonesia',
    year: '2026',
    icon: <Mic size={14} />,
    companyLogo: logo1,
    image: exp1,
    companyName: 'GARUDA TV',
    description: 'Covered breaking national news through live reporting, produced 50+ television news scripts, and performed voice-over narration.',
    details: 'Experienced in live on-site reporting for breaking national news, news scriptwriting for daily broadcasts, and professional voice-over narration for television news packages and feature stories.',
    responsibilities: [
      'Covered breaking national news through live reporting and on-site television broadcasts',
      'Produced 50+ television news scripts for daily broadcasts',
      'Performed voice-over narration for television news packages and feature stories'
    ],
    gallery: [
      { src: garudaImg20, alt: 'Garuda TV Live Report 1' },
      { src: garudaImg21, alt: 'Garuda TV Newsroom' },
      { src: garudaImg22, alt: 'Garuda TV Field Interview' },
      { src: garudaImg23, alt: 'Garuda TV Broadcasting' },
      { src: garudaImg24, alt: 'Garuda TV Press Conference' },
      { src: garudaImg25, alt: 'Garuda TV Production' },
      { src: garudaImg26, alt: 'Garuda TV Behind the Scenes' }
    ]
  },
  {
    id: 2,
    role: 'Education Consultant',
    employmentType: 'Freelance',
    period: 'May 2026 – Present',
    location: 'Indonesia',
    year: '2026',
    icon: <BookOpen size={14} />,
    companyLogo: logo2,
    image: exp2,
    companyName: 'SPARKS PRESCHOOL',
    description: 'Consulted prospective families on early childhood education, learning philosophy, and child development pathways.',
    details: 'Dedicated Education Consultant guiding prospective families, presenting structured early-childhood curriculums, and assisting parents in selecting optimal educational development pathways.',
    responsibilities: [
      'Consulted prospective families on early childhood education',
      'Presented curriculum, learning philosophy, and child development programs',
      'Guided parents in choosing appropriate educational pathways'
    ],
    gallery: [
      { src: exp2, alt: 'Sparks Preschool Presentation Stage' },
      { src: sparkActivityImg, alt: 'Sparks Preschool Curriculum & Activities' }
    ]
  },
  {
    id: 3,
    role: 'Teacher',
    employmentType: 'Educator',
    period: '2026',
    location: 'Indonesia',
    year: '2026',
    icon: <User size={14} />,
    companyLogo: logo3,
    image: exp3,
    companyName: 'SMK Prestasi Prima',
    description: 'Sebagai guru saya mengajar dan membimbing siswa dalam bidang penyiaran dan media kreatif.',
    details: 'Membimbing dan melatih siswa dalam kompetensi broadcasting, produksi audio-visual, dan etika komunikasi media.',
    responsibilities: [
      'Taught broadcasting theory and hands-on audiovisual production skills.',
      'Guided students in multicamera studio setups and live broadcasting simulations.',
      'Cultivated ethical journalism standards and creative media storytelling.'
    ],
    gallery: [
      { src: exp3, alt: 'SMK Prestasi Prima Experience' }
    ]
  }
];

function ExperiencesSection() {
  const [selectedExp, setSelectedExp] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const openModal = (exp) => {
    setSelectedExp(exp);
  };

  const closeModal = () => {
    setSelectedExp(null);
    setPreviewImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (previewImage) {
          setPreviewImage(null);
        } else if (selectedExp) {
          closeModal();
        }
      }
    };

    if (selectedExp) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedExp, previewImage]);

  return (
    <section id="experiences" className="experiences-section">
      <img src={backshape1} alt="" className="backshape backshape-1" />
      <img src={backshape2} alt="" className="backshape backshape-2" />
      <div className="experiences-bg-pattern"></div>
      
      <div className="container experiences-container">
        
        {/* Header Area */}
        <div className="experiences-header" data-aos="fade-up">
          <div className="section-label">
            <span className="red-dash"></span>
            <span className="label-text">WHAT I'VE DONE</span>
          </div>
          <h2 className="experiences-title">EXPERIENCES</h2>
          <p className="experiences-subtitle">
            SHAPED BY OVER FIVE YEARS OF EXPERIENCE ACROSS DIVERSE FIELDS, EVERY PROJECT TELLS A STORY OF CREATIVITY, GROWTH, AND MEANINGFUL IMPACT.
          </p>
        </div>

        {/* Grid Area */}
        <div className="experiences-grid">
          {experiencesData.map((exp, idx) => (
            <div className="experience-card" key={exp.id} data-aos="fade-up" data-aos-delay={`${idx * 100}`}>
              <div className="card-image-wrapper">
                <img src={exp.image} alt={exp.companyName} className="experience-image" />
                <div className="card-tags">
                  <span className="card-tag">
                    <span className="tag-icon-small">{exp.icon}</span>
                    {exp.role}
                  </span>
                  <span className="card-tag">{exp.year}</span>
                </div>
              </div>
              <div className="card-content">
                <div className="company-logo">
                  <img src={exp.companyLogo} alt={`${exp.companyName} Logo`} style={{ height: '30px', objectFit: 'contain' }} />
                </div>
                <p className="card-desc">{exp.description}</p>
                <button className="cta-btn small-btn" onClick={() => openModal(exp)}>
                  Click For Details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedExp && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content bento-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <X size={24} />
            </button>
            
            <div className="modal-header-centered">
              <img src={selectedExp.companyLogo} alt={`${selectedExp.companyName} Logo`} className="modal-company-logo" />
              
              <div className="modal-meta-badges">
                <span className="modal-role-badge">
                  <span className="badge-icon-wrap">{selectedExp.icon}</span>
                  {selectedExp.role}
                </span>
                {selectedExp.employmentType && (
                  <span className="modal-meta-pill">
                    <Briefcase size={13} />
                    {selectedExp.employmentType}
                  </span>
                )}
                {selectedExp.period && (
                  <span className="modal-meta-pill">
                    <Calendar size={13} />
                    {selectedExp.period}
                  </span>
                )}
                {selectedExp.location && (
                  <span className="modal-meta-pill">
                    <MapPin size={13} />
                    {selectedExp.location}
                  </span>
                )}
              </div>

              <h3 className="modal-company-title">{selectedExp.companyName}</h3>
              <p className="modal-desc-centered">{selectedExp.details || selectedExp.description}</p>
              
              {/* Key Responsibilities & Achievements */}
              {selectedExp.responsibilities && selectedExp.responsibilities.length > 0 && (
                <div className="modal-responsibilities-box">
                  <h4 className="responsibilities-heading">Key Highlights & Responsibilities</h4>
                  <ul className="responsibilities-list">
                    {selectedExp.responsibilities.map((resp, i) => (
                      <li key={i} className="responsibilities-item">
                        <CheckCircle2 size={16} className="resp-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Bento Gallery Grid */}
            <div className="modal-gallery-bento">
              {selectedExp.gallery && selectedExp.gallery.length > 1 ? (
                selectedExp.gallery.map((item, i) => (
                  <div 
                    key={i} 
                    className={`bento-item bento-${selectedExp.gallery.length}-${i}`}
                    onClick={() => setPreviewImage(item.src)}
                  >
                    <img src={item.src} alt={item.alt || `Gallery image ${i + 1}`} loading="lazy" />
                    <div className="bento-hover-overlay">
                      <Maximize2 size={18} color="#fff" />
                    </div>
                  </div>
                ))
              ) : (
                <div 
                  className="bento-item bento-single"
                  onClick={() => setPreviewImage(selectedExp.gallery ? selectedExp.gallery[0]?.src : selectedExp.image)}
                >
                  <img 
                    src={selectedExp.gallery ? selectedExp.gallery[0]?.src : selectedExp.image} 
                    alt={selectedExp.companyName} 
                  />
                  <div className="bento-hover-overlay">
                    <Maximize2 size={18} color="#fff" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Preview Lightbox */}
      {previewImage && (
        <div className="preview-lightbox-overlay" onClick={() => setPreviewImage(null)}>
          <div className="preview-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="preview-lightbox-close" 
              onClick={() => setPreviewImage(null)}
              aria-label="Close image preview"
            >
              <X size={24} color="#ffffff" />
            </button>
            <img src={previewImage} alt="Fullscreen preview" className="preview-lightbox-img" />
          </div>
        </div>
      )}

    </section>
  );
}

export default ExperiencesSection;


