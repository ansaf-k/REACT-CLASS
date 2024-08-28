import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button>
          count is {count}
        </button><br />

        <button onClick={() => setCount((count) => count + 1)}>
          + {count}
        </button><br />

        <button onClick={() => setCount((count) => count + 1)}>
          - {count}
        </button><br />

        <button onClick={() => setCount((count) => count = 0)}>
          reset
        </button><br />
      </div>
    </>
  )
}

export default App
