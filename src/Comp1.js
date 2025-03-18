import React from 'react';
import Comp2 from './Comp2'

function Comp1(props) {
    return (
        <div>
            <h2>Title: {props.title} </h2>
            <p>Description: {props.description} </p> 

            <Comp2 title3 = 'The Power of Now'
            description3 = 'A spiritual exploration of mindfulness and living in the present moment.'
            title4 = 'The Psychology of Money'
            description4 = 'Insights into how emotions and behavior influence financial decisions.'/>       
        </div>        
    )
}

export default Comp1