import React from 'react';
import './NavBar.css';
import MenuButton from './MenuButton';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                sal’s <span>studio</span>
            </div>
            <div className="nav-links">
                <MenuButton title="Home" to="/" />
                <MenuButton title="About" to="/about" />
                <MenuButton title="Services" to="/services" />
                <MenuButton title="Projects" to="/projects" />
                <MenuButton title="Contact" to="/contact" />
            </div>
        </nav>
    );
};

export default NavBar;