'use client'
import { AuthContext } from "@app/contexts/AuthContext"
import Container from "@components/Container"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from 'react'
import { useContext } from "react"


const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(AuthContext)
  
  async function handleLogin(e) {
    e.preventDefault()
    const userData = {
      email: email,
      password: password
    }
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(userData)
      })
  
      if (response.ok) {
        const token = await response.json()
        localStorage.setItem('token', JSON.stringify(token))
        setUser(token)
        router.push('/')
      } else {
        const errorResponse = await response.json()
        console.error('Login failed:', errorResponse.error)
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <section>
      <Container>
        <div className="max-w-[30rem] mx-auto p-4">
          <h2 className="text-xl pb-4 text-center font-bold">Login</h2>
          <form className="text-l text-black">
            <div className="pb-4">
                <input className="rounded-md max-w-fuxl w-full p-2 leading-none" type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value ={email}/>
            </div>
            <div className="pb-4">
                <input className="rounded-md max-w-full w-full p-2 leading-none" type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            <button className="bg-gray-100 text-black w-full p-2" onClick={handleLogin}>Login</button>
          </form>
          <p className="text-center m-3">Not registered yet?
            <Link className="px-2 text-blue-400" href="/register">Register
            </Link></p>
        </div>
      </Container>
    </section>
  )
}

export default Login