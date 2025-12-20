import React from 'react';
import { Helmet } from "react-helmet";
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
    <Helmet>
        <title>About</title>
        <meta name="description" content="This is the about page" />
        <meta property="og:title" content="About Us" />
        <meta property="og:image" content="/images/about.png" />
      </Helmet>
      
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