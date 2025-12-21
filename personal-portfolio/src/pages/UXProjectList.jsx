import React from 'react';
import './UXProjectList.css';
import NavBar from '../components/NavBar';
import Title from '../components/Title'; 
import ProjectCard from '../components/ProjectCard';
import NewsletterCard from '../components/NewsletterCard';
import Footer from '../components/FooterSection';
import ux_mockup1 from '../assets/ux_mockup1.png';
import ux_mockup2 from '../assets/ux_mockup2.png';
import ux_mockup3 from '../assets/ux_mockup3.png'

const CategoryList = () => {
    const projects = [
        {
            id: 1,
            title: "A Futuristic Digital Window into Giza Zoo",
            year: "2025",
            description: "“Wildlife Reimagined” is a UX/UI design project that reimagines the Giza Zoo as an immersive digital experience...",
            image: {ux_mockup1}
        },
        {
            id: 2,
            title: "Beit Madmoun – Home Repair and Maintenance Platform",
            year: "2024",
            description: "Beit Madmoun is a UX/UI design project that simplifies home repair and maintenance services through a clear, trustworthy digital experience.",
            image: {ux_mockup2}
        },
        {
            id: 3,
            title: "Sekem Rebranding – Sustainable Innovation in Egypt",
            year: "2024",
            description: "This UX/UI design project reimagines Sekem’s digital presence through a modern, sustainability-driven website.",
            image: {ux_mockup3}
        }
    ];

    return (
        <div className="category-view">
            <NavBar />
            
            <main className="category-main-content">
                <nav className="breadcrumbs-pill-nav">
                    <span>Home</span>
                    <span className="sep">/</span>
                    <span>Projects</span>
                    <span className="sep">/</span>
                    <span className="active-pill">UX/UI Design</span>
                </nav>

                <Title sectionTitle="UX/UI DESIGN" />

                <div className="projects-vertical-list">
                    {projects.map(p => (
                        <ProjectCard key={p.id} {...p} />
                    ))}
                </div>

                <NewsletterCard />
            </main>

            <Footer />
        </div>
    );
};

export default CategoryList;