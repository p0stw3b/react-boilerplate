import React, { useCallback } from "react"

// import { createStore, createApi } from "effector-logger"
import { createStore, createApi } from "effector"
import { useStore } from "effector-react"

const counter = createStore(0)

const { increment, decrement } = createApi(counter, {
  increment: (state) => state + 1,
  decrement: (state) => state - 1,
})

const Counter = () => {
  const state = useStore(counter)

  const incrementCounter = useCallback(() => increment(), [])
  const decrementCounter = useCallback(() => decrement(), [])

  return (
    <div>
      {state}
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  )
}

export const App = () => (
  <div className="App">
    <Counter />
    <header className="App-header">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
)
