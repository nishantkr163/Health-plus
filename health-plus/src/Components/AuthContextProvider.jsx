import React from 'react'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

  const [isAuth, setIsAuth] = useState(false) 

  const handleAuth = () => {
    setIsAuth(!isAuth)
  }

  return (
    <AuthContext.Provider val={{isAuth, handleAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider