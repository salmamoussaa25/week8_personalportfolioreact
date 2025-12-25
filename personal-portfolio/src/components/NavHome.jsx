import React from 'react';
import MenuButton from '../components/MenuButton';
import LanguageAr from './LanguageAr';
import './NavHome.css'

const NavHome = () => {
    return ( 
    <>
    <nav>
        <section className='menubuttonscont'>
            <MenuButton title="Home" to="/" />
            <MenuButton title="About" to="/about" />
            <MenuButton title="Services" to="/services" />
            <MenuButton title="Projects" to="/categories" />
            <MenuButton title="Blog" to="/blog" />
            <MenuButton title="Contact" to="/contact" />
        </section>
        <LanguageAr title="عربي"/>
    </nav>
    

    </> );
}
 
export default NavHome;