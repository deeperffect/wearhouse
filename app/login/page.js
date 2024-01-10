'use client'
import Container from "@components/Container"
import Link from "next/link"
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    const data = {
      email: email,
      password: password
    }

  // fetch('/api/login', {
  //   method: 'POST', })


  }
  return (
    <section>
      <Container>
        <div className="max-w-[30rem] mx-auto p-4">
          <h2 className="text-xl pb-4 text-center">Login</h2>
          <form className="text=l">
            <div className="pb-4">
                <input className="rounded-md max-w-fuxl w-full p-2 leading-none" type="email" id="email" placeholder="Email" onChange={setEmail} value ={email}/>
            </div>
            <div className="pb-4">
                <input className="rounded-md max-w-full w-full p-2 leading-none" type="password" id="password" placeholder="Password" onChange={setPassword} value={password}/>
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