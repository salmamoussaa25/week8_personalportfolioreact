import React from 'react';
import { Link } from 'react-router-dom';
import './LanguageAr.css';

const LanguageAr = ({ title, to = "/" }) => {
    return (
        <Link to={to} className="arabic-link-wrapper">
            <button className='menu_arabicbutton'>{title}</button>
        </Link>
    );
}
 
export default LanguageAr;