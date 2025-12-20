import React from 'react';
import './ServiceCard.css';
import LightButton from './LightButton';

const ServiceCard = ({ title, icon }) => {
    return (
        <div className="service-card">
            <h3 className="service-card-title">{title}</h3>
            <div className="service-icon-wrapper">
                {icon}
            </div>
            <LightButton 
                text="More Details" 
                customClass="service-purple-text" 
            />
        </div>
    );
};

export default ServiceCard;