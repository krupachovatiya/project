import React, { useEffect, useState } from 'react'

const SessionStorage = () => {

    const [time, setTime] = useState(20)

    useEffect(() => {
        const savedTime = sessionStorage.getItem('countdown')
        if (savedTime) {
            setTime(Number(savedTime))
        }
    }, [])

    useEffect(() => {
        if (time <= 0) {
            return
        }

        sessionStorage.setItem('countdown', time)

        const timer = setTimeout(() => {
            setTime(time - 1)
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [time])

  return (
    <div>
      <h2>Session Storage</h2>
      <p>Countdown: {time} seconds</p>
    </div>
  )
}

export default SessionStorage
