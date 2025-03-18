import React from "react";
import Comp3 from "./Comp3";

function Comp2(props) {
    return (
        <div>
            <h2>Title: {props.title3}</h2>
            <p>Description: {props.description3}</p>

            <h2>Title: {props.title4}</h2>
            <p>Description: {props.description4}</p>

            <Comp3 title5 = 'The Lean Startup'
            description5 = 'A revolutionary approach to building businesses by testing ideas and adapting quickly.'
            title6 = 'Good to Great'
            description6 = 'Analyzing why some companies succeed and others fail.'/>            
        </div>
    )
}

export default Comp2