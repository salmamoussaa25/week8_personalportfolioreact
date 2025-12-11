import React from 'react';
import './MyApproach.css';
import Title from './Title';
import CardOne from './CardOne';
import OrangeButton from './OrangeButton';


const MyApproach = () => {
    return ( 
        <>
           <div className='myapproachsectioncont'>
                <Title sectionTitle="My Approach as a Multi-Disciplinary UX/UI Designer"/>
                <CardOne />
                <OrangeButton buttontext='More About Me' />
           </div>
        </>
     );
}
 
export default MyApproach;