'use client'
import Container from '@components/Container';
import Navbar from './Navbar';
import Logo from './Logo';
import Link from 'next/link';
import Btn from './Btn';
import { useContext } from 'react';
import { AuthContext } from '@app/contexts/AuthContext';

const Header = () => {
	const { user, logoutUser } = useContext(AuthContext);

	return (

		<header className='bg-gray-200 text-black py-2'>
			<Container>
				<div className='flex items-center justify-between'>
					<Logo />
					<Navbar />
					<div className='flex gap-4'>
						{
							user ? (
								<>
									<Link href="/collection/create-item">+</Link>
									<Link href="/profile">Profile</Link>
									<Btn clickHandler={logoutUser}>Logout</Btn>
								</>
							)
							:
							(
								<>
									<Link href="/register">Register</Link>
									<Link href="/login">Login</Link>
								</>
							)
						}
					</div>
				</div>
			</Container>
		</header>
	)
};

export default Header;
