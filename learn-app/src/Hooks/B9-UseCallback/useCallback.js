import React, { useCallback, useState } from 'react'
import Content from './content'

export default function UseCallback() {

  const [count, setCount] = useState(0);

  const handleIncreace = useCallback(() => {
    setCount(prev => prev + 1);
  }, [])

  return (
    <div>
      <Content onIncreace={handleIncreace} />
      <h2>{count}</h2>
    </div>
  )
}
