import React from "react";
import "./Services.css";

const Services = () => {
  // Data array matches the items in your image
  const servicesData = [
    { id: 1, title: "UX/UI Design" },
    { id: 2, title: "3D Modeling" },
    { id: 3, title: "Graphic Design" },
    { id: 4, title: "Front-End Development" },
    { id: 5, title: "UX Research" },
    { id: 6, title: "Branding & Identity Design" },
    // I noticed duplicate items in the image, so I repeated them here to match
    { id: 7, title: "Graphic Design" },
    { id: 8, title: "Front-End Development" },
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Services</h2>
      
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            {/* Title at the top */}
            <h3>{service.title}</h3>
            
            {/* Spacer allows the layout to breathe like the image */}
            <div className="card-content-spacer"></div>
            
            {/* Button at the bottom */}
            <button className="details-btn">More Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;