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
                <SkillsCard
                    skillImg="./assets/adobeicon.png"
                    imageAlt="Adobe CC logo"
                    skillsName="Adobe CC"
                    skillYears="3 Years of Experience"
                    skillDesc="Adobe Creative Cloud has been a core part of my design process. Whether I’m designing or crafting visual identities, I use Adobe tools to bring ideas to life with precision and creativity."
                />

                <SkillsCard
                    skillImg="./assets/uxresearchicon.png"
                    imageAlt="UX Research icon"
                    skillsName="UX Research"
                    skillYears="2 Years of Experience"
                    skillDesc="UX research is the foundation of my design process. I conduct surveys, interviews, and usability tests to uncover user needs, guiding design decisions that are both meaningful and data-driven."
                />

                <SkillsCard
                    skillImg="./assets/figmaicon.png"
                    imageAlt="Figma logo"
                    skillsName="Figma"
                    skillYears="2 Years of Experience"
                    skillDesc="Figma is where most of my design ideas take shape. I use it to plan user flows, prototype interactions, and create clean, consistent UI systems that bring clarity and structure to digital experiences."
                />
            </section>
            
            <section className='contRow'>
                <SkillsCard
                    skillImg="./assets/vscodeicon.png"
                    imageAlt="VS Code logo"
                    skillsName="VS Code"
                    skillYears="2 Years of Experience"
                    skillDesc="I use Visual Studio Code to translate design into function. It helps me refine front-end layouts, experiment with responsive design, and bring prototypes to life through clean, maintainable code."
                />

                <SkillsCard
                    skillImg="./assets/blendericon.png"
                    imageAlt="Blender logo"
                    skillsName="Blender"
                    skillYears="1 Year of Experience"
                    skillDesc="Blender has allowed me to explore 3D storytelling within UX and AR design. I use it to model, texture, and render assets that enhance visual depth and interactivity across digital environments."
                />

                <SkillsCards
                    skillImg="./assets/aeroicon.png"
                    imageAlt="Adobe Aero logo"
                    skillsName="Adobe Aero"
                    skillYears="1 Year of Experience"
                    skillDesc="Adobe Aero bridges my design and AR interests. I use it to create interactive augmented reality experiences that blend physical and digital worlds, making storytelling more immersive."
                />
            </section>
        </section>
        </div>
     );
}
 
export default SkillsSection;