import React from 'react';
import './Subtitle.css';

const Subtitle = ({ text }) => {
    return (
        <h2 className="pd-subtitle-component">
            {text}
        </h2>
    );
};

export default Subtitle;