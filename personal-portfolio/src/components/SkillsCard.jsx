import React from 'react';
import './SkillsCard.css';


const SkillsCard = (props) => {
    return ( 
        <div className='card'>
                <section className="cardSectionTop">
                    <img src={props.skillImg} alt={props.imageAlt} />
                    <section className='cardheadingscont'>
                        <p className='skillName'>{props.skillsName}</p>
                        <p className='skillDuration'>{props.skillYears}</p>
                    </section>
                </section>
                <p className='skillDescription'>{props.skillDesc}</p>
        </div>
     );
}
 
export default SkillsCard;