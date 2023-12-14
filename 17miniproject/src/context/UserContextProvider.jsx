import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [user,setUser] = React.useState(null)
    const [pass,setPass] = React.useState(null)
    return(
    <UserContext.Provider value={{user,setUser,pass,setPass}}>
        {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider;