import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardTwo } from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CardTwo/>
    </>
  )
}

export default App
