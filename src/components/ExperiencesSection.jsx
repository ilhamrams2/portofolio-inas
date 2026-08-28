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

// TVRI Gallery Images
import tvriCardCover from '../assets/images/experience/inas-zhafirah-tvri.jpeg';
import tvriCoverImg from '../assets/images/experience/tvri/WhatsApp Image 2026-08-26 at 21.39.32.jpeg';
import tvriImg2 from '../assets/images/experience/tvri/WhatsApp Image 2026-08-26 at 21.39.31 (1).jpeg';
import tvriImg3 from '../assets/images/experience/tvri/WhatsApp Image 2026-08-26 at 21.39.30.jpeg';
import tvriImg4 from '../assets/images/experience/tvri/WhatsApp Image 2026-08-26 at 21.39.31 (2).jpeg';
import logoTvri from '../assets/images/experience/logo/logo-tvri.svg';

// SMK Prestasi Prima Gallery Images
import smkImg1 from '../assets/images/experience/smkprestasiprima/WhatsApp Image 2026-08-26 at 21.31.40 (1).jpeg';
import smkImg2 from '../assets/images/experience/smkprestasiprima/WhatsApp Image 2026-08-26 at 21.31.40.jpeg';
import smkImg3 from '../assets/images/experience/smkprestasiprima/WhatsApp Image 2026-08-26 at 21.31.41 (1).jpeg';
import smkImg4 from '../assets/images/experience/smkprestasiprima/WhatsApp Image 2026-08-26 at 21.31.41.jpeg';
import smkImg5 from '../assets/images/experience/smkprestasiprima/WhatsApp Image 2026-08-26 at 21.31.42.jpeg';
import smkImg6 from '../assets/images/experience/smkprestasiprima/WhatsApp Image 2026-08-26 at 21.31.43 (1).jpeg';
import smkImg7 from '../assets/images/experience/smkprestasiprima/WhatsApp Image 2026-08-26 at 21.31.43.jpeg';

// Andalusia Experience & Gallery Images
import expAndalusia from '../assets/images/experience/inas-zhafirah-andalusia.jpeg';
import logoAndalusia from '../assets/images/experience/logo/MI PLUS ANDALUSIA QUR\'ANIC SCHOOL.png';
import andalusiaImg1 from '../assets/images/experience/andalusia/WhatsApp Image 2026-08-26 at 21.46.30.jpeg';
import andalusiaImg2 from '../assets/images/experience/andalusia/WhatsApp Image 2026-08-26 at 21.50.42 (2).jpeg';
import andalusiaImg3 from '../assets/images/experience/andalusia/WhatsApp Image 2026-08-26 at 21.50.48.jpeg';
import andalusiaImg4 from '../assets/images/experience/andalusia/WhatsApp Image 2026-08-26 at 21.50.46.jpeg';
import andalusiaImg5 from '../assets/images/experience/andalusia/WhatsApp Image 2026-08-26 at 21.50.49.jpeg';
import andalusiaImg6 from '../assets/images/experience/andalusia/WhatsApp Image 2026-08-26 at 21.50.47 (1).jpeg';
import andalusiaImg7 from '../assets/images/experience/andalusia/WhatsApp Image 2026-08-26 at 21.50.54.jpeg';

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
    role: 'Vocational Teacher – Broadcasting & Film',
    employmentType: 'Educator',
    period: 'January 2025 – January 2026',
    location: 'Jakarta, Indonesia',
    year: '2025 – 2026',
    icon: <User size={14} />,
    companyLogo: logo3,
    image: exp3,
    companyName: 'SMK PRESTASI PRIMA',
    description: 'Taught Broadcasting and Film Production subjects to Grade 10–12 students and mentored filmmaking projects.',
    details: 'Served as a Vocational Teacher guiding students in broadcasting and television film production, multicamera studio operations, and creative filmmaking projects.',
    responsibilities: [
      'Taught Broadcasting and Film Production subjects to Grade 10–12 students',
      'Mentored students in digital content creation and filmmaking projects'
    ],
    gallery: [
      { src: smkImg1, alt: 'SMK Prestasi Prima Film & Broadcasting Mentoring 1' },
      { src: smkImg2, alt: 'SMK Prestasi Prima Studio Production' },
      { src: smkImg3, alt: 'SMK Prestasi Prima Practical Class' },
      { src: smkImg4, alt: 'SMK Prestasi Prima Student Content Creation' },
      { src: smkImg5, alt: 'SMK Prestasi Prima Camera & Equipment Practice' },
      { src: smkImg6, alt: 'SMK Prestasi Prima Classroom Session' },
      { src: smkImg7, alt: 'SMK Prestasi Prima Broadcasting Activity' }
    ]
  },
  {
    id: 4,
    role: 'Reporter for Online News Portal',
    employmentType: 'Internship',
    period: 'August – October 2024',
    location: 'Jakarta, Indonesia',
    year: '2024',
    icon: <Mic size={14} />,
    companyLogo: logoTvri,
    image: tvriCardCover,
    companyName: 'TVRI NASIONAL',
    description: 'Monitored daily news developments and produced online news articles from field reporting and ministerial press conferences.',
    details: 'Served as an Online News Portal Reporter at TVRI Nasional covering major press conferences, ministerial briefings, and breaking national developments.',
    responsibilities: [
      'Monitored daily news developments to support timely online reporting',
      'Produced online news articles from interviews and field reporting'
    ],
    gallery: [
      { src: tvriCoverImg, alt: 'TVRI Field Coverage at KPK' },
      { src: tvriImg2, alt: 'TVRI Press Conference Munas 2024' },
      { src: tvriImg3, alt: 'TVRI Reporting at Kemenko PMK' },
      { src: tvriImg4, alt: 'TVRI Coverage at Kominfo Press Room' }
    ]
  },
  {
    id: 5,
    role: 'Homeroom Teacher',
    employmentType: 'Educator & MC',
    period: 'July 2021 – June 2024',
    location: 'Jakarta, Indonesia',
    year: '2021 – 2024',
    icon: <BookOpen size={14} />,
    companyLogo: logoAndalusia,
    image: expAndalusia,
    companyName: 'MI PLUS ANDALUSIA QUR’ANIC SCHOOL',
    description: 'Served as Grade 5 Homeroom Teacher for three academic years, taught general & Islamic education, and hosted school ceremonies as Master of Ceremony.',
    details: 'Served as Grade 5 Homeroom Teacher for three academic years at MI Plus Andalusia Qur’anic School, managing classroom instruction in general and Islamic subjects and hosting formal school ceremonies as Master of Ceremony.',
    responsibilities: [
      'Served as Grade 5 Homeroom Teacher for three academic years',
      'Taught general and Islamic education subjects',
      'Hosted school ceremonies and graduation events as Master of Ceremony'
    ],
    gallery: [
      { src: andalusiaImg1, alt: 'MI Plus Andalusia Master of Ceremony Stage' },
      { src: andalusiaImg2, alt: 'MI Plus Andalusia Pesantren Kilat Event' },
      { src: andalusiaImg3, alt: 'MI Plus Andalusia Classroom Audiovisual Learning' },
      { src: andalusiaImg4, alt: 'MI Plus Andalusia Teacher & Student Appreciation' },
      { src: andalusiaImg5, alt: 'MI Plus Andalusia Outdoor Activity & Trophy Celebration' },
      { src: andalusiaImg6, alt: 'MI Plus Andalusia School Community Activity' },
      { src: andalusiaImg7, alt: 'MI Plus Andalusia Classroom Session' }
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
                <img 
                  src={exp.image} 
                  alt={`${exp.companyName} - ${exp.role} by Inas Zhafirah`} 
                  className="experience-image" 
                  loading="lazy"
                  decoding="async"
                />
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
                  <img 
                    src={exp.companyLogo} 
                    alt={`${exp.companyName} Logo`} 
                    style={{ height: '30px', objectFit: 'contain' }} 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="card-desc">{exp.description}</p>
                <button 
                  className="cta-btn small-btn" 
                  onClick={() => openModal(exp)}
                  aria-label={`View experience details at ${exp.companyName}`}
                >
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
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="modal-company-title">
          <div className="modal-content bento-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close details modal">
              <X size={24} />
            </button>
            
            <div className="modal-header-centered">
              <img 
                src={selectedExp.companyLogo} 
                alt={`${selectedExp.companyName} Logo`} 
                className="modal-company-logo" 
                loading="lazy"
                decoding="async"
              />
              
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

              <h3 id="modal-company-title" className="modal-company-title">{selectedExp.companyName}</h3>
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
                    tabIndex={0}
                    role="button"
                    aria-label={`View photo ${i + 1}: ${item.alt || selectedExp.companyName}`}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setPreviewImage(item.src); }}
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt || `${selectedExp.companyName} Gallery image ${i + 1}`} 
                      loading="lazy" 
                      decoding="async"
                    />
                    <div className="bento-hover-overlay">
                      <Maximize2 size={18} color="#fff" />
                    </div>
                  </div>
                ))
              ) : (
                <div 
                  className="bento-item bento-single"
                  onClick={() => setPreviewImage(selectedExp.gallery ? selectedExp.gallery[0]?.src : selectedExp.image)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo: ${selectedExp.companyName}`}
                >
                  <img 
                    src={selectedExp.gallery ? selectedExp.gallery[0]?.src : selectedExp.image} 
                    alt={selectedExp.companyName} 
                    loading="lazy"
                    decoding="async"
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
        <div className="preview-lightbox-overlay" onClick={() => setPreviewImage(null)} role="dialog" aria-modal="true" aria-label="Fullscreen image lightbox">
          <div className="preview-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="preview-lightbox-close" 
              onClick={() => setPreviewImage(null)}
              aria-label="Close fullscreen preview"
            >
              <X size={24} color="#ffffff" />
            </button>
            <img 
              src={previewImage} 
              alt="Fullscreen experience documentation preview" 
              className="preview-lightbox-img" 
              decoding="async"
            />
          </div>
        </div>
      )}

    </section>
  );
}

export default ExperiencesSection;


