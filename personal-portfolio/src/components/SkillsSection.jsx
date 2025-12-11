import React from 'react';
import './SkillsSection.css';
import Title from './Title';
import SkillsCard from './SkillsCard';

const SkillsSection = () => {
    return ( 
        <div className='skillsSection'>
        <Title sectionTitle="Skills" />
        <section className='cardsCont'>
            <section className='contRow'>
                <SkillsCard /> 
                <SkillsCard /> 
                <SkillsCard /> 
            </section>
        </section>
        </div>
     );
}
 
export default SkillsSection;