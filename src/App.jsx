import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <h2>{count}</h2>
        <div className="buttons">
          <button onClick={() => setCount((count) => count + 1)}>
            Increase
          </button>
          <button onClick={()=> setCount((count) => count - 1)}>
            Decrease
          </button>
        </div>
      </div>
    </>
  )
}

export default App
