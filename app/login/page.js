'use client'
import { AuthContext } from "@app/contexts/AuthContext";
import Section from "@components/Section";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { useContext } from "react";


const Login = () => {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { setUser } = useContext(AuthContext);
	const [errorMessage, setErrorMessage] = useState('');

	async function handleLogin(e) {
		e.preventDefault();

		const userData = {
			email: email,
			password: password
		};
  
	try {
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(userData)
		});
  
	if (response.ok) {
		const token = await response.json();
		localStorage.setItem('token', JSON.stringify(token));
		setUser(token);
		router.push('/');
	} else {
		const errorResponse = await response.json();
		console.error('Login failed:', errorResponse.error);
		setErrorMessage('Invalid email or password.');
	};
	} catch (error) {
		console.error('Login failed:', error);
		setErrorMessage('Invalid email or password.');
	};
};

  return (
    <div className="bg-white/50 h-pageHeight">
      <Section>
        <div className="max-w-[30rem] mx-auto p-4 bg-slate-200/50 rounded-xl">
          <h2 className="text-xl pb-4 text-center font-bold">Login</h2>
          <h3 className="text-base pb-4 text-center">Please enter your email and password:</h3>
          <form className="text-l text-black">
			{errorMessage && (
							<div className="text-red-500 mb-4">{errorMessage}</div>
						)}
            <div className="pb-4">
                <input className="rounded-md max-w-full w-full p-2 leading-none" type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value ={email}/>
            </div>
            <div className="pb-4">
                <input className="rounded-md max-w-full w-full p-2 leading-none" type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            <button className="bg-darkOrange hover:bg-lightOrange text-black w-full p-2" onClick={handleLogin}>Login</button>
          </form>
          <p className="text-center m-3">Don't have an account?
            <Link className="px-2 text-blue-400 hover:text-darkOrange" href="/register">Create one
            </Link></p>
        </div>
      </Section>
    </div>
  )
};

export default Login