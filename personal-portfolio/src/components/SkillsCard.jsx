import React from 'react';
import './SkillsCard.css';


const SkillsCard = (props) => {
    return ( 
        <div className='card'>
                <section className="cardSectionTop">
                    <img src={props.skillImg} alt={props.imageAlt} />
                    <section className='cardHeadingsCont'>
                        <p className='skillName'>{props.skillsName}</p>
                        <p className='skillDuration'>{props.skillYears}</p>
                    </section>
                </section>
        </div>
     );
}
 
export default SkillsCard;