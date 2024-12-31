import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'

// Create a timer that can be started and stopped (https://reactpractice.dev/exercise/create-a-timer-that-can-be-started-and-stopped/)

const Timer = () => {
  const [timer, setTimer] = useState(300)
  const [timerId, setTimerId] = useState<NodeJS.Timeout>(
    null as any as NodeJS.Timeout,
  )
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  // useEffect(()=>{
  //     let timerId = setInterval(()=>updateTimer(timerId),1000)
  //     return()=>{
  //         clearInterval(timerId)
  //     }
  // },[])

  const updateTimer = (timerId: NodeJS.Timeout) => {
    setTimer((prevTimer) => {
      if (prevTimer === 0) {
        clearInterval(timerId)
        return 300
      } else {
        return prevTimer - 1
      }
    })
    setTimerId(timerId)
  }

  const handleStart = () => {
    let timerId = setInterval(() => updateTimer(timerId), 1000)
    setIsTimerRunning(true)
  }

  const handleStop = () => {
    clearInterval(timerId)
    setIsTimerRunning(false)
  }

  const handleReset = () => {
    clearInterval(timerId)
    setTimerId(null as any as NodeJS.Timeout)
    setTimer(300)
    setIsTimerRunning(false)
  }

  const formatTimer = () => {
    let tmpTimer = timer
    const min = Math.floor(tmpTimer / 60)
    const sec = tmpTimer % 60

    return `${min.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`
  }
  return (
    <>
      <p>{formatTimer()}</p>
      <div>
        <Button onClick={handleStart} disabled={isTimerRunning}>
          Start
        </Button>
        <Button onClick={handleStop} disabled={!isTimerRunning}>
          Stop
        </Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </>
  )
}

export default Timer
