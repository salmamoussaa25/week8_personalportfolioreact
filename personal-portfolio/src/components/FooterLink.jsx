import React from 'react';
import './FooterLink.css';

const FooterLink = ({ linkText, url = "#" }) => {
    return (
        <a href={url} className="footer-nav-link">
            {linkText}
        </a>
    );
};

export default FooterLink;