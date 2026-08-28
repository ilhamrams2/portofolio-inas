import React from 'react';
import { Tv, Film, Mic, BookOpen, Lightbulb, Users, Edit3, ArrowRight, Handshake, GraduationCap } from 'lucide-react';
import aboutImg from '../assets/images/about-me/inas-zhafirah-about.png';
import ImageWithSkeleton from './ImageWithSkeleton';
import './AboutSection.css';

const tags = [
  { label: 'Journalism', icon: <Tv size={16} /> },
  { label: 'Film Production Administration & Coordination', icon: <Film size={16} /> },
  { label: 'Creative Thinking', icon: <Lightbulb size={16} /> },
  { label: 'Scriptwriting & Copywriting', icon: <Edit3 size={16} /> },
  { label: 'Public Speaking', icon: <Mic size={16} /> },
  { label: 'Public Relation', icon: <Handshake size={16} /> },
  { label: 'Teaching & Classroom Management', icon: <GraduationCap size={16} /> },
  { label: 'Education Consultant', icon: <BookOpen size={16} /> },
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
            <ImageWithSkeleton
              src={aboutImg}
              alt="Inas Zhafirah - Communication Professional, TV Reporter and Duta Baca Depok"
              className="about-image"
              wrapperClassName="about-img-skeleton-wrap"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Right Content Area */}
        <div className="about-right" data-aos="fade-left" data-aos-delay="200">
          <h2 className="about-title">ABOUT ME</h2>

          <div className="about-description">
            <p>
              I am a Communication Professional with a multidisciplinary background in Journalism, Broadcasting &amp; Film, Creative Content, and Education. My experience spans television journalism, film and video production, copywriting, digital content, teaching, and public speaking, allowing me to turn ideas into stories and content that inform, engage, and connect with audiences. For over three years, I have actively engaged with diverse audiences as a Speaker, MC, Host, Mentor, and Reading Ambassador of Depok City, contributing to literacy, education, and social initiatives through public engagement and community collaborations.
            </p>
            <p>
              This combination of communication, public engagement, and creative experience allows me to approach every project from both an audience and production perspective. As a BNSP-certified Television Producer, Video Editor, and Assistant Director, I bring both creative and production perspectives to every project. Beyond media, my experience in education and public engagement has strengthened my ability to communicate, collaborate, and create meaningful experiences for diverse audiences.
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
            <button className="cta-btn" onClick={() => window.location.href = '#experiences'} aria-label="See experiences section">
              SEE MY EXPERIENCES <ArrowRight size={20} />
            </button>
            <button className="secondary-btn" onClick={() => window.location.href = '#contact'} aria-label="Contact Inas Zhafirah">
              Contact Me !
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
