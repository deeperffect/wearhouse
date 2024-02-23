import React from 'react'
import Logo from './Logo';
import Section from '@components/Section';

const Footer = () => {
  return (
	<Section>
		<footer className='flex flex-col lg:flex-row items-center justify-between py-2'>
			<Logo />
			<p>2024 Wearhouse. All rights reserved.</p>
		</footer>
	</Section>
  )
}

export default Footer;