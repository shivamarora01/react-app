import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} = useContext(UserContext)

   const handleclick = (e) => {
        setUser({username,password})
    }

  return (
    <div>
        <h2> Login User ! </h2>

        <input type="text" 
         placeholder='username'
         value={username} 
         onChange={(e) => setUsername(e.target.value)}
        />
        <input type="text" 
        placeholder='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleclick}>Submit</button>
    </div>
  )
}

export default Login