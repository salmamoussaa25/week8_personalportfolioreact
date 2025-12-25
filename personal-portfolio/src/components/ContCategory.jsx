import React from 'react';
import './ContCategory.css';
import { FiArrowRight } from 'react-icons/fi';

const ContCategory = ({ categoryName, description, tags = [], projects = [], linkTo = "#" }) => {
  return (
    <div className="cont-category">
      <div className="category-text-content">
        <h2 className="category-title-main">{categoryName}</h2>
        <p className="category-description-text">{description}</p>
        
        <div className="category-tags-wrapper">
          {tags.map((tag, i) => (
            <span key={i} className="skill-tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="horizontal-scroll-container">
        <div className="scroll-track">
          {projects.length > 0 ? (
            projects.map((proj, i) => (
              <div key={i} className="project-thumb-card">
                 <img src={proj.thumbnail} alt={proj.name} />
                 <div className="thumb-overlay"><span>{proj.name}</span></div>
              </div>
            ))
          ) : (
            <div className="coming-soon-card">Projects coming soon...</div>
          )}
          
          <a href={linkTo} className="category-arrow-link">
            <div className="arrow-icon-circle">
              <FiArrowRight />
            </div>
            <span className="arrow-label">View Project List</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContCategory;