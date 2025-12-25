import React from 'react';
import './FooterSection.css';
import FooterTitle from './FooterTitle';
import FooterLink from './FooterLink';
import footericon from '../assets/footericon.png';
import { FiArrowUpRight, FiGlobe } from 'react-icons/fi';

const Footer = () => {
    const siteLinks = ["Home", "About Me", "Blog", "Services", "Projects", "Contact"];
    const services = ["UX/UI Design", "Branding & Identity Design", "Web Design", "Graphic Design", "See More"];
    const contacts = ["LinkedIn", "Instagram", "GitHub", "Behance", "Dribbble"];

    return (
        <footer className="main-footer">
            {/* Top CTA Section */}
            <div className="footer-cta-wrapper">
                <div className="footer-cta-content">
                    <h2 className="cta-headline">Have an idea? <span className="serif-italic">Let's talk.</span></h2>
                    <a href="mailto:hello@salstudio.com" className="cta-email">
                        contact@salmamoussa.com <FiArrowUpRight />
                    </a>
                </div>
                    <div className="status-indicator">
                        <div className="pulse-wrapper">
                            <span className="pulse-dot"></span>
                            <span className="pulse-ring"></span>
                        </div>
                        <span className="status-text">Available for new projects</span>
                    </div>
            </div>

            {/* Main Content Area */}
            <div className="footer-main-content">
                <div className="footer-branding">
                    <img src={footericon} alt="Sal's Studio" className="footer-logo" />
                    <div className="footer-location">
                        <FiGlobe size={16} /> <span>Based in Cairo, Egypt (GMT+2)</span>
                    </div>
                </div>

                <div className="footer-nav-grid">
                    <div className="footer-nav-col">
                        <FooterTitle titleText="Explore" />
                        <div className="nav-links">
                            {siteLinks.map(link => <FooterLink key={link} linkText={link} />)}
                        </div>
                    </div>
                    <div className="footer-nav-col">
                        <FooterTitle titleText="Expertise" />
                        <div className="nav-links">
                            {services.map(link => <FooterLink key={link} linkText={link} />)}
                        </div>
                    </div>
                    <div className="footer-nav-col">
                        <FooterTitle titleText="Connect" />
                        <div className="nav-links">
                            {contacts.map(link => <FooterLink key={link} linkText={link} />)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Legal Bottom */}
            <div className="footer-bottom-bar">
                <p className="copyright">© 2025 Sal's Studio by Salma Moussa.</p>
                <button className="top-scroll-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    Back to top ↑
                </button>
            </div>
        </footer>
    );
};

export default Footer;