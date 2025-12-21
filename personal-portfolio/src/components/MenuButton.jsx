import React from 'react';
import { Link } from 'react-router-dom';
import './MenuButton.css';

const MenuButton = (props) => {
    return (
        <Link to={props.to} className="menu-link-wrapper">
            <button className='menu_text'>{props.title}</button>
        </Link>
    );
}
 
export default MenuButton;