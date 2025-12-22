import React from 'react';
import './DigitalGarden.css';

const DigitalGarden = () => {
  // Custom Line-Art SVGs for the Botanical Pods
  const GardenIcons = {
    Book: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 6h10M8 10h10" opacity="0.5" />
      </svg>
    ),
    Pen: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.5 1.5" />
      </svg>
    ),
    Search: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8a3 3 0 0 0-3 3" opacity="0.5" />
      </svg>
    ),
    Chef: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 13.8V4a2 2 0 1 1 4 0v9.8" />
        <path d="M18 13.8V4a2 2 0 1 0-4 0v9.8" />
        <path d="M3 15h18l-2 5a2 2 0 0 1-2 1H7a2 2 0 0 1-2-1l-2-5Z" />
      </svg>
    ),
    Journal: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 2v20M5 6h4M5 10h4M5 14h4" />
      </svg>
    ),
    Stars: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3L2 2M22 2l-3 1M2 22l3-1M19 21l3 1" opacity="0.6" />
      </svg>
    )
  };

  const gardenItems = [
    { id: 1, Icon: GardenIcons.Book, category: "Reading", title: "The Bear & The Nightingale", status: "Lost in the Russian wild" },
    { id: 2, Icon: GardenIcons.Pen, category: "Crafting", title: "Graphic Design", status: "Refining visual metaphors" },
    { id: 3, Icon: GardenIcons.Search, category: "Exploring", title: "Research Skills", status: "Deep diving into user psyche" },
    { id: 4, Icon: GardenIcons.Chef, category: "Observing", title: "Culinary Documentaries", status: "Learning the art of prep" },
    { id: 5, Icon: GardenIcons.Journal, category: "Designing", title: "Notebook Design", status: "Exploring tactile UI" },
    { id: 6, Icon: GardenIcons.Stars, category: "Collaborating", title: "Brand Identity", status: "Crafting 2 local legacies" }
  ];

  return (
    <section className="garden-root-container">
      <div className="garden-floating-particles"></div>
      
      <header className="garden-intro-header">
        <h2 className="garden-display-title">Digital Garden</h2>
        <p className="garden-description-text">A collection of things I am currently nurturing and admiring.</p>
      </header>

      <div className="garden-pods-grid">
        {gardenItems.map((item) => (
          <div key={item.id} className="garden-bloom-card">
            <div className="card-top-info">
              <div className="garden-icon-wrapper">
                <item.Icon />
              </div>
              <span className="garden-category-label">{item.category}</span>
              <h3 className="garden-item-title">{item.title}</h3>
            </div>
            
            <div className="card-hidden-growth">
              <p className="garden-status-note">{item.status}</p>
              <div className="growth-tracker-bg">
                <div className="growth-tracker-fill"></div>
              </div>
            </div>
            
            <div className="garden-card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalGarden;