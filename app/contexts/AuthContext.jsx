'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import {jwtDecode} from 'jwt-decode'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if(token) {
      try{
        const decodedToken = jwtDecode(token)
        const { _id, email } = decodedToken
        setUser({id: _id, email: email})
      } catch (error) {
        console.log(error)
      }
    }

  }, []);

  const logoutUser = () => {
    localStorage.removeItem('token')
    setUser(null);
  }
  
  return (
    <AuthContext.Provider value={{ user, setUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}