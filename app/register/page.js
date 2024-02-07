'use client'
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@app/contexts/AuthContext';
import Section from '@components/Section';
import { isEmail } from 'validator';

const Register = () => {

	const { setUser } = useContext(AuthContext);
	const router = useRouter();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

  
	async function handleRegister(e) {
		e.preventDefault();
		if (password !== confirmPassword || password < 8) {
			console.log("invalid password");
			return;
		};

		if(!isEmail(email)) {
			console.log('invalid email');
			return;
		};

	const userData = {
		name: name,
		email: email,
		password: password,
		confirmPassword: confirmPassword
	};

	const response = await fetch('/api/register', {
		method: 'POST',
		body: JSON.stringify(userData),
	});

	try {      
		const token = await response.json();
		localStorage.setItem('token', JSON.stringify(token));
		setUser(token);
		router.push('/');
	} catch (error) {
		console.log(error);
	};
  };

	return (
		<Section>
			<div className="max-w-[30rem] mx-auto p-4">
				<h2 className="text-xl pb-4 text-center font-bold">Register</h2>
				<form className="text-l text-black">
					<div className='pb-4'>
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" id="Full Name" placeholder="Full Name" onChange={(e) => setName(e.target.value)} value={name}/>        
					</div>
					<div className='pb-4'>
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
					</div>
					<div className='pb-4'>
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
					</div>
					<div className='pb-4'>
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="password" id="confirmPassword" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>   
					</div>
					<button onClick={handleRegister} className="bg-gray-100 text-black w-full p-2">Register</button>
				</form>
				<p className="text-center m-3">Already registed?
				<Link className="px-2 text-blue-400" href="/login">Login
				</Link></p>
			</div>
		</Section>
    )
};

export default Register;