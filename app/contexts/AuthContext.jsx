'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const SECRET = process.env.NEXT_SECRET
  console.log(process.env.NEXT_SECRET)
  useEffect(() => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    if(token) {
      try{
        const decodedToken = jwt.verify(token, SECRET)
        setUser(decodedToken)
      } catch (error) {
        console.log(error)
      }
    }
  }, []);
  
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
  // const login = async (userData) => {
  //   try {
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(userData),
  //     })

  //     if (response.ok) {
  //       const { token } = await response.json()
  //       document.cookie = `token=${token}; path=/;`
  //       const decodedToken = jwt.verify(token, SECRET)
  //       setUser(decodedToken)
  //     } else {
  //       console.error('Login failed')
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // const logout = () => {
  //   document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  //   setUser(null);
  // }

