import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className={styles.title}>Child React App Created By Vite</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
