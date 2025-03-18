import React, {useState, useEffect} from 'react'

const EffectTimer = () => {
    const [time, setTime] = useState(2*60)

    useEffect(() => {
        if (time <= 0) {
            return
        }

        setTimeout(() => {
            setTime(time - 1)
        }, 1000);
    }, [time])

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
      <h1>Timer</h1>
      {/* <p>{time}</p> */}
      <p>{timeFormate(time)}</p>
    </div>
  )
}

export default EffectTimer
