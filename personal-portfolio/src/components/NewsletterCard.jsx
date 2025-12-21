import React from 'react';
import './NewsletterCard.css';
import LightButton from './LightButton';

const NewsletterCard = () => {
    return (
        <section className="newsletter-card">
            <div className="newsletter-text">
                <h2>Stay in the Loop</h2>
                <p>Subscribe to get the latest design insights and studio updates.</p>
            </div>
            <div className="newsletter-form">
                <input type="email" placeholder="Your Email Address" className="newsletter-input" />
                <LightButton text="Subscribe" customClass="newsletter-btn-text" />
            </div>
        </section>
    );
};

export default NewsletterCard;