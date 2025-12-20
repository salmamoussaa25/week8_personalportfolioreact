import React from 'react';
import NavHome from '../components/NavHome'
import HeroSection from '../components/HeroSection';
import MyApproach from '../components/MyApproach';
import SkillsSection from '../components/SkillsSection';
import LatestProject from '../components/LatestProject';
import ServicesSection from '../components/ServicesSection';
import FooterSection from '../components/FooterSection';

const Home = () => {
    return ( 
    <>
        <section className='homepagecont'>
            <NavHome />
            <HeroSection />
            <MyApproach />
            <SkillsSection />
            <LatestProject />
            <ServicesSection />
            <FooterSection />
        </section>
        
    </> );
}
 
export default Home;