import { useState } from 'react'
import './App.css'

function App() {
   clr = "red"

  return (
    <>
    <div>
    <h> my favourite color is {clr} </h>
    </div>
    <div>
    <button
    onClick={()=> clr("Blue")}>
      Blue
    </button>
    <button
    onClick={()=>  clr("Green")}>
    Green</button>
    <button
    onClick={()=> clr("Black")}>
    Black</button>
    </div>
    </>
  )
}

export default App
