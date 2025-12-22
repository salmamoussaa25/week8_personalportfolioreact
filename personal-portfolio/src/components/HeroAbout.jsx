import React from 'react';
import './HeroAbout.css';

const HeroAbout = () => {
  return (
    <section className="about-hero">
      {/* Animated Background Elements */}
      <div className="bg-visuals">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="hero-content">
        {/* Left Side: Typography */}
        <div className="text-side">
          <span className="eyebrow">Multi-disciplinary UX/UI Designer</span>
          <h1 className="main-title">
            Crafting digital <br /> 
            <span style={{ color: 'var(--primarycolor)' }}>experiences</span> with soul.
          </h1>
          <p className="description">
            I help brands bridge the gap between complex functionality and 
            elegant aesthetics. My approach is rooted in user-centric design 
            and modern technical architecture.
          </p>
          
          
        </div>

        {/* Right Side: Visual Profile */}
        <div className="visual-side">
          <div className="image-frame">
            <img 
              src="https://via.placeholder.com/600x800" 
              alt="Profile" 
              className="placeholder-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;