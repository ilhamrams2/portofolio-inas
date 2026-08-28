import React, { useState } from 'react';
import backshape1 from '../assets/images/experience/backshape1.png';
import logoGarudaTV from '../assets/images/experience/logo/logo-garudatv.png';
import logoUniv from '../assets/images/projects/univ.png';
import logoJobhun from '../assets/images/projects/jobhun.png';

// Garuda TV Live Report Images
import garudaImg20 from '../assets/images/experience/garudatv/image 20.png';
import garudaImg21 from '../assets/images/experience/garudatv/image 21.png';
import garudaImg23 from '../assets/images/experience/garudatv/image 23.png';

import './ProjectsSection.css';

const projectsData = [
  {
    id: 1,
    title: 'JOURNALIST NEWS PORTFOLIO - GARUDA TV',
    shortDesc: 'A showcase of live reporting, broadcast journalism, and news coverage at Garuda TV.',
    logoImg: logoGarudaTV,
    overview: 'As a television journalist, I was responsible for breaking news coverage, investigative reporting, scriptwriting, and live on-location broadcasts across major national political and social events.',
    reports: [
      {
        id: 'rep-1',
        image: garudaImg20,
        title: 'Live Report - First Pretrial Hearing of Roy Suryo (South Jakarta District Court)',
        description: 'Delivering real-time information to the public regarding the latest updates and proceedings of the alleged fake diploma case, which entered the first pretrial hearing phase for defendant Roy Suryo at the South Jakarta District Court.'
      },
      {
        id: 'rep-2',
        image: garudaImg21,
        title: 'Live Report - Indonesian House of Representatives (DPR RI)',
        description: 'Delivering real-time information to the public regarding the latest updates from the Working Meeting and Hearing (Raker & RDP) of Commission IV DPR RI together with the Ministry of Agriculture.'
      },
      {
        id: 'rep-3',
        image: garudaImg23,
        title: 'Live Report - Jakarta City Hall (Balaikota DKI Jakarta)',
        description: 'Delivering live field updates on municipal governance, metropolitan developments, and press briefings directly from Jakarta City Hall for the Laporan 8 Siang broadcast.'
      }
    ],
    keyResponsibilities: [
      'Conducting comprehensive investigative research prior to field reporting.',
      'Interviewing key public figures, government officials, and legal experts on-site.',
      'Writing sharp, fact-checked, and ethics-compliant television news scripts.',
      'Coordinating with camera crews and broadcast producers for compelling news visuals.',
      'Performing live on-air reporting and studio voice-overs for daily national bulletins.'
    ]
  },
  {
    id: 2,
    title: 'PROJECT COLLAGE - CREATIVE DIGITAL MEDIA',
    shortDesc: 'A creative digital media production serving as content ideator, director, and video editor.',
    logoImg: logoUniv,
    overview: 'A capstone creative media project for the Creative Digital Media course, focusing on cinematic visual storytelling, directing, and end-to-end digital production.',
    keyResponsibilities: [
      'Developed creative narratives, visual moodboards, and shooting storyboards from scratch.',
      'Directed on-set actors and crew, managing camera angles, lighting, and pacing.',
      'Conducted offline and online video editing, color grading, sound design, and final rendering.'
    ],
    summaryText: 'This project highlights cross-disciplinary creative production skills, combining narrative conceptualization with technical video editing proficiency.'
  },
  {
    id: 3,
    title: 'CAPSTONE PROJECT COPYWRITING - GROUP 4',
    shortDesc: 'Certified Independent Study (MSIB Batch 6) at Jobhun Academy focusing on conversion copywriting.',
    logoImg: logoJobhun,
    overview: 'Final capstone copywriting campaign for MSIB Batch 6 at Jobhun Academy. Focused on comprehensive brand messaging, conversion-oriented copy, and multi-channel digital campaigns.',
    keyResponsibilities: [
      'Conducted target audience research, pain-point analysis, and competitor benchmarking.',
      'Drafted conversion-focused copy for landing pages, social media advertising, and automated email funnels.',
      'Executed A/B copy testing to measure audience engagement, CTR, and conversion metrics.'
    ],
    summaryText: 'Demonstrated mastery in persuasive writing, customer journey mapping, and strategic campaign execution across multiple digital marketing channels.'
  }
];

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [previewImage, setPreviewImage] = useState(null);

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
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project); }}
                tabIndex={0}
                role="button"
                aria-label={`Select project: ${project.title}`}
              >
                <div className="project-logo-ph">
                  {project.logoImg ? (
                    <img 
                      src={project.logoImg} 
                      alt={`${project.title} Logo`} 
                      className="project-card-logo-img"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    project.title.charAt(0)
                  )}
                </div>
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.shortDesc}</p>
                  <span className="see-detail">See Detail →</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Detail View (Scrollable) */}
          <div className="project-detail-view" data-aos="fade-left" data-aos-delay="400">
            <div className="detail-content-scroll">
              <h3 className="detail-title">{selectedProject.title}</h3>
              
              {/* Project Overview */}
              {selectedProject.overview && (
                <div className="project-overview-block">
                  <p className="project-overview-text">{selectedProject.overview}</p>
                </div>
              )}

              {/* Specific Live Reports Layout (Garuda TV style) */}
              {selectedProject.reports && selectedProject.reports.length > 0 && (
                <div className="project-reports-container">
                  <h4 className="reports-section-title">Featured Broadcasts & Live Reports</h4>
                  <div className="reports-list">
                    {selectedProject.reports.map((report) => (
                      <div key={report.id} className="report-item-card">
                        <div 
                          className="report-img-wrapper"
                          onClick={() => setPreviewImage(report.image)}
                          title="Click to view full image"
                        >
                          <img 
                            src={report.image} 
                            alt={report.title} 
                            className="report-image"
                            loading="lazy"
                          />
                          <div className="report-img-overlay">
                            <span>🔍 Enlarge</span>
                          </div>
                        </div>
                        <div className="report-info">
                          <h4 className="report-title">{report.title}</h4>
                          <p className="report-desc">{report.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Responsibilities */}
              {selectedProject.keyResponsibilities && (
                <div className="project-responsibilities-block">
                  <h4 className="responsibilities-title">Key Responsibilities & Deliverables</h4>
                  <ul className="responsibilities-list">
                    {selectedProject.keyResponsibilities.map((item, idx) => (
                      <li key={idx} className="responsibility-item">
                        <span className="resp-bullet">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Summary Text for other projects */}
              {selectedProject.summaryText && (
                <div className="project-summary-block">
                  <p>{selectedProject.summaryText}</p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="proj-image-modal-overlay" onClick={() => setPreviewImage(null)}>
          <div className="proj-image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="proj-modal-close-btn" 
              onClick={() => setPreviewImage(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img src={previewImage} alt="Live Report Full Preview" className="proj-modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;

