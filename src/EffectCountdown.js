import React, {useState, useEffect} from 'react'

const EffectCountdown = () => {
    const maxTime = 10 * 60
    const [time, setTime] = useState(0)

    useEffect(() => {
        if (time >= maxTime) {
            return
        }

        setTimeout(() => {
            console.log('setTimeout')
            setTime(time + 1)
        }, 1000);
    })

    const timeFormate = (seconds) => {
        let min = Math.floor(seconds / 60)
        let sec = seconds % 60

        if (min < 10) {
            min = '0'+ min
        }

        if (sec < 10) {
            sec = '0'+ sec
        }

        return `${min} : ${sec}`
    }

  return (
    <div>
        <h2>Countdown</h2>
        <h3>{timeFormate(time)}</h3>
    </div>
  )
}

export default EffectCountdown
