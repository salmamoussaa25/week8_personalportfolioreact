import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import FooterSection from '../components/FooterSection';
import NewsletterCard from '../components/NewsletterCard';
import './Contact.css';
import { FiMail, FiLinkedin, FiInstagram, FiArrowRight } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
  };

  return (
    <>
        <NavBar />
    <section className="contact-page">
      <div className="contact-container">
        
        {/* Left Side: Info */}
        <div className="contact-info-section">
          <h1 className="contact-title">Let's grow something <span className="serif-italic">together.</span></h1>
          <p className="contact-intro">
            Whether you have a project in mind, a question about my work, or just want to talk about 3D modeling and UX—my inbox is always open.
          </p>

          <div className="contact-methods">
            <a href="mailto:hello@salstudio.com" className="method-item">
              <div className="method-icon"><FiMail /></div>
              <span>hello@salstudio.com</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="method-item">
              <div className="method-icon"><FiLinkedin /></div>
              <span>LinkedIn</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="method-item">
              <div className="method-icon"><FiInstagram /></div>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="What's your name?" 
                value={formData.name}
                onChange={handleChange}
                required 
                />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="How can I reach you?" 
                value={formData.email}
                onChange={handleChange}
                required 
                />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Tell me about your project..." 
                value={formData.message}
                onChange={handleChange}
                required
                ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <FiArrowRight />
            </button>
          </form>
        </div>

      </div>
    </section>
      <NewsletterCard />
      <FooterSection />
                </>
  );
};

export default Contact;