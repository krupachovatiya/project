import React, {useState} from "react";

const HideShow = () => {
    const [state, setState] = useState(true)
    return (
        <div>
            {
                state ? <h1>React</h1> : null
            }
            {/* <button onClick={() => setState(false)}>Hide</button>
            <button onClick={() => setState(true)}>Show</button> */}
            <button onClick={() => setState(!state)}>Toggle</button>
        </div>
    )
}

export default HideShow