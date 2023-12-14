import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    const {pass} = useContext(UserContext)
  return (
    <div>
       <h3>Hi {user}</h3>
       <h4>Your password is {pass}</h4> 
    </div>
  )
}

export default Profile