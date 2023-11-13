import React, { useState } from 'react'
import UserContext from './UserContext'

 const UserContextProvider = ({children}) => {
    //data create krna pdega hume 
    const [user,setUser] = useState(null)
    //jo saare cards , pages jo access kre ske context providr ki state ko
  return (
    <UserContext.Provider value = {{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider