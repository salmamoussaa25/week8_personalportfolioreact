import React from 'react';
import './LightButton.css';

const LightButton = ({ text, onClick, customClass = "" }) => {
    return (
        <button className={`light-button ${customClass}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default LightButton;