import './App.css'
import Taili from './taili'
import { Outputio } from './Outputio'
import { ExtraButton } from './ExtraButton'
import { Card } from './Card'
import SideEffect from './SideEffects'
import ListsAndKeys from './Lists&Keys'
import ControlledInput from './ControlledInput'
import { useState } from 'react'
import { CountContext } from './context/CountContext'
import Hookies from './Hookies'
function App() {
  const extraUI = <p>Hi I'm added a jsx only</p>
  let isLogin;
  const [count, setCount] = useState(2);
  return (
    <>
    {/* <CountContext.Provider value={{count, setCount}}>
       <ExtraButton/>
    </CountContext.Provider> */}
    <Hookies/>
    {/* <ControlledInput/> */}
    {/* <SideEffect/> */}
    {/* <ListsAndKeys/> */}
    {/* <ExtraButton/> */}
    {/* <ExtraButton/>
    <Taili shoename = "Nike AirMax 2" price = "$649"/>
    <Taili shoename = "Nike Joyride 3" />
    {/* <Outputio Nameuse = "Nike Airmax v4"/> */}
    {/* <Card AboutMacbook = "Macbook M1" buttontext="Read"/>
    <Card AboutMacbook = "Macbook M2" buttontext="Visit"/>
    <Card AboutMacbook = "Macbook Ultra" extra = {<ExtraButton/>} extraUI = {extraUI}/> */}
    {/* {isLogin && <Card/>}  */}
    </>
  )
}

export default App
