import React, { useState } from 'react'
import classes from './Counter.module.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className={classes.counter}>
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={decrement} className={classes.minus}>Decrement</button>
        <button onClick={increment} className={classes.plus}>Increment</button>
      </div>
    </div>
  )
}

export { Counter }