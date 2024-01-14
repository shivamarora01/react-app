import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
    const {user} = useContext(UserContext)
    const {pass} = useContext(UserContext)
  return (
    <div>Hi , {user} my password is {pass}</div>
  )
}

export default Profile