import React from 'react';
import { Tv, Film, Mic, BookOpen, Lightbulb, Users, Edit3, ArrowRight } from 'lucide-react';
import aboutImg from '../assets/images/about-me/inas-zhafirah-about.png';
import './AboutSection.css';

const tags = [
  { label: 'Journalism', icon: <Tv size={16} /> },
  { label: 'Broadcast & Film', icon: <Film size={16} /> },
  { label: 'Public Speaking', icon: <Mic size={16} /> },
  { label: 'Scriptwriting', icon: <Edit3 size={16} /> },
  { label: 'Education Consultant', icon: <BookOpen size={16} /> },
  { label: 'Creative Thinking', icon: <Lightbulb size={16} /> },
  { label: 'Literacy & Social Collaboration', icon: <Users size={16} /> },
];

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        
        {/* Left Image Area */}
        <div className="about-left" data-aos="fade-right">
          <div className="about-intro">
            <span className="red-dash"></span>
            <span className="intro-text">WHO I'AM?</span>
          </div>
          <div className="image-wrapper">
            <div className="red-block-bg"></div>
            <img src={aboutImg} alt="Inas Zhafirah" className="about-image" />
          </div>
        </div>

        {/* Right Content Area */}
        <div className="about-right" data-aos="fade-left" data-aos-delay="200">
          <h2 className="about-title">ABOUT ME !</h2>
          
          <div className="about-description">
            <p>
              I am a Communication professional with experience in education, broadcasting, 
              journalism, and strategic communication. Most recently, I worked as a Reporter 
              at Garuda TV, producing 50+ news scripts and covering national news through 
              field and live reporting. With 4+ years in education as a Teacher and Education 
              Consultant, I create content and stories that inform, engage, and connect with audiences.
            </p>
            <p>
              BNSP Certified as a Television Assistant Producer, Video Editor, and Assistant 
              Director. I was also honored to serve as a Reading Ambassador of Depok City 
              2024, actively contributing to literacy and social initiatives through 
              collaborations with the Depok City Government, youth organizations across 
              West Java, and various institutions and communities.
            </p>
          </div>

          <div className="tags-grid">
            {tags.map((tag, index) => (
              <div key={index} className="tag-item">
                <span className="tag-icon">{tag.icon}</span>
                {tag.label}
              </div>
            ))}
          </div>

          <div className="about-actions">
            <button className="cta-btn" onClick={() => window.location.href='#experiences'}>
              SEE MY EXPERIENCES <ArrowRight size={20} />
            </button>
            <button className="secondary-btn">
              Contact Me !
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
