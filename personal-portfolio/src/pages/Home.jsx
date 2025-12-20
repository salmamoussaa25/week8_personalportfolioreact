import React from 'react';
import NavHome from '../components/NavHome'
import HeroSection from '../components/HeroSection';
import MyApproach from '../components/MyApproach';
import SkillsSection from '../components/SkillsSection';
import LatestProject from '../components/LatestProject';

const Home = () => {
    return ( 
    <>
        <section className='homepagecont'>
            <NavHome />
            <HeroSection />
            <MyApproach />
            <SkillsSection />
            <LatestProject />
        </section>
        
    </> );
}
 
export default Home;