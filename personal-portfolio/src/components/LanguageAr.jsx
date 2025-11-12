import React from 'react';
import { Link } from 'react-router-dom';
import './LanguageAr.css'

const LanguageAr = (props) => {
    return ( <>
        <Link to="/">
            <button className='menu_arabicbutton'>{props.title}</button>
        </Link>
    </> );
}
 
export default LanguageAr;