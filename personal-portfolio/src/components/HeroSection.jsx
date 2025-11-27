import React from 'react';
import './HeroSection.css'; 
import herosectionlogo from '../assets/herosectionlogo.png';
import OrangeButton from './OrangeButton.jsx';

const HeroSection = () => {
    return ( <>
        <section className='hero_section'>
            <section className='hero_leftcontainer'>
                <img src={herosectionlogo} alt="" />
                <p className='by_text'>by <span className='name_text'>Salma Moussa</span> </p>
            </section>
            
            <section className='hero_rightsection'>
                <section className='herosection_topright'>
                    <p className='intro_text'>I am a <span className='heroheader'>UX/UI Designer based in Egypt</span></p>
                    <p className='intro_text'>I have a multi-disciplinary background in design and am especially interested in designing digital products and experiences.</p>
                </section>

                <OrangeButton buttontext='Get in Touch'/>
            </section>
        </section>
    </> );
}
 
export default HeroSection;