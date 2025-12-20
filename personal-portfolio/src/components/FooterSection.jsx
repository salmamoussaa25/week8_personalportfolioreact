import React from 'react';
import './FooterSection.css';
import FooterTitle from './FooterTitle';
import FooterLink from './FooterLink';
import footericon from '../assets/footericon.png'

const Footer = () => {
    const siteLinks = ["Home", "About Me", "Blog", "Services", "Projects", "Contact"];
    const services = ["UX/UI Design", "Branding & Identity Design", "Web Design", "Graphic Design", "See More"];
    const contacts = ["Facebook", "LinkedIn", "Instagram", "GitHub", "UpWork", "YouTube", "Dribbble", "Behance"];

    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-logo-section">
                    <img src={footericon} alt="footer logo beige" />
                </div>


                <div className="footer-links-grid">
                    <div className="footer-column">
                        <FooterTitle titleText="Site Links" />
                        <nav className="link-group">
                            {siteLinks.map(link => <FooterLink key={link} linkText={link} />)}
                        </nav>
                    </div>

                    <div className="footer-column">
                        <FooterTitle titleText="Services" />
                        <nav className="link-group">
                            {services.map(link => <FooterLink key={link} linkText={link} />)}
                        </nav>
                    </div>

                    <div className="footer-column">
                        <FooterTitle titleText="Contacts" />
                        <nav className="link-group">
                            {contacts.map(link => <FooterLink key={link} linkText={link} />)}
                        </nav>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Salma Moussa. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;