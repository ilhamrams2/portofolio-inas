import React, { useState } from 'react';
import backshape1 from '../assets/images/experience/backshape1.png';
import logoGarudaTV from '../assets/images/experience/logo/logo-garudatv.png';
import logoUniv from '../assets/images/projects/univ.png';
import logoJobhun from '../assets/images/projects/jobhun.png';
import './ProjectsSection.css';

const projectsData = [
  {
    id: 1,
    title: 'PORTOFOLIO JOURNALIST NEWS GARUDA TV',
    shortDesc: 'This project is a recap experiences at Garuda TV as a journalist tv role',
    logoImg: logoGarudaTV,
    fullDetail: `Detail Lengkap: Portofolio Journalist News Garuda TV. 

Sebagai seorang jurnalis televisi, saya bertanggung jawab penuh atas peliputan berita harian, penyusunan naskah (scriptwriting), dan laporan pandangan mata (live reporting). Proyek ini merangkum berbagai liputan nasional yang pernah saya kerjakan, mulai dari isu politik, sosial, hingga berita hiburan. 

Tanggung Jawab Utama:
- Melakukan riset mendalam sebelum peliputan.
- Mewawancarai narasumber kunci di lapangan.
- Menyusun naskah berita yang tajam, akurat, dan sesuai dengan etika jurnalistik.
- Berkoordinasi dengan kameramen dan produser untuk menyajikan visual berita yang menarik.
- Mengisi suara (voice-over) untuk paket berita harian.

(Anda dapat mengganti teks ini dengan penjelasan detail yang jauh lebih panjang. Area ini sudah diatur agar bisa di-scroll ke bawah apabila kontennya sangat banyak sehingga tidak akan merusak layout utama halaman portofolio Anda.)`
  },
  {
    id: 2,
    title: 'PROJECT COLLAGE',
    shortDesc: 'A project for the Creative Digital Media course, where I served as the content ideator, director, and video editor.',
    logoImg: logoUniv,
    fullDetail: `Detail Lengkap: Project Collage.

Proyek ini merupakan tugas besar untuk mata kuliah Creative Digital Media. Saya berperan sebagai Content Ideator, Director, dan Video Editor.

Tanggung Jawab Utama:
- Mengembangkan konsep kreatif dari awal hingga akhir.
- Memimpin proses syuting dan mengarahkan talent.
- Melakukan proses editing video mulai dari offline hingga online editing (termasuk color grading dan sound mixing).

(Tambahkan informasi lebih banyak di sini...)`
  },
  {
    id: 3,
    title: 'CAPSTONE PROJECT COPYWRITING GROUP 4',
    shortDesc: 'MSIB Batch 6 - Jobhun Academy',
    logoImg: logoJobhun,
    fullDetail: `Detail Lengkap: Capstone Project Copywriting Group 4.

Proyek akhir untuk program MSIB Batch 6 di Jobhun Academy. Fokus utama proyek ini adalah merancang strategi copywriting yang komprehensif untuk sebuah brand.

Tanggung Jawab Utama:
- Meriset target audiens dan pain points mereka.
- Menyusun copy untuk landing page, social media ads, dan email marketing.
- Melakukan A/B testing untuk melihat performa copy yang paling efektif.

(Tambahkan informasi lebih banyak di sini...)`
  }
];

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  return (
    <section id="projects" className="projects-section">
      <img src={backshape1} alt="" className="backshape-proj" />
      
      <div className="container projects-container">
        
        {/* Header Area */}
        <div className="projects-header-area" data-aos="fade-up">
          <div className="section-label">
            <span className="red-dash"></span>
            <span className="label-text">WHAT I'VE CREATED</span>
          </div>
          <h2 className="projects-title">PROJECTS</h2>
          <p className="projects-subtitle">WHAT I'VE CREATED</p>
        </div>

        <div className="projects-layout">
          
          {/* Left Side: List of Projects */}
          <div className="projects-list" data-aos="fade-right" data-aos-delay="200">
            {projectsData.map((project) => (
              <div 
                key={project.id} 
                className={`project-card ${selectedProject.id === project.id ? 'active' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-logo-ph" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {project.logoImg ? (
                    <img src={project.logoImg} alt="Logo" style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
                  ) : (
                    project.logoText
                  )}
                </div>
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.shortDesc}</p>
                  <span className="see-detail">See Detail</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Detail View (Scrollable) */}
          <div className="project-detail-view" data-aos="fade-left" data-aos-delay="400">
            <div className="detail-content-scroll">
              <h2 className="detail-title">{selectedProject.title}</h2>
              <div className="detail-body">
                {selectedProject.fullDetail.split('\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
