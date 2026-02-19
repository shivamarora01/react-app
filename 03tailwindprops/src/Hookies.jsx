import { useCallback, useMemo, useRef, useState } from "react";
import Callback from "./Callback";

export default function Hookies(){
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(2);
    console.log(`causing render with count ${count}`);
    const count2 = useRef(0);
    const increaseCount2 = () => {
        count2.current +=1;
    }
    const increaseOther = useCallback(() => {
        setOther(prev => prev+1);
        //setting
    },[]);
    console.log(`causing render with count ${count2}`);
    let input;
     // const [count2, setCount2] = useState(1);

    // console.log("again rendering");

    // const array = useMemo(()=>["c","y","x","a","b","m"],[]);
    //array change
    // const sortedArray = useMemo(() => {
    //     console.log("sorting the array");
    //     return [...array].sort();
    // }, [array]); 

    return(
        <>
            {/* {sortedArray.map((item) => (
                <li key={item}>{item}</li>
            ))}

            <button onClick={() => setCount(count + 1)}>
                Tap me to sort: {count}
            </button>

            <button onClick={() => setCount2(count2 + 1)}>
                Other button: {count2}
            </button> */}
            <h1>State Count: {count}</h1>
            <br />
            <button onClick={() => setCount(count + 1)}>
                Tap me to increase: {count}
            </button>
            <br />
            <br />
            <h1>Other Count: {count2.current}</h1>
            <br />
            <button onClick={() => increaseCount2()}>
                Tap me to increase: {count2.current}
            </button>
            <br />
            {/* <input ref={(el) => input = el} />
            <button onClick={() => input.focus()} /> */}
            <br/>
            <br />
            <h1>Child Component</h1>
            <Callback other = {other} increaseOther={increaseOther}/>
        </>
    )
}
