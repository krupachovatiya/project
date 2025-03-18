import React, { useRef } from "react";

const UseRefHook = () => {
    const refInput = useRef(null)

    const handleClick = () => {
        refInput.current.focus()
        refInput.current.style.color = 'blue'
    }

    return (
        <div>
            <h2>UserRef Hook</h2>
            <input type='text' ref={refInput}/>
            <button onClick={handleClick}>Update</button>
        </div>
    )

}

export default UseRefHook