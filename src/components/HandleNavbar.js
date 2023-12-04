"use client"
import React from 'react';
import {Button, Navbar, Dropdown, Avatar} from 'flowbite-react';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import {FaUserPlus} from 'react-icons/fa';
import {IoLogInOutline} from 'react-icons/io5';
import {useSession, signOut} from 'next-auth/react';
import HandleImage from "@/components/HandleImage";
import {useUsersQuery} from "@/store/features/user/userApiSlice";
import BtnTheme from "@/components/BtnTheme";
import Image from "next/image";


function HandleNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const {data: session, status, error} = useSession();
    const developerPath = pathname.includes('/app')
    const { data: res, isLoading } = useUsersQuery();
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
        <Navbar container="true" rounded className={`cus-navbar sticky top-0 left-0 z-50 lg:px-3 dark:bg-gray-900`}>
            <Navbar.Brand as={Link} href={"/"}>
                <HandleImage src={"/mainlogo.png"} w={10} h={10}/>
                <span className="self-center text-xl font-extrabold whitespace-nowrap">
                    <span className="text-cyan-700">Automate</span>
                    <span className="text-cool-blue-100">X</span>
                </span>
            </Navbar.Brand>
            <div className={'flex items-center gap-2 md:order-2'}>
                <BtnTheme />
                {status === 'authenticated' ? (
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <span>
                                <span className="sr-only">User menu</span>
                                  <Image src={session.user.image} alt="user"
                                         width={40} height={40} className="rounded-full"
                                  />

                            </span>
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{session.user.name}</span>
                            <span className="block truncate text-sm font-medium">
                                 {session.user.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item as={Link} href={"/app/dashboard"}>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            onClick={handleSignOut}
                            className="bg-red-500 focus:text-white focus:bg-red-500 dark:focus:bg-red-500 hidden lg:inline"
                        >
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                ) : (
                    <>
                        <BtnSignUp pathname={pathname} router={router} />
                        <BtnSignIn pathname={pathname} router={router} />
                    </>
                )}
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {!developerPath && (
                    <>
                        <Navbar.Link
                            as={Link}
                            className={`font-normal text-lg ${
                                pathname === '/features-services'
                                    ? 'text-cyan-500 dark:text-cyan-500'
                                    : 'text-gray-600'
                            }`}
                            href="/features-services"
                        >
                            Feature & Service
                        </Navbar.Link>
                        <Navbar.Link
                            className={`font-normal text-lg ${
                                pathname === '/document'
                                    ? 'text-cyan-500 dark:text-cyan-500'
                                    : 'text-gray-600'
                            }`}
                            as={Link}
                            href="/document"
                        >
                            Document
                        </Navbar.Link>
                        <Navbar.Link
                            as={Link}
                            className={`font-normal text-lg ${
                                pathname === '/startbuilding'
                                    ? 'text-cyan-500 dark:text-cyan-500'
                                    : 'text-gray-600'
                            }`}
                            href="/startbuilding"
                        >
                            Start Building
                        </Navbar.Link>
                        <Navbar.Link
                            as={Link}
                            className={`font-normal text-lg ${
                                pathname === '/about-us'
                                    ? 'text-cyan-500 dark:text-cyan-500'
                                    : 'text-gray-600'
                            }`}
                            href="about-us"
                        >
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
            onClick={() => router.push("/auth/login")}
            className={pathname === '/auth/login' || pathname === '/app/dashboard' ? "hidden" : ""}
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
            onClick={() => router.push("/auth/signup")}
            className={pathname === '/auth/signup' || pathname === '/app/dashboard' ? "hidden" : ""}
        >
            <span className={'lg:px-3 uppercase flex gap-2'}>
                <FaUserPlus className="h-5 w-5"/>
                <span className={'hidden lg:inline'}>Sign Up</span>
            </span>
        </Button>
    )
}