'use client'
import Container from '@components/Container';
import Navbar from './Navbar';
import Logo from './Logo';
import Link from 'next/link';
import Btn from './Btn';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '@app/contexts/AuthContext';
import HamburgerButton from './HamburgerButton';
import { useHeaderHeight } from '@hooks/useHeaderHeight';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
	const { user, logoutUser } = useContext(AuthContext);
	const [isActive, setIsActive] = useState(false);
	const headerRef = useHeaderHeight();
	const pathname = usePathname();

	useEffect(() => {
		document.documentElement.classList.toggle('overflow-hidden', isActive);
	}, [isActive]);

	useEffect(() => {
		setIsActive(false);
	}, [pathname]);

	function toggleHeader() {
		setIsActive(!isActive);
	};

	return (
		<header ref={headerRef} className=' bg-slate-200 text-black fixed top-0 left-0 right-0 z-50'>
			<Container>
				<div className='flex items-center justify-between'>
					<Logo />
					<div className={`overflow-y-auto header-menu ${isActive ? 'translate-x-60' : 'translate-x-full'} duration-300 transition-transform fixed bg-white bottom-0 top-headerHeight z-50 left-0 w-full py-8 px-2 flex flex-col justify-between gap-4 lg:gap-0 lg:contents lg:static`}>
						<Navbar />
						<div className='flex lg:gap-4 gap-2 flex-col items-start text-lg lg:flex-row lg:items-center'>
							{
								user ? (
									<>
										<Link href="/collection/create-item">
											<Image src="/assets/icons/plus.svg" alt="plus icon" width={32} height={32}/>
										</Link>
										<Link href="/cart">
											<Image src="/assets/icons/shopping-bag.svg" alt="shopping bag icon" width={29} height={22}/>
										</Link>
										<Link href="/profile">
											<Image src="/assets/icons/profile.svg" alt="profile icon" width={32} height={32}/>
										</Link>
										<Btn clickHandler={logoutUser}>Logout</Btn>
									</>
								)
								:
								(
									<Link className="block p-2 px-4 text-white bg-darkOrange hover:bg-lightOrange rounded-full baseline" href="/login">Login</Link>
								)
							}
						</div>
					</div>
					<HamburgerButton handleClick={toggleHeader} isActive={isActive} />
				</div>
			</Container>
		</header>
	)
};

export default Header;