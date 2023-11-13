import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div> Hey User pls Login first</div>
    else return <div> Hi {user.username} , your password is {user.password} </div>
}

export default Profile