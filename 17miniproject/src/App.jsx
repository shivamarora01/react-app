import { useState } from 'react'
import './App.css'
import Login from './compo/Login'
import Profile from './compo/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
