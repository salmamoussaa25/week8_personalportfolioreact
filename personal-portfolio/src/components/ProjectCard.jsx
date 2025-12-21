import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, year, description }) => {
    return (
        <div className="horizontal-project-card">
            <div className="project-image-side">
                <img src={image} alt={title} className="project-mockup" />
            </div>
            <div className="project-text-side">
                <h3 className="project-card-heading">{title}</h3>
                <span className="project-card-year">{year}</span>
                <p className="project-card-desc">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;