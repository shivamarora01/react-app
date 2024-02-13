import React, { useState } from 'react'

function Parent() {

    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)
    function addon1() {
        console.log("Hey i'm count 1")
        setCount1(count1+1)
    }
    function addon2(){
        console.log("Hi i'm count 2")
    }
    const isEven = () => {
        console.log(`Hi i am WhatNum ${count1}`);
        let i = 0;
        while(i < 200000000)
        i++;
        return count1%2 === 0;
    }
  return (
    <div>
      <button onClick={addon1}>add 1</button>
      <span>{isEven()?"Even":"odd"}</span>
      <button onClick={addon2}>add 2</button>
    </div>
  )
}

export default Parent
