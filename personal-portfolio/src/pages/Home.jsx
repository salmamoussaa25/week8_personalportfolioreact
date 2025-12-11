import React from 'react';
import NavHome from '../components/NavHome'
import HeroSection from '../components/HeroSection';
import MyApproach from '../components/MyApproach';

const Home = () => {
    return ( 
    <>
        <section className='homepagecont'>
            <NavHome />
            <HeroSection />
            <MyApproach />
            
        </section>
        
    </> );
}
 
export default Home;