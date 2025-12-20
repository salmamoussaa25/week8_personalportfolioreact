import React from 'react';
import './LatestProject.css';
import projectScreenshot from '../assets/latestprojecticon.png';

const LatestProject = () => {
    return (
        <section className="latest-project-section">
            <h2 className="project-heading">Latest UX/UI Design Project</h2>
            <div className="project-content-container">
                <div className="text-content">
                    <h3 className="project-title">
                        Wildlife Reimagined: A Futuristic Digital Window into Giza Zoo
                    </h3>
                    <p className="project-description">
                        “Wildlife Reimagined” is a UX/UI design project that reimagines the Giza Zoo as an immersive digital experience. The responsive bilingual website combines interactive storytelling, AI-enhanced media, and XR integration to engage users with Egypt’s wildlife and conservation efforts in new, meaningful ways. Through detailed wireframes, a cohesive design system, and high-fidelity prototyping, I focused on creating a seamless user journey that balances education, exploration, and visual impact.
                    </p>
                    <a href="#" className="project-button">
                        See This Project
                    </a>
                </div>
                <div className="image-content">
                    <div className="laptop-mockup">
                        <img 
                            src={projectScreenshot} 
                            alt="Wildlife Reimagined project on a laptop" 
                            className="laptop-screen-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProject;