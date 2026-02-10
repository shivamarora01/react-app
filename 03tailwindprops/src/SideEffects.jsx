import { useEffect, useState } from "react";

export default function SideEffect(){
    console.log("function starts 1 ...");
    const[count, setCount] = useState(1);
    console.log("function starts 2 ...");
    useEffect(() => {
        console.log("useEffect runs");
        //effect here // dom change example
        if(count<3){
                document.title = `count is ${count}`
        }
        return () => {
            console.log("cleanup runs");
            // document.title = `count is ${count}`;
            document.title = "React App";
        };
    },[
        //dependency here
        count
    ])
    return (
        <>
        <p>{count}</p>
        <button onClick={() => setCount(count+1) }></button>
        {true && console.log("JSX log")}
        </>
    )
}