import React from 'react';
import './NavBar.css';
import MenuButton from './MenuButton';
import LanguageAr from './LanguageAr';
import nav_logo from '../assets/nav_logo.png';


const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={nav_logo} alt="" />
            <div className="nav-links-container">
                <div className="nav-main-links">
                    <MenuButton title="Home" to="/" />
                    <MenuButton title="About" to="/about" />
                    <MenuButton title="Services" to="/services" />
                    <MenuButton title="Projects" to="/projects" />
                    <MenuButton title="Blog" to="/blog" />
                    <MenuButton title="Contact" to="/contact" />
                </div>
            
                <LanguageAr title="العربية" to="/ar" />
            </div>
        </nav>
    );
};

export default NavBar;