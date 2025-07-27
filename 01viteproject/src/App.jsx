import Chai from "./chai"
import Coffee from "./coffee"
import ExpD from "./expDefault"
import { Num1 } from "./exp"
import { Num2 } from "./exp"
function App() {
  return (
    //<> iske bich m saara content aayega </>
    //kyuki only one tag can be exported
    <>
    <Chai/>
    <Coffee/>
    <ExpD/>
    <Num1/>
    <Num2/>
    <h4>But you can call me Tea</h4>
    <h2>fragment used for one parental output</h2>
    </>
  )
}

export default App
