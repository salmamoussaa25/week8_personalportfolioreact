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
        <title>Sal's Studio - Homepage</title>
        <meta name="description" content="I’m Salma Moussa. I am a UX/UI Designer based in Egypt. I have a muti-disciplinary background in design. I am especially interested in designing digital experiences." />
        <meta property="og:title" content="Salma Moussa | Multi-disciplinary UX/UI Designer" />
        <meta property="og:image" content="../assets/herosectionlogo.png" />
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