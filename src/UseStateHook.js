import React, {useState } from 'react'

const UseStateHook = () => {

    const [count, setCount] = useState(0)

    const addValue = () => {
        setCount(count + 1)
    }

    const removeValue = () => {
        setCount(count - 1)
    }

    
    return (
        <div>
            <h1>react</h1>
            <h2>{count}</h2>
            <button onClick={()=> {addValue()}}>Add</button>
            <button onClick={() => {removeValue()}}>Remove</button>
        </div>
    )
}

export default UseStateHook