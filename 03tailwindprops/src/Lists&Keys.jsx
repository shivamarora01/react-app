import {useState } from "react";

const data = [{id:"1",Name: "Shivam"},{id: "2", Name:"Varun"}];

export default function ListsAndKeys(){
    console.log("function runs");
    const[count, setCount] = useState(1);
    return (
        <>
        {
            data.map((power, index) => (
                <ul key={power.id}>{power.Name} {index} {count}</ul>
            ))
        }
        </>
    )
}