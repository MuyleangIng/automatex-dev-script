"use client"
import React from 'react';
import {Button, DarkThemeToggle, Navbar, Dropdown, Avatar} from 'flowbite-react';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import {FaUserPlus} from 'react-icons/fa';
import {IoLogInOutline, IoLogOutOutline} from 'react-icons/io5';
import {useSession, signOut} from 'next-auth/react';
import {useTheme} from 'next-themes';
import ThemeChanger from "@/app/ThemeChanger";
import HandleImage from "@/components/HandleImage";

function HandleNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const {data: session, status, error} = useSession();
    const {theme} = useTheme();
    const developerPath = pathname.includes('/app')

    const handleSignOut = async () => {
        await signOut({callbackUrl: '/'});
        router.push('/');
    };

    if (status === 'loading' && !error) {
        // Display the loading indicator only during authentication requests
        return (
            <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full border-t-4 border-b-4 border-orange-150 h-8 w-8"></div>
                <span className="ml-2">Loading...</span>
            </div>
        );
    }

    return (
        <Navbar container rounded
                className={`cus-navbar sticky top-0 left-0 z-50 lg:px-3 ${theme === 'dark' ? 'dark:bg-gray-900' : ''}`}>
            <Link href="/">
                <Navbar.Brand>
                    <HandleImage src={"/mainlogo.png"} w={10} h={10}/>
                    <span className="self-center text-xl font-extrabold whitespace-nowrap">
                        <span className="text-cyan-700">Automate</span>
                        <span className="text-cool-blue-100">X</span>
                    </span>
                </Navbar.Brand>
            </Link>
            <div className={'flex items-center gap-2 md:order-2'}>
                <ThemeChanger/>
                {session ? (
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <span>
                             <span className="sr-only">User menu</span>
                                {session.user?.image && (
                                    <Avatar
                                        alt="User Avatar"
                                        img={session.user.image}
                                        rounded
                                        size="sm"
                                    />
                                )}
                                     </span>
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{session.user?.name}</span>
                            <span className="block truncate text-sm font-medium">
                             {session.user?.email}
                                        </span>
                        </Dropdown.Header>
                        <Dropdown.Item as={Link} href={"/app/dashboard"}>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item
                            onClick={handleSignOut}
                            className="bg-red-500 focus:text-white focus:bg-red-500 dark:focus:bg-red-500"
                        >
                            Sign out
                        </Dropdown.Item>

                    </Dropdown>
                ) : (
                    <>
                        <BtnSignUp pathname={pathname} router={router}/>
                        <BtnSignIn pathname={pathname} router={router}/>
                    </>
                )}

            </div>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                {!developerPath && (
                    <>
                        <Navbar.Link className={'font-normal text-lg'} href="/features-services">
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
                        <Navbar.Link className={'font-normal text-lg'} href="contact-us">
                            About Us
                        </Navbar.Link>
                    </>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HandleNavbar;


const BtnSignIn = ({pathname, router}) => {
    return (
        <Button
            outline
            onClick={() => router.push("/login")}
            className={pathname === '/login'?"hidden":""}
        >
            <span className={'lg:px-3 uppercase flex gap-2'}>
                <IoLogInOutline className="h-5 w-5"/>
                <span className={'hidden lg:inline'}>Sign In</span>
            </span>
        </Button>
    )
}

const BtnSignUp = ({pathname, router}) => {
    return (
        <Button
            onClick={() => router.push("/signup")}
            className={pathname === '/signup'?"hidden":""}
        >
            <span className={'lg:px-3 uppercase flex gap-2'}>
                <FaUserPlus className="h-5 w-5"/>
                <span className={'hidden lg:inline'}>Sign Up</span>
            </span>
        </Button>
    )
}