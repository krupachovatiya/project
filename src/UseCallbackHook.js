import React, { useCallback, useState } from 'react'

const UseCallbackHook = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)

  const incCount = useCallback(() => {
    console.log('Count', count)
    setCount(count + 1)
  }, [count])

  const incNumber = useCallback(() => {
    console.log('Number', number);
    setNumber(number + 1)
  }, [number])


  return (
    <div>
      <h2>UseCallback Hook</h2>
      <p>Count: {count}</p>
      <button onClick={incCount}>Increment Count</button>
      <p>Number: {number}</p>
      <button onClick={incNumber}>Increment Number</button>
    </div>
  )
}

export default UseCallbackHook
