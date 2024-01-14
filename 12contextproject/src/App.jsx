import { useEffect, useState } from 'react'
import './App.css'
import Card from './component/Card'
import Bttn from './component/Bttn'
import {themeProvider} from './context/theme'

function App() {

  const[Mode,setMode] = useState("light")

  const lightMode=()=>{
    setMode("light")
  }
  const darkMode=()=>{
    setMode("dark")
  }

  //actual change jo krega 
  //pure js 
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add("Mode")
  },[Mode])

  return (
    <themeProvider value = {{Mode,lightMode,darkMode}}> 
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Bttn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

    </themeProvider>
  )
}

export default App
