import React, { useState } from 'react';
import './AboutBio.css';

const AboutBio = () => {
  const [activeFact, setActiveFact] = useState(null);

  // SVG Icon Components for an illustrative look
  const Icons = {
    Design: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.5 1.5" /><path d="M14 11l5 5" />
      </svg>
    ),
    Coffee: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><path d="M6 1v3" /><path d="M10 1v3" /><path d="M14 1v3" />
      </svg>
    ),
    Learning: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    Nature: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    )
  };

  const interests = [
    { id: 1, Icon: Icons.Design, title: "Design", desc: "Obsessed with editorial layouts" },
    { id: 2, Icon: Icons.Coffee, title: "Coffee", desc: "Fuelled by iced spanish lattes" },
    { id: 3, Icon: Icons.Learning, title: "Curiosity", desc: "Always in a new course" },
    { id: 4, Icon: Icons.Nature, title: "Nature", desc: "Finding peace in the green" }
  ];

  return (
    <section className="about-bio-root">
      <div className="bio-inner-wrap">
        
        {/* Left Side: Background & Education */}
        <div className="bio-narrative">
          <h2 className="bio-section-heading">The Backstory</h2>
          <p className="bio-text-main">
            I am currently pursuing my degree in <span className="text-highlight"> User Experience and Interface Design</span>, 
            where I blend logic with pure creativity. My background is rooted in 
            fine arts, which allows me to see code as just another canvas for storytelling.
          </p>
          
          <div className="study-focus-card">
            <h3 className="focus-label">Current Focus</h3>
            <p className="focus-description">Specializing in HCI, IA, and Layout Design.</p>
          </div>
        </div>

        {/* Right Side: Interactive Personality Grid */}
        <div className="bio-visual-grid">
          <h2 className="bio-section-heading">Beyond the Code</h2>
          <div className="personality-grid">
            {interests.map((item) => (
              <div key={item.id} className="personality-item-card">
                <div className="illustrative-icon-box">
                  <item.Icon />
                </div>
                <h4 className="personality-item-label">{item.title}</h4>
                <div className="personality-hover-overlay">
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Toggle Section */}
          <div className="fun-fact-container">
            <p className="fun-fact-prompt">Wanna know a secret?</p>
            <button 
              className="fun-fact-trigger"
              onClick={() => setActiveFact(!activeFact)}
            >
              {activeFact ? "✨ That's me!" : "Reveal Fact"}
            </button>
            {activeFact && (
              <div className="fun-fact-reveal-box">
                I once spent 48 hours straight just trying to find the perfect shade of orange (spoiler: it was #E66249)!
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutBio;