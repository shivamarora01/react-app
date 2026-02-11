import { useContext, useState } from "react"
import {CountContext} from '../src/context/CountContext.jsx'

//by using const, now its a arrow function
export const ExtraButton = (props) => {
    // const [count, setCount] = useState(1);
    const {count, setCount} = useContext(CountContext);
    let har = 3;
    //never change state directly when rendering, do it in a event trigger or effect
    // setCount(count => count+1);
    return (
        <>
        <p>Counting: {count}</p>
        {/* <p>Hi, I'm that extra button {props.children}</p> */}
        <button onClick={() => setCount(count+1)}>Increase count</button>
        {/* <p>{count}</p> */}
        {/* //use arrow function so that the setCount only runs on trigger, not on render, render creates infinite loop because it think states are changing */}
        {/* <button onClick={() => setCount(count+1)}>Increase count</button> */}
        </>
    )
}