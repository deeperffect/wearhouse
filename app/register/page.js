'use client'
import Container from '@components/Container'
import Link from 'next/link'
import { useState } from 'react'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function handleRegister(e) {
    e.preventDefault()
    const data = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }

    // fetch('/api/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data),
    // })
  }

  return (
    <section>
      <Container>
        <div className="max-w-[30rem] mx-auto p-4">
          <h2 className="text-xl pb-4 text-center">Register</h2>
          <form className="text-l">
            <div className='pb-4'>
              <input className="rounded-md max-w-full w-full p-2 leading-none" type="text" id="Full Name" placeholder="Full Name" onChange={setName} value={name}/>        
            </div>
            <div className='pb-4'>
              <input className="rounded-md max-w-full w-full p-2 leading-none" type="email" id="email" placeholder="Email" onChange={setEmail} value={email}/>
            </div>
            <div className='pb-4'>
              <input className="rounded-md max-w-full w-full p-2 leading-none" type="password" id="password" placeholder="Password" onChange={setPassword} value={password}/>
            </div>
            <div className='pb-4'>
              <input className="rounded-md max-w-full w-full p-2 leading-none" type="password" id="confirmPassword" placeholder="Confirm Password" onChange={setConfirmPassword} value={confirmPassword}/>   
            </div>
            <button onClick={handleRegister} className="bg-gray-100 text-black w-full p-2">Register</button>
          </form>
          <p className="text-center m-3">Already registed?
            <Link className="px-2 text-blue-400" href="/login">Login
            </Link></p>
        </div>
      </Container>
    </section>
  )
}

export default Register