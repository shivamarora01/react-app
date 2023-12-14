import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const {setUser} = useContext(UserContext)
    const {setPass} = useContext(UserContext)
    const handleclk = () => {
        setUser(username)
        setPass(password)
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
         placeholder='username' 
         value={username}
         onChange={(e)=>
            setUsername(e.target.value)
         }/>
        <input type="text" 
         placeholder='password' 
         value={password}
         onChange={(e)=>
            setPassword(e.target.value)
         }/>
        <button
          onClick={handleclk}>Submit</button>
    </div>
  )
}

export default Login