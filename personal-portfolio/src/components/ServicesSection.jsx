import React from 'react';
import './ServicesSection.css';
import ServiceCard from './ServiceCard';

// SVG Icons
const UxUiIcon = () => <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>;
const ThreeDIcon = () => <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>;
const CodeIcon = () => <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;

const ServicesSection = () => {
    const services = [
        { id: 1, title: "UX/UI Design", icon: <UxUiIcon /> },
        { id: 2, title: "3D Modeling", icon: <ThreeDIcon /> },
        { id: 3, title: "Graphic Design", icon: <UxUiIcon /> },
        { id: 4, title: "Front-End Development", icon: <CodeIcon /> },
        { id: 5, title: "UX Research", icon: <UxUiIcon /> },
        { id: 6, title: "Branding & Identity Design", icon: <ThreeDIcon /> },
        { id: 7, title: "Graphic Design", icon: <UxUiIcon /> },
        { id: 8, title: "Front-End Development", icon: <CodeIcon /> }
    ];

    return (
        <section className="services-section">
            <h2 className="services-title">Services</h2>
            
            <div className="services-grid">
                {services.map(s => (
                    <ServiceCard key={s.id} title={s.title} icon={s.icon} />
                ))}
            </div>

            <div className="cv-footer">
                <a href="/my-resume" className="cv-link">Take a look at my CV &gt;</a>
            </div>
        </section>
    );
};

export default ServicesSection;