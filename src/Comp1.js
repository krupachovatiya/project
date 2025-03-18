import React from 'react';
import Comp2 from './Comp2'

function Comp1(props) {
    return (
        <div>
            <h2>Title: {props.title} </h2>
            <p>Description: {props.description} </p> 

            <Comp2 title3 = 'The Power of Now is is '
            description3 = 'A spiritual exploration of mindfulness and living in the present moment.'
            title4 = 'The Psychology of Money'
            description4 = 'Insights into how emotions and behavior influence financial decisions.'
            desc_1 = "this is new branch " 
            desc_2 = "changes in the description"/>  
                 
        </div>        
    )
}

export default Comp1