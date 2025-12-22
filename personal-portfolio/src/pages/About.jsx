import React from 'react';
import { Helmet } from "react-helmet";
import NavBar from '../components/NavBar'
import AboutBio from '../components/AboutBio';
import AboutInspo from '../components/AboutInspo';
import FooterSection from '../components/FooterSection';
import CuriosityDesk from '../components/CuriosityDesk';
import HeroAbout from '../components/HeroAbout';
import NewsletterCard from '../components/NewsletterCard';
import DigitalGarden from '../components/DigitalGarden';

const About = () => {
    return ( 
    <>
    <Helmet>
        <title>Sal's Studio - Homepage</title>
        <meta name="description" content="I’m Salma Moussa. I am a UX/UI Designer based in Egypt. I have a muti-disciplinary background in design. I am especially interested in designing digital experiences." />
        <meta property="og:title" content="Salma Moussa | Multi-disciplinary UX/UI Designer" />
        <meta property="og:image" content="../assets/herosectionlogo.png" />
      </Helmet>

        <section className='homepagecont'>
            <NavBar />
            <HeroAbout />
            <AboutBio />
            <AboutInspo />
            <CuriosityDesk />
            <DigitalGarden />
            <NewsletterCard />
            <FooterSection />
        </section>
        
    </> );
}
 
export default About;