import React from "react";
const Callback = React.memo(function Callback({other, increaseOther}) {
    console.log("child component rendering");
    return(
        <>
        <h2>Other: {other}</h2>
        <button onClick={increaseOther}>increase count of other</button>
        </>
    )
});
export default Callback
//React.memo tells react to re-render this comp only when props changes, it compares by shallow comparison
//primitive data type is good, other
//but function is not stable , to make it stable we use usecallback while declaring it.