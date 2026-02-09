import './App.css'
import Taili from './taili'
import { Outputio } from './Outputio'
import { ExtraButton } from './ExtraButton'
import { Card } from './Card'
import SideEffect from './SideEffects'
import ListsAndKeys from './Lists&Keys'
import ControlledInput from './ControlledInput'
function App() {
  const extraUI = <p>Hi I'm added a jsx only</p>
  let isLogin;
  return (
    <>
    <ControlledInput/>
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
