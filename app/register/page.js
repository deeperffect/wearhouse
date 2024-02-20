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
	const [errorMessage, setErrorMessage] = useState('');

  
	async function handleRegister(e) {
		e.preventDefault();
		let errorMessages = '';
		if (name.length < 3) {
			errorMessages += 'Invalid name length. Minimum 3. \n';
		};  
		if (email.length < 8) {
			errorMessages += 'Invalid email. Minimum 8. \n';
		};

		if (password.length < 8) {
			errorMessages += 'Invalid password length. Minimum 8. \n';
		};

		if (password !== confirmPassword) {
			errorMessages += 'Passwords not matching. \n';
		};

		if (errorMessages) {
			setErrorMessage(errorMessages);
			return;
		}

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
		<div className='bg-white/50 h-pageHeight'>
			<Section>
				<div className="max-w-[30rem] mx-auto p-4 bg-slate-200/50 rounded-xl">
					<h2 className="text-xl pb-4 text-center font-bold">Register</h2>
					<h2 className="text-base pb-4 text-center">Please fill the information below:</h2>
					<form className="text-l text-black">
						{errorMessage && (
							<div className="text-red-500 mb-4">{errorMessage}</div>
						)}
						<div className='pb-4'>
							<h3 className="pb-1 font-bold">Full name:</h3>
							<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" id="Full Name" placeholder="Full Name" onChange={(e) => setName(e.target.value)} value={name}/>        
						</div>
						<div className='pb-4'>
							<h3 className="pb-1 font-bold">Email:</h3>
							<input className="rounded-md max-w-full w-full p-2 leading-none" type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
						</div>
						<div className='pb-4'>
							<h3 className="pb-1 font-bold">Password:</h3>
							<input className="rounded-md max-w-full w-full p-2 leading-none" type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
						</div>
						<div className='pb-4'>
							<h3 className="pb-1 font-bold">Confirm password:</h3>
							<input className="rounded-md max-w-full w-full p-2 leading-none" type="password" id="confirmPassword" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>   
						</div>
						<button onClick={handleRegister} className="bg-darkOrange hover:bg-lightOrange text-black w-full p-2">Create my account</button>
					</form>
					<p className="text-center m-3">Already have an account?
					<Link className="px-2 text-blue-400 hover:text-lightOrange" href="/login">Login
					</Link></p>
				</div>
			</Section>
		</div>
    )
};

export default Register;