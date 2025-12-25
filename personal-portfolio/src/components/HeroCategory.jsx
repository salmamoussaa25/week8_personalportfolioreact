import React from 'react';
import './HeroCategory.css';

const HeroCategory = ({ title, description }) => {
  return (
    <section className="hero-category">
      <div className="hero-category-container">
        <h1 className="hero-category-title">{title}</h1>
        <div className="hero-category-divider"></div>
        <p className="hero-category-description">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroCategory;