import {  useEffect, useRef, useState } from 'react'

export default function UseRef() {
  const [count, setCount] = useState(60)
  const timeId = useRef()
  const currentState = useRef()

  useEffect(() => {
    currentState.current = count;
  }, [count])
  
  const handleStart = () => {
    timeId.current = setInterval(() => {
     setCount(prev => prev - 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timeId.current)
  }
  console.log(count, currentState.current)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}
