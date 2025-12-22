import React from 'react';
import './AboutInspo.css';

const AboutInspo = () => {
  const inspos = [
    {
      id: 1,
      title: "Nostalgic Echoes",
      context: "The bittersweet ache of old photographs and the scent of rain on dry earth.",
      class: "drift-slow"
    },
    {
      id: 2,
      title: "Pure Whimsy",
      context: "Finding magic in the mundane; where gravity is optional and colors speak.",
      class: "drift-fast"
    },
    {
      id: 3,
      title: "Boundless Wonder",
      context: "A child-like curiosity that treats every 'why' as an invitation to a new world.",
      class: "drift-medium"
    },
    {
      id: 4,
      title: "Illustrative Soul",
      context: "Lines that breathe and textures that tell stories better than words ever could.",
      class: "drift-slow-reverse"
    }
  ];

  return (
    <section className="dreamscape-section">
      {/* Decorative background elements */}
      <div className="star-dust"></div>
      
      <div className="dreamscape-header">
        <h2 className="dream-title">The things that spark my soul</h2>
      </div>

      <div className="float-container">
        {inspos.map((item) => (
          <div key={item.id} className={`dream-bubble ${item.class}`}>
            <div className="bubble-content">
              <h3 className="bubble-title">{item.title}</h3>
              <p className="bubble-text">{item.context}</p>
            </div>
            {/* The "Glow" behind the bubble */}
            <div className="bubble-glow"></div>
          </div>
        ))}
      </div>

      {/* Footer hint for interaction */}
      <div className="dream-hint">Hover to still the mind</div>
    </section>
  );
};

export default AboutInspo;