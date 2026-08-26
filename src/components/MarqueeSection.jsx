import React from 'react';
import './MarqueeSection.css';

function MarqueeSection() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-item">JOURNALIST <span className="dot">•</span></span>
          <span className="marquee-item">CONTENT CREATOR <span className="dot">•</span></span>
          <span className="marquee-item">DIGITAL STRATEGIST <span className="dot">•</span></span>
          <span className="marquee-item">VIDEO EDITOR <span className="dot">•</span></span>
          <span className="marquee-item">COMMUNICATION PRO <span className="dot">•</span></span>
          
          {/* Duplicate for infinite loop */}
          <span className="marquee-item">JOURNALIST <span className="dot">•</span></span>
          <span className="marquee-item">CONTENT CREATOR <span className="dot">•</span></span>
          <span className="marquee-item">DIGITAL STRATEGIST <span className="dot">•</span></span>
          <span className="marquee-item">VIDEO EDITOR <span className="dot">•</span></span>
          <span className="marquee-item">COMMUNICATION PRO <span className="dot">•</span></span>
        </div>
      </div>
    </div>
  );
}

export default MarqueeSection;
