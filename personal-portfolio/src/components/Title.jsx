import React from 'react';
import './Title.css';

const Title = (props) => {
    return ( 
        <>
        <h1 className='titleText'>{props.sectionTitle}</h1>
        </>
     );
}
 
export default Title;