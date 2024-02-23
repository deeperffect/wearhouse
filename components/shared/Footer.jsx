import React from 'react'
import Logo from './Logo';
import Section from '@components/Section';

const Footer = () => {
  return (
	<Section>
		<footer className='flex items-center justify-between p-2'>
			<Logo />
			<p>2024 Wearhouse. All rights reserved.</p>
		</footer>
	</Section>
  )
}

export default Footer;