//custom hook ek simple function hee hai
//alg alg hook se bnskta hai 
import { useEffect,useState } from "react";
function useCustom(currency){

        useEffect(() => { 
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        let data = res;
        console.log(data);
        },[currency])
        
    
}
export default useCustom;