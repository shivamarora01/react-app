import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    //setuser used for changing value here
    const {setUser} = useContext(UserContext)
    //setpass too
    const {setPass} = useContext(UserContext)
    const {user} = useContext(UserContext)
    const {pass} = useContext(UserContext)
    const handleclk = () => {
        setUser(username)
        setPass(password)
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
         placeholder='Username' 
        //  value={username}
         onChange={(e)=>
            setUsername(e.target.value)
         }/>
         <br/>
         <br />
        <input type="text" 
         placeholder='Password' 
         value={password}
         onChange={(e)=>
            setPassword(e.target.value)
         }/>
         <br />
         <br />
        <button
          onMouseMove={handleclk}>Submit</button>
        <h3>Hi {user}</h3>
       <h4>Your password is {pass}</h4> 
    </div>
  )
}

export default Login