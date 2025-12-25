import React from 'react';
import './UXProjectOne.css';
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import NewsletterCard from '../components/NewsletterCard';
import FooterSection from '../components/FooterSection';
import Subtitle from '../components/Subtitle'; 


const ProjectDetails = () => {
    return (
        <div className="pd-page-container">
            <NavBar />

            <main className="pd-main-layout">

                <nav className="pd-pill-breadcrumbs">
                    <span className="pd-pill-item">Home</span>
                    <span className="pd-pill-sep">/</span>
                    <span className="pd-pill-item">Latest Projects</span>
                    <span className="pd-pill-sep">/</span>
                    <span className="pd-pill-item">UX/UI Design</span>
                    <span className="pd-pill-sep">/</span>
                    <span className="pd-pill-active">Rebranding Giza Zoo</span>
                </nav>

                <Title sectionTitle="REBRANDING GIZA ZOO: A FUTURISTIC DIGITAL WINDOW INTO GIZA ZOO" />

                <section className="pd-visual-showcase">
                    <div className="pd-collage-grid">
                        <div className="pd-collage-left">
                            <div className="pd-mini-frames">
                                <img src="/assets/screen1.png" alt="UI detail" />
                                <img src="/assets/screen2.png" alt="UI detail" />
                            </div>
                            <div className="pd-banner-image">
                                <img src="/assets/narwhal-banner.png" alt="Narwhal Section" />
                            </div>
                        </div>
                        <div className="pd-collage-right">
                            <img src="/assets/main-laptop.png" alt="Main Landing Page" />
                        </div>
                    </div>
                </section>

                <section className="pd-text-sections">
                    <Subtitle text="A Futuristic Digital Window" />
                    <div className="pd-columns-wrapper">
                        <p className="pd-body-text">
                            “Wildlife Reimagined” is a UX/UI design project that reimagines the Giza Zoo as an immersive 
                            digital experience. The responsive bilingual website combines interactive storytelling, 
                            AI-enhanced media, and XR integration to engage users with Egypt’s wildlife and conservation 
                            efforts in new, meaningful ways.
                        </p>
                        <p className="pd-body-text">
                            Through detailed wireframes, a cohesive design system, and high-fidelity prototyping, 
                            I focused on creating a seamless user journey that balances education, exploration, 
                            and visual impact. The project highlights my multidisciplinary approach—merging UX 
                            research, interface design, and creative technology.
                        </p>
                    </div>

                    <Subtitle text="What Changed?" />
                    <div className="pd-split-view">
                        <div className="pd-split-image">
                            <img src="/assets/change-mockup.png" alt="Interface Comparison" />
                        </div>
                        <div className="pd-split-text">
                            <p className="pd-body-text">
                                The redesign focused on accessibility and modern aesthetics. By implementing a 
                                dark-green-to-cream palette and a clear typography hierarchy, information became 
                                more digestible for users of all ages. This transformation turned a traditional 
                                information-heavy site into a digital destination.
                            </p>
                        </div>
                    </div>
                </section>

                <NewsletterCard />
            </main>

            <FooterSection />
        </div>
    );
};

export default ProjectDetails;