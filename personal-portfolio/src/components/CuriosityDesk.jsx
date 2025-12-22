import React, { useState } from 'react';
import './CuriosityDesk.css';

const CuriosityDesk = () => {
  const [activeItem, setActiveItem] = useState(null);

  // Custom SVG Illustrations for the desk objects
  const DeskIcons = {
    Font: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 20l3-11h1l3 11M5.5 15h4M16 13c0-3.5 2-4 3.5-4s3.5.5 3.5 4v7h-1.5v-7c0-2-1-2.5-2-2.5s-2 .5-2 2.5v7H16v-7z" />
        <circle cx="12" cy="5" r="1" fill="currentColor" />
      </svg>
    ),
    Clock: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </svg>
    ),
    Sparkle: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 3l1.5 6.5L20 11l-6.5 1.5L12 19l-1.5-6.5L4 11l6.5-1.5z" />
        <path d="M5 4l1 1M19 19l1 1M19 4l1 1M5 19l1 1" strokeLinecap="round" />
      </svg>
    ),
    Compass: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="9" />
        <path d="M16.5 7.5L13.5 13.5L7.5 16.5L10.5 10.5L16.5 7.5Z" />
      </svg>
    ),
    Nodes: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <path d="M14.5 10L17.5 7M9.5 14L6.5 17" strokeLinecap="round" />
      </svg>
    ),
    Mug: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M17 8h1a3 3 0 0 1 0 6h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
        <path d="M7 2v2M11 2v2M14 2v2" strokeLinecap="round" />
      </svg>
    )
  };

  const deskItems = [
    {
      id: 'font',
      label: 'The Typeface',
      Icon: DeskIcons.Font,
      title: 'Favorite Font',
      content: 'Gabriel Sans. It strikes that perfect balance between geometric precision and human warmth.',
      color: 'var(--primarycolor)'
    },
    {
      id: 'hours',
      label: 'The Clock',
      Icon: DeskIcons.Clock,
      title: 'Working Hours',
      content: '9am — 5pm. Available for deep work, strategy sessions, and creative sprints.',
      color: 'var(--maincolorgreendark)'
    },
    {
      id: 'passion',
      label: 'The Spark',
      Icon: DeskIcons.Sparkle,
      title: 'My Passion',
      content: 'UX/UI Design. I live for the "Aha!" moment when complex problems become intuitive solutions.',
      color: 'var(--accentcolorpurple)'
    },
    {
      id: 'location',
      label: 'The Compass',
      Icon: DeskIcons.Compass,
      title: 'Location',
      content: 'Based globally via remote studio. Distance is never a barrier to great collaboration.',
      color: 'var(--primarycolor)'
    },
    {
      id: 'approach',
      label: 'The Logic',
      Icon: DeskIcons.Nodes,
      title: 'My Approach',
      content: 'Multi-disciplinary. I combine research, brand identity, and motion to build cohesive worlds.',
      color: 'var(--maincolorgreendark)'
    },
    {
      id: 'coffee',
      label: 'The Ritual',
      Icon: DeskIcons.Mug,
      title: 'Collaboration',
      content: 'I believe in transparent communication and iterative design. Let’s build something together.',
      color: 'var(--accentcolorpurple)'
    }
  ];

  return (
    <section className="curiosity-desk-root">
      <div className="desk-header-wrap">
        <h2 className="desk-display-title">Curiosity Desk</h2>
        <p className="desk-instruction">Interact with the objects to reveal my workflow.</p>
      </div>

      <div className="desk-mat">
        <div className="desk-grid-layout">
          {deskItems.map((item) => (
            <div 
              key={item.id}
              className={`desk-item-container ${activeItem === item.id ? 'state-open' : ''}`}
              onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
            >
              <div className="item-visual-trigger" style={{ '--accent-hit': item.color }}>
                <div className="svg-icon-holder">
                  <item.Icon />
                </div>
                <span className="item-label-tag">{item.label}</span>
              </div>
              
              <div className="info-reveal-card">
                <h4 className="info-reveal-heading">{item.title}</h4>
                <p className="info-reveal-text">{item.content}</p>
                <button className="info-reveal-close">Close</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuriosityDesk;