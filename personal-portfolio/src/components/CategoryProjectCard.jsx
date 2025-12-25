import React from 'react';
import './CategoryProjectCard.css';

const CategoryProjectCard = ({ name, thumbnail }) => (
  <div className="cat-project-card">
    <div className="cat-thumbnail-container">
      <img src={thumbnail} alt={name} />
      <div className="cat-card-overlay">
        <h3>{name}</h3>
      </div>
    </div>
  </div>
);

export default CategoryProjectCard;