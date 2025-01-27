"use client"
import React from 'react';
import {Button, Navbar, Dropdown} from 'flowbite-react';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import {FaUserPlus} from 'react-icons/fa';
import {IoLogInOutline} from 'react-icons/io5';
import {useSession, signOut} from 'next-auth/react';
import HandleImage from "@/components/HandleImage";
import {useGetUserQuery} from "@/store/features/user/userApiSlice";
import BtnTheme from "@/components/BtnTheme";
import Image from "next/image";

function HandleNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const {data: session, status, error} = useSession();
    const developerPath = pathname.includes('/app')
    const {data: res, isLoading} = useGetUserQuery();
    const handleSignOut = async () => {
        await signOut({callbackUrl: '/', redirect: false});
        router.push('/');
    };
    if (status === 'loading' && !error) {
        // Display the loading indicator only during authentication requests
        return (
            <>
                <Navbar
                    className={"cus-navbar dark:bg-gray-900 sticky top-0 left-0 z-50 animate-pulse"}
                >
                    <Navbar.Brand href="#">
                        <div className="w-9 h-9 bg-gray-200 rounded dark:bg-gray-700 mr-3"></div>
                        <span className="self-center font-extrabold whitespace-nowrap text-md sm:text-xl uppercase text-blue-800 dark:text-blue-600">
                        <div className="w-32 h-6 bg-gray-200 rounded dark:bg-gray-700 mr-3"></div>
                    </span>
                    </Navbar.Brand>
                    <div className="flex md:order-2 gap-2">
                        <div className={"flex items-center gap-2"}>
                            <div className="w-6 h-6 bg-gray-200 rounded dark:bg-gray-700"></div>
                            <div className="w-32 h-6 bg-gray-200 rounded dark:bg-gray-700"></div>
                            <div className="w-32 h-6 bg-gray-200 rounded dark:bg-gray-700"></div>
                        </div>
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link
                            href="#"
                        >
                            <div className="w-24 h-6 bg-gray-200 rounded dark:bg-gray-700"></div>
                        </Navbar.Link>
                        <Navbar.Link
                            href="#">
                            <div className="w-24 h-6 bg-gray-200 rounded dark:bg-gray-700"></div>
                        </Navbar.Link>
                        <Navbar.Link
                            href="#">
                            <div className="w-24 h-6 bg-gray-200 rounded dark:bg-gray-700"></div>
                        </Navbar.Link>
                        <Navbar.Link
                            href="#">
                            <div className="w-24 h-6 bg-gray-200 rounded dark:bg-gray-700"></div>
                        </Navbar.Link>
                        <Navbar.Link
                            href="#">
                            <div className="w-24 h-6 bg-gray-200 rounded dark:bg-gray-700"></div>
                        </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }

    return (<Navbar container="true" rounded className={`cus-navbar bg-white sticky top-0 left-0 z-50 lg:px-3 dark:bg-gray-900`}>
            <Navbar.Brand as={Link} href={"/"} style={{
                fontFamily: 'inherit', fontWeight: 'bold', color: '#ff6347', fontSize: '30px', letterSpacing: '2px'
            }}>
                <HandleImage src={"/mainlogo.png"} w={14} h={15}/>
                <span
                    className="self-center hidden sm:block md:block md:text-base xl:text-xl font-extrabold whitespace-nowrap w-">
        <span className="text-cyan-700 ">Automate</span>
        <span className="text-cool-blue-100">X</span>
    </span>
            </Navbar.Brand>
            <div className={'flex items-center gap-2 md:order-2'}>
                <BtnTheme/>
                {status === 'authenticated' ? (
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={<span>
                                <span className="sr-only">User menu</span>
                                  <Image
                                      src={session.user.image ? session.user.image : 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'}
                                      alt="user"
                                      width={40}
                                      height={40}
                                      className="rounded-full"
                                  />


                            </span>}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm"></span>
                            <span className="block truncate text-sm font-medium">
                                 {res?.email ? res.email : "automatex@gmail.com"}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item as={Link} href={"/"}>
                            Home
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href={"/app/useraccount"}>Settings</Dropdown.Item>
                        <Dropdown.Divider/>
                        <div>
                            <Dropdown.Item
                                onClick={handleSignOut}
                                className=" focus:text-white focus:bg-red-500 dark:focus:bg-red-500  lg:inline"
                            >
                                Sign out
                            </Dropdown.Item>
                        </div>

                    </Dropdown>

                ) : (<>
                        <BtnSignUp pathname={pathname} router={router}/>
                        <BtnSignIn pathname={pathname} router={router}/>
                    </>)}
                <Button size={"sm"}
                        className={`bg-cyan-500 justify-end ${pathname === '/app/dashboard' || status !== 'authenticated' ? 'hidden' : ''}`}
                        as={Link} href={"/app/dashboard"}>Dashboard</Button>
                <Navbar.Toggle/>
            </div>

            <Navbar.Collapse>
                {!developerPath && (<>
                        <Navbar.Link
                            as={Link}
                            className={`font-normal text-lg ${pathname === '/features-services' ? 'text-cyan-500 dark:text-cyan-500' : 'text-gray-600'}`}
                            href="/features-services"
                        >
                            Feature & Service
                        </Navbar.Link>
                        <Navbar.Link
                            className={`font-normal text-lg ${pathname === '/document' ? 'text-cyan-500 dark:text-cyan-500' : 'text-gray-600'}`}
                            as={Link}
                            href={`https://docs.automatex.dev/`}
                            target={"_blank"}
                        >
                            Document
                        </Navbar.Link>
                        <Navbar.Link
                            as={Link}
                            className={`font-normal text-lg ${pathname === '/startbuilding' ? 'text-cyan-500 dark:text-cyan-500' : 'text-gray-600'}`}
                            href="/startbuilding"
                        >
                            Start Building
                        </Navbar.Link>
                        <Navbar.Link
                            as={Link}
                            className={`font-normal text-lg ${pathname === '/about-us' ? 'text-cyan-500 dark:text-cyan-500' : 'text-gray-600'}`}
                            href="/about-us"
                        >
                            About Us
                        </Navbar.Link>
                    </>)}
            </Navbar.Collapse>
        </Navbar>
        // </HandleContent>
    );
}

export default HandleNavbar;


const BtnSignIn = ({pathname, router}) => {
    return (<Button
            outline
            onClick={() => router.push("/auth/login")}
            className={pathname === '/auth/login' || pathname === '/app/dashboard' ? "hidden" : ""}
        >
            <span className={'lg:px-3 uppercase flex gap-2'}>
                <IoLogInOutline className="h-5 w-5"/>
                <span className={'hidden lg:inline'}>Sign In</span>
            </span>
        </Button>)
}

const BtnSignUp = ({pathname, router}) => {
    return (<Button
            onClick={() => router.push("/auth/signup")}
            className={pathname === '/auth/signup' || pathname === '/app/dashboard' ? "hidden" : ""}
        >
            <span className={'lg:px-3 uppercase flex gap-2'}>
                <FaUserPlus className="h-5 w-5"/>
                <span className={'hidden lg:inline'}>Sign Up</span>
            </span>
        </Button>)
}