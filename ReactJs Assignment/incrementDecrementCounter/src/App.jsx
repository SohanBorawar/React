import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Increment & Decrement Counter</h1>
      </div>
      <h1>Vite + React</h1>
      <h2><b>Count is {count}</b></h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>decrement</button>

      </div>
    </>
  )
}

export default App
