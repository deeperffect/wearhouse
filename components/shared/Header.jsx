'use client'
import { useContext, useEffect, useRef, useState, useCallback } from 'react';
import { AuthContext } from '@app/contexts/AuthContext';
import { useHeaderHeight } from '@hooks/useHeaderHeight';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import BasketButton from './BasketButton';
import BasketContent from './BasketContent';
import HamburgerButton from './HamburgerButton';
import Logo from './Logo';
import Navbar from './Navbar';
import Btn from './Btn';
import Container from '@components/Container';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [isActive, setIsActive] = useState(false);
    const [basketActive, setBasketActive] = useState(false);
    const headerRef = useHeaderHeight();
    const pathname = usePathname();

    useEffect(() => {
        document.documentElement.classList.toggle('overflow-hidden', isActive);
    }, [isActive]);

    useEffect(() => {
        document.documentElement.classList.toggle('overflow-hidden', basketActive);
    }, [basketActive]);

    useEffect(() => {
        setIsActive(false);
    }, [pathname]);

    useEffect(() => {
        setBasketActive(false);
    }, [pathname]);

    const toggleHeader = useCallback(() => {
        setIsActive(prev => !prev);
    }, []);

    const toggleBasket = useCallback(() => {
        setBasketActive(prev => !prev);
    }, []);

    return (
        <header ref={headerRef} className='bg-slate-900 text-black fixed top-0 left-0 right-0 z-50'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='px-[1.5px]'>
                        <Logo/>
                    </div>
                    {/* MOBILE MENU */}
                    <div className={`overflow-y-auto header-menu ${isActive ? 'translate-x-0' : 'translate-x-full'} duration-300 transition-transform fixed bg-white bottom-0 top-headerHeight z-50 left-0 w-full flex flex-col items-start p-8 gap-8 lg:hidden`}>
                        {user ? (
                            <>
                                <div className='lg:hidden items-center gap-4 flex justify-between'>
                                    <Link href="/profile">
                                        <Image src="/assets/icons/profile.svg" alt="profile icon" width={32} height={32}/>
                                    </Link>
                                    <p>{user.email}</p>
                                    <Btn clickHandler={logoutUser}>Logout</Btn>
                                </div>
                                <Navbar />
                            </>
                        ) : (
                            <>
                                <Navbar />
                                <Link className="block p-2 px-4 text-white bg-darkOrange hover:bg-lightOrange rounded-full baseline" href="/login">Login</Link>
                            </>
                        )}
                    </div>
                    <div className='flex justify-between items-center gap-4 lg:hidden'>
                        {user && (
                            <>
                                <Link href="/collection/create-item">
                                    <div className='bg-white py-2 px-4 rounded-md'>
                                        <p>Sell</p>
                                    </div>
                                </Link>
                                <BasketButton handleClick={toggleBasket} basketActive={basketActive} />
                                <Link className="hidden lg:block" href="/profile">
                                    <Image src="/assets/icons/profile.svg" alt="profile icon" width={32} height={32}/>
                                </Link>
                            </>
                        )}
                    </div>
                    {/* DESKTOP MENU */}
                    <div className='hidden lg:flex'>
                        <Navbar/>
                    </div>
                    <div className='hidden lg:flex'>
                        <div className='flex justify-between'>
                            <div className='flex justify-between items-center gap-6'>
                                {user ? (
                                    <>
                                        <Link href="/collection/create-item">
                                            <div className='bg-white py-2 px-4 rounded-md'>
                                                <p>Sell</p>
                                            </div>
                                        </Link>
                                        <BasketButton handleClick={toggleBasket} basketActive={basketActive} />
                                        <Link className="hidden lg:block" href="/profile">
                                            <Image src="/assets/icons/profile.svg" alt="profile icon" width={32} height={32}/>
                                        </Link>
                                        <Btn clickHandler={logoutUser}>Logout</Btn>
                                    </>
                                ) : (
                                    <>
                                        <Link className="block p-2 px-4 text-white bg-darkOrange hover:bg-lightOrange rounded-full baseline" href="/login">Login</Link>
                                    </>
                                )
                            }
                            </div>
                        </div>
                    </div>
                    <HamburgerButton handleClick={toggleHeader} isActive={isActive} />
                    <div className={`overflow-y-auto basket-menu ${basketActive ? 'translate-x-0' : 'translate-x-full'}
                    duration-300 transition-transform fixed bg-white bottom-0 w-full
                    top-headerHeight z-50 left-0 py-8 px-2 gap-4 lg:gap-0`}>
                        <BasketContent toggleBasket={toggleBasket}/>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;