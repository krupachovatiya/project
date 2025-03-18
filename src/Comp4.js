import React from "react";

function Comp4(props) {
    props= {title7:'hehehe', description7:'changed'}
    return (
        <div>
            <h2>Title: {props.title7}</h2>
            <p>Description: {props.description7}</p> 

            <h2>Title: {props.title8}</h2>
            <p>Description: {props.description8}</p>    
        </div>
    )
}

export default Comp4