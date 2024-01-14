
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const[Mode,setMode] = useState("light")

  const lightMode = () => {
    setMode("light")
  }
  const darkMode = () => {
    setMode("dark")
  }

  //actual change in theme
  //classic js
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(
      Mode
    )
  },[Mode])

  return (
    <ThemeProvider value={{Mode,lightMode,darkMode}}>
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      { /* themeBtn */}
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                    { /* Card */}
                    <Card/>
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
