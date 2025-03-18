import React, {useState, useEffect} from 'react'

const UseEffectHook = () => {
    const [add, setAdd] = useState(0)
    const [remove, setRemove] = useState(1)

    const addValue = () => {
        setAdd(add + 1)
    }

    const removeValue = () => {
        setRemove(remove - 1)
    }

    // useEffect(() => {
    //     console.log('useEffect mount')
    // })

    // useEffect(() => {
    //     console.log('useEffect mount')
    // }, [])

    // useEffect(() => {
    //     console.log('useEffect update')
    // }, [count])

    useEffect(() => {
        console.log('useEffect update')
    }, [add, remove])


  return (
    <div>
      <h1>Count</h1>
      <p>{add}</p>
      <button onClick={() => addValue()}>Add</button>

      <p>{remove}</p>
      <button onClick={() => removeValue()}>Remove</button>
    </div>
  )
}

export default UseEffectHook
