import React, { createContext } from 'react'
const AuthContext=createContext(null)

export default function AuthProvider({children}) {
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
