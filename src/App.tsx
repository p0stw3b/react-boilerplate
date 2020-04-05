import React from "react"
import { Counter } from "~features/counter"

export const App = () => (
  <div className="App">
    <header className="App-header">
      <Counter />
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
