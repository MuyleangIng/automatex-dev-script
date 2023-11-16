"use client"
// Import necessary modules


import React from 'react';
import {Button, DarkThemeToggle, Navbar} from 'flowbite-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaUserPlus } from 'react-icons/fa';
import { IoLogInOutline } from 'react-icons/io5';
import { useSession, signOut } from 'next-auth/react';
import { useTheme } from 'next-themes';
import ThemeChanger from "@/app/themeSwitcher";

// Define the HandleNavbar component
function HandleNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const { data: session, status, error } = useSession();
    const { theme } = useTheme();


    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/' });
        router.push('/');
    };

    const handleSignUpClick = (e) => {
        e.preventDefault();
        router.push('/signup');
    };

    const handleSignInClick = (e) => {
        e.preventDefault();
        router.push('/login');
    };

    if (pathname === '/login' || pathname === '/signup') {
        return (
            <Navbar container rounded className={`cus-navbar sticky top-0 left-0 z-50 lg:px-3 ${theme === 'dark' ? 'dark:bg-gray-900' : 'bg-white'}`}>
                <Link href="/">
                    <Navbar.Brand>
                        <img
                            unoptimized
                            width={100}
                            height={100}
                            alt="Logo"
                            className=" w-14 h-14 object-contain"
                            src="/mainlogo.png"
                        />
                        <span className="self-center text-xl font-bold whitespace-nowrap">
                          <span className="text-orange-100">Automate</span>
                          <span className="text-cool-blue-100">X</span>
                        </span>
                    </Navbar.Brand>
                </Link>
                <div className={'flex items-center gap-2 md:order-2'}>
                    {pathname === '/login' && (
                    <div className="flex gap-4 items-center">
                        <DarkThemeToggle />
                        <Button
                            onClick={handleSignUpClick}
                            className={'bg-orange-100'}
                        >
                            <span className={'lg:px-3 uppercase  flex gap-2'}>
                                <FaUserPlus className="h-5 w-5" />
                                <span className={'hidden lg:inline'}>Sign Up</span>
                            </span>
                        </Button>
                    </div>
                    )}
                    {pathname === '/signup' && (
                       <div className="flex gap-4 items-center">
                           <DarkThemeToggle />
                           <Button
                               onClick={handleSignInClick}
                               className={'bg-orange-100'}
                               outline
                           >
                            <span className={'lg:px-3 uppercase flex gap-2'}>
                                <IoLogInOutline className="h-5 w-5" />
                                <span className={'hidden lg:inline'}>Sign In</span>
                            </span>
                           </Button>
                           </div>

                    )}
                </div>
            </Navbar>
        );
    }



    if (status === 'loading' && !error) {
        // Display the loading indicator only during authentication requests
        return (
            <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full border-t-4 border-b-4 border-orange-150 h-8 w-8"></div>
                <span className="ml-2">Loading...</span>
            </div>
        );
    }


// Rest of your component code

    return (
        <Navbar container rounded className={`cus-navbar sticky top-0 left-0 z-50 lg:px-3 ${theme === 'dark' ? 'dark:bg-gray-900' : 'bg-white'}`}>
            <Link href="/">
                <Navbar.Brand>
                    <img
                        unoptimized
                        width={100}
                        height={100}
                        alt="Logo"
                        className=" w-14 h-14 object-contain"
                        src="/mainlogo.png"
                    />
                    <span className="self-center text-xl font-bold whitespace-nowrap">
                        <span className="text-orange-100">Automate</span>
                        <span className="text-cool-blue-100">X</span>
                    </span>
                </Navbar.Brand>
            </Link>
            <div className={'flex items-center gap-2 md:order-2'}>
                {session ? (
                    <div className="relative flex gap-5">
                        {session.user?.image && (
                            <img
                                src={session.user.image}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full cursor-pointer"
                                onClick={() => router.push('/profile')} // Redirect to user profile
                            />
                        )}
                        <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        <Button onClick={handleSignOut} className={'bg-red-500'}>
                            Sign Out
                        </Button>
                    </div>
                ) : (
                    <>
                        <DarkThemeToggle />
                        <Button
                            className={'bg-orange-100'}
                            onClick={handleSignUpClick}
                        >
                            <span className={'lg:px-3 uppercase  flex gap-2'}>
                                <FaUserPlus className="h-5 w-5" />
                                <span className={'hidden lg:inline'}>Sign Up</span>
                            </span>
                        </Button>
                        <Button
                            className={'bg-orange-100'}
                            outline
                            onClick={handleSignInClick}
                        >
                            <span className={'lg:px-3 uppercase flex gap-2'}>
                                <IoLogInOutline className="h-5 w-5" />
                                <span className={'hidden lg:inline'}>Sign In</span>
                            </span>
                        </Button>
                    </>
                )}

            </div>
            <Navbar.Toggle />
            {!session && (
                <Navbar.Collapse>
                    <Navbar.Link className={'font-normal text-lg'} href="#">
                        Feature & Service
                    </Navbar.Link>
                    <Navbar.Link
                        className={`font-normal text-lg ${
                            pathname === '/document'
                                ? 'text-orange-500 dark:text-orange-100'
                                : 'text-gray-600'
                        }`}
                        href="/document"
                    >
                        Document
                    </Navbar.Link>
                    <Navbar.Link
                        className={`font-normal text-lg ${
                            pathname === '/startbuilding'
                                ? 'text-orange-500 dark:text-orange-100'
                                : 'text-gray-600'
                        }`}
                        href="/startbuilding"
                    >
                        Start Building
                    </Navbar.Link>
                    <Navbar.Link className={'font-normal text-lg'} href="#">
                        About Us
                    </Navbar.Link>
                </Navbar.Collapse>
            )}
        </Navbar>
    );
}

export default HandleNavbar;
