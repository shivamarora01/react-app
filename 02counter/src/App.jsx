import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10)
  const addon = () => {
    setCount(count+1);
  }
  const removeon = () => {
    setCount(count-1);
  }

  return (
    <>
    <h1>I am Counter React</h1>
    <h2>Count Number : {count} </h2>
    <br></br>
    <button onClick={addon}> Increase Count : {count} </button>
    <br></br>
    <h2>     </h2>
    <button onClick={removeon}>Decrease Count : {count}</button>
    </>
  )
}

export default App
