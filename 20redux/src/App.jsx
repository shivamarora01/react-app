import { useState } from 'react'
import './App.css'
import AddTodo2 from './components/AddTodo2'
import Todos2 from './components/Todos2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo2/>
      <Todos2/>
    </>
  )
}

export default App
