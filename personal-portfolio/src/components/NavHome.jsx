import React from 'react';
import MenuButton from '../components/MenuButton';
import LanguageAr from './LanguageAr';
import './NavHome.css'

const NavHome = () => {
    return ( 
    <>
    <nav>
        <section className='menubuttonscont'>
        <MenuButton title="My Approach" />
        <MenuButton title="Latest Projects" />
        <MenuButton title="Skills" />
        <MenuButton title="Experience" />
        <MenuButton title="Blog" />
        <MenuButton title="Services" />
        </section>
        <LanguageAr title="عربي"/>
    </nav>
    
    
    </> );
}
 
export default NavHome;