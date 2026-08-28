import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import backshape1 from '../assets/images/experience/backshape1.png';
import './CertificationsSection.css';

// Import certification images
import certProduser from '../assets/images/certification/SERKOM PRODUSER.png';
import certAstrada from '../assets/images/certification/SERKOM ASTRADA.png';
import certVideoEditing from '../assets/images/certification/SERKOM VIDEO EDITING.png';
import certMsibJobhun from '../assets/images/certification/Sertifikat Keikutsertaan Studi Independen Bersertifikat (MSIB) Batch 6 di PT. Jobhun Membangun Indonesia (Februari – Juni 2024).png';
import certInsCinema from '../assets/images/certification/Sertifikat Keikutsertaan Pelatihan Penyutradaraan Single dan Multi Camera oleh Lembaga Pelatihan Kerja InsCinema (12 – 19 Mei 2024).png';
import certBroadcastingAward from '../assets/images/certification/Sertifikat Keikutsertaan Broadcasting Award 2023 di Wisma Aset Cimacan (23 – 25 Juni 2023).png';
import certSeminarKpi from '../assets/images/certification/Sertifikat Keikutsertaan Seminar Nasional Reposisi Media Baru dalam Diskursus Revisi Undang-Undang Penyiaran oleh Komisi Penyiaran Indonesia (2 April 2024).png';
import certSimulasiTv from '../assets/images/certification/Sertifikat Keikutsertaan Simulasi Siaran Berita TV di Aula UBSI Kampus Kalimalang (Desember 2023).png';
import certToefl from '../assets/images/certification/TOEFEL.png';
import certContentCreator from '../assets/images/certification/Sertifikat Keikutsertaan Seminar Content Creator di Aula UBSI Kampus Kalimalang (23 Juni 2022).png';
import certTilawati from '../assets/images/certification/WhatsApp Image 2026-08-26 at 21.14.42.jpeg';
import certTahfizh from '../assets/images/certification/WhatsApp Image 2026-08-26 at 21.14.43 (1).jpeg';
import certZto from '../assets/images/certification/Sertifikat Keikutsertaan Seminar ZTO Episode 39.png';

const certificationsData = [
  {
    id: 1,
    title: 'TOEFL Prediction Test (Score: 557)',
    category: 'Language Proficiency',
    issuer: 'Lembaga Bahasa UBSI',
    date: 'Agustus 2025',
    img: certToefl
  },
  {
    id: 2,
    title: 'Sertifikasi Asisten Produser TV',
    category: 'BNSP Certification',
    issuer: 'BNSP • LSP UBSI',
    date: 'Februari 2025',
    img: certProduser
  },
  {
    id: 3,
    title: 'Sertifikasi Video Editing',
    category: 'BNSP Certification',
    issuer: 'BNSP • LSP UBSI',
    date: 'Februari 2025',
    img: certVideoEditing
  },
  {
    id: 4,
    title: 'Sertifikasi Asisten Sutradara',
    category: 'BNSP Certification',
    issuer: 'BNSP • LSP InsCinema',
    date: 'November 2024',
    img: certAstrada
  },
  {
    id: 5,
    title: 'Studi Independen (MSIB) Batch 6',
    category: 'Kampus Merdeka',
    issuer: 'PT. Jobhun Membangun Indonesia',
    date: 'Feb – Jun 2024',
    img: certMsibJobhun
  },
  {
    id: 6,
    title: 'Pelatihan Penyutradaraan Single & Multi Camera',
    category: 'Professional Training',
    issuer: 'LPK InsCinema',
    date: 'Mei 2024',
    img: certInsCinema
  },
  {
    id: 7,
    title: 'Seminar Voice Over Talent (ZTO Ep. 39)',
    category: 'Creative Seminar',
    issuer: 'Zero to One (ZTO)',
    date: 'April 2024',
    img: certZto
  },
  {
    id: 8,
    title: 'Seminar Nasional: Reposisi Media Baru',
    category: 'National Seminar',
    issuer: 'Komisi Penyiaran Indonesia (KPI)',
    date: 'April 2024',
    img: certSeminarKpi
  },
  {
    id: 9,
    title: 'Simulasi Siaran Berita TV',
    category: 'Broadcasting Workshop',
    issuer: 'UBSI Kampus Kalimalang',
    date: 'Desember 2023',
    img: certSimulasiTv
  },
  {
    id: 10,
    title: 'Broadcasting Award 2023',
    category: 'Award & Competition',
    issuer: 'Broadcasting Award • Cimacan',
    date: 'Juni 2023',
    img: certBroadcastingAward
  },
  {
    id: 11,
    title: 'Seminar Content Creator',
    category: 'Creative Seminar',
    issuer: 'UBSI Kampus Kalimalang',
    date: 'Juni 2022',
    img: certContentCreator
  },
  {
    id: 12,
    title: 'Standarisasi Guru Al-Qur\'an (Metode Tilawati)',
    category: 'Education & Training',
    issuer: 'Tilawati Center • SMKN 2 Cibinong',
    date: 'Oktober 2021',
    img: certTilawati
  },
  {
    id: 13,
    title: 'Sertifikat Tahfizh Qur\'an (7 Juz - Mumtaz)',
    category: 'Tahfizh & Academic',
    issuer: 'SMA Adzkia Islamic School • DT Peduli',
    date: 'Mei 2021',
    img: certTahfizh
  }
];

function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [selectedCert, setSelectedCert] = useState(null);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, certificationsData.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certification" className="cert-section">
      <img src={backshape1} alt="" className="backshape-cert" />
      
      <div className="container cert-container">
        {/* Header Area */}
        <div className="cert-header" data-aos="fade-up">
          <div className="section-label">
            <span className="red-dash"></span>
            <span className="label-text">WHAT I'VE ACHIEVED</span>
          </div>
          <h2 className="cert-title">CERTIFICATION</h2>
          <p className="cert-subtitle">A JOURNEY OF CONTINUOUS LEARNING AND EXCELLENCE.</p>
        </div>

        {/* Carousel Area */}
        <div className="cert-carousel-wrapper" data-aos="fade-up" data-aos-delay="200">
          <button className="carousel-nav prev" onClick={prevSlide} aria-label="Previous Certificate">
            <ChevronLeft size={28} color="#ffffff" />
          </button>
          
          <div className="carousel-viewport">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {certificationsData.map((cert) => (
                <div 
                  className="cert-card" 
                  key={cert.id} 
                  onClick={() => setSelectedCert(cert)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedCert(cert); }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View certificate: ${cert.title}`}
                >
                  <div className="cert-image-container">
                    <img 
                      src={cert.img} 
                      alt={`${cert.title} - ${cert.issuer}`} 
                      className="cert-img" 
                      loading="lazy" 
                      decoding="async"
                    />
                    <div className="cert-overlay">
                      <span className="cert-view-btn">
                        <Maximize2 size={16} /> View Certificate
                      </span>
                    </div>
                  </div>
                  <div className="cert-info">
                    <div className="cert-badge">{cert.category}</div>
                    <h3 className="cert-card-title">{cert.title}</h3>
                    <div className="cert-meta">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-nav next" onClick={nextSlide} aria-label="Next Certificate">
            <ChevronRight size={28} color="#ffffff" />
          </button>

          {/* Dots Pagination */}
          <div className="carousel-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <span 
                key={idx} 
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') goToSlide(idx); }}
                tabIndex={0}
                role="button"
                aria-label={`Go to slide ${idx + 1}`}
              ></span>
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)} role="dialog" aria-modal="true" aria-label="Certificate details modal">
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="cert-modal-close" 
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate modal"
            >
              <X size={24} color="#ffffff" />
            </button>
            <div className="cert-modal-image-wrapper">
              <img 
                src={selectedCert.img} 
                alt={`${selectedCert.title} - ${selectedCert.issuer}`} 
                className="cert-modal-image" 
                decoding="async"
              />
            </div>
            <div className="cert-modal-footer">
              <span className="cert-modal-badge">{selectedCert.category}</span>
              <h3 className="cert-modal-title">{selectedCert.title}</h3>
              <p className="cert-modal-meta">
                <span>{selectedCert.issuer}</span> • <span>{selectedCert.date}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificationsSection;

