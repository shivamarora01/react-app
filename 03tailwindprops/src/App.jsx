import './App.css'
import Taili from './taili'
import { Outputio } from './Outputio'
import { Card } from './Card'
function App() {

  return (
    <>
    <Taili shoename = "Nike AirMax 2" price = "$649"/>
    <Taili shoename = "Nike Joyride 3" />
    {/* <Outputio Nameuse = "Nike Airmax v4"/> */}
    <Card AboutMacbook = "Macbook M1" buttontext="Read"/>
    <Card AboutMacbook = "Macbook M2" buttontext="Visit"/>
    <Card AboutMacbook = "Macbook Ultra" />
    </>
  )
}

export default App
