import React, { useState } from 'react'
import Child from './Child.jsx';

function Parent() {
  const [count, setCount] = useState(0)
  const [mount, setMount] = useState(0)
  const handleClick = () => {
    setCount(count+1);
  }
  return (
    <div>
      <Child count = {mount}/>
      <button onClick={() => {handleClick()}}>{count}</button>
    </div>
  )
}

export default Parent
