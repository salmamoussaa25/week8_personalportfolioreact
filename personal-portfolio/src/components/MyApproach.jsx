import React from 'react';
import './MyApproach.css';
import Title from './Title';
import CardOne from './CardOne';


const MyApproach = () => {
    return ( 
        <>
           <div className='myapproachsectioncont'>
                <Title sectionTitle="My Approach as a Multi-Disciplinary UX/UI Designer"/>
                <CardOne />
           </div>
        </>
     );
}
 
export default MyApproach;