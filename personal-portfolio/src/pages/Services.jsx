import React from "react";
import "./Services.css";
import NavBar from "../components/NavBar";
import NewsletterCard from "../components/NewsletterCard";
import FooterSection from "../components/NewsletterCard";

const Services = () => {
  
  const servicesData = [
    { id: 1, title: "UX/UI Design" },
    { id: 2, title: "3D Modeling" },
    { id: 3, title: "Graphic Design" },
    { id: 4, title: "Front-End Development" },
    { id: 5, title: "UX Research" },
    { id: 6, title: "Branding & Identity Design" },
    
    { id: 7, title: "Graphic Design" },
    { id: 8, title: "Front-End Development" },
  ];

  return (
    <>
    <NavBar />
    <section className="services-section">
      <h2 className="section-title">Services</h2>
      
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            
            <h3>{service.title}</h3>
            
            
            <div className="card-content-spacer"></div>
            
            
            <button className="details-btn">More Details</button>
          </div>
        ))}
      </div>
    </section>
    <NewsletterCard />
    <FooterSection />
        </>
  );
};

export default Services;