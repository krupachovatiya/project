import React from "react";
import Comp4 from "./Comp4";

function Comp3(props) {
    return (
        <div>
            <h2>Title: {props.title5}</h2>
            <p>Description: {props.description5}</p>

            <h2>Title: {props.title6}</h2>
            <p>Description: {props.description6}</p>

            <Comp4 title7 = 'Sapiens'
            description7 = 'A fascinating history of humankind from the Stone Age to modern civilization.'
            title8 = 'Steve Jobs'
            description8 = 'A biography of Apple’s visionary founder, based on exclusive interviews.'/>
        </div>
    )
}

export default Comp3