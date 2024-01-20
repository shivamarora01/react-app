import './App.css'
import Taili from './taili'
import { Outputio } from './Outputio'
import { Card } from './Card'
import { Childcmp } from './child'
import { ParentComponent } from './parent'
function App() {

  return (
    <>
    <Taili price = "$649" shoename= "Nike"/>
    <Taili />
    {/* <Outputio Nameuse = "Nike Airmax v4"/> */}
    <Card AboutMacbook = "Macbook M1" buttontext="Read"/>
    <Card AboutMacbook = "Macbook M2" buttontext="Visit"/>
    <Card AboutMacbook = "Macbook Ultra" />
    <ParentComponent/>
    </>
  )
}

export default App
