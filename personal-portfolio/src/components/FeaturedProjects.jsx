import React from 'react';
import './FeaturedProjects.css';

// NOTE: Replace these placeholder URLs with your actual image paths.
// The placeholders are sized roughly to match the aspect ratios in your design.

const image1TopLeft = "https://placehold.co/600x400/E66249/FCF2D9?text=Dual+Screens+Mockup";
const image2LargeRight = "https://placehold.co/800x600/023C40/FCF2D9?text=Large+Laptop+Mockup";
const image3MiddleLeft = "https://placehold.co/600x350/E66249/FCF2D9?text=Wide+Screen+Mockup";
const image4BottomLeft = "https://placehold.co/600x450/023C40/FCF2D9?text=Bottom+Laptop+Left";
const image5BottomRight = "https://placehold.co/600x450/E66249/FCF2D9?text=Bottom+Laptop+Right";


const FeaturedProjects = () => {
    return (
        <section className="featured-projects-section" id="projects">
            <h2 className="section-title">Featured Projects</h2>

            <div className="projects-grid">
                {/* Item 1: Top Left Dual Screens */}
                <div className="grid-item-1">
                    <img src={image1TopLeft} alt="Project 1 Dual Screens" className="project-img" />
                </div>

                {/* Item 2: Large Laptop Right */}
                <div className="grid-item-2">
                    <img src={image2LargeRight} alt="Project 2 Large Laptop" className="project-img" />
                </div>

                {/* Item 3: Middle Left Screen */}
                <div className="grid-item-3">
                    <img src={image3MiddleLeft} alt="Project 3 Wide Screen" className="project-img" />
                </div>

                {/* Item 4: Bottom Left Laptop */}
                <div className="grid-item-4">
                    <img src={image4BottomLeft} alt="Project 4 Laptop" className="project-img" />
                </div>

                {/* Item 5: Bottom Right Laptop */}
                <div className="grid-item-5">
                    <img src={image5BottomRight} alt="Project 5 Laptop" className="project-img" />
                </div>
            </div>

            <div className="see-more-btn-container">
                <button className="see-more-btn">See More</button>
            </div>
        </section>
    );
};

export default FeaturedProjects;