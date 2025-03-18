import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(2)

  const squaredNum = useMemo (() => {
    console.log('Count', count);
    console.log('Square Num:', number);
    return number * number
  }, [number, count])

  return (
    <div>
      <h2>UseMemo Hook</h2>
      <p>squared Number: {squaredNum}</p>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <button onClick={() => setNumber(number + 1)}>Add Number</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default UseMemoHook