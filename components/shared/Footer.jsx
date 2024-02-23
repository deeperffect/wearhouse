import Link from 'next/link';
import React from 'react'
import Logo from './Logo';

const Footer = () => {
  return (
	<footer className='border-5 '>
		<div className='flex flex-col md:flex-row md:justify-between text-center items-center'>
			<Link href='/'>
				<Logo />
			</Link>
			<p>2024 Wearhouse. All rights reserved.</p>
		</div>
	</footer>
  )
}

export default Footer;