import { useMemo, useState } from "react";

export default function Hookies(){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    console.log("again rendering");

    const array = useMemo(()=>["c","y","x","a","b","m"],[]);

    const sortedArray = useMemo(() => {
        console.log("sorting the array");
        return [...array].sort();
    }, [array]); 

    return(
        <>
            {sortedArray.map((item) => (
                <li key={item}>{item}</li>
            ))}

            <button onClick={() => setCount(count + 1)}>
                Tap me to sort: {count}
            </button>

            <button onClick={() => setCount2(count2 + 1)}>
                Other button: {count2}
            </button>
        </>
    )
}
