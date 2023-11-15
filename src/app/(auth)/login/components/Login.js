"use client"

import React,{useState} from 'react';
import {signIn,useSession,signOut} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import {Button, Navbar} from "flowbite-react";
import {FaUserPlus} from "react-icons/fa";
import {IoLogInOutline} from "react-icons/io5";
import {usePathname} from "next/navigation";


const SignInForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: session } = useSession();
    const pathname = usePathname();


    const handleAuthClickHub = async () => {
        if (!session) {
            // If the user is not authenticated, initiate the sign-in
            await signIn('github', { callbackUrl: '/' });
        } else {
            // If the user is already authenticated, you may want to handle sign-out
            await signOut();
        }
    };

    const handleAuthClickLab = async () => {
        if (!session) {
            // If the user is not authenticated, initiate the sign-in
            await signIn('gitlab', { callbackUrl: '/' });
        } else {
            // If the user is already authenticated, you may want to handle sign-out
            await signOut();
        }
    };
    const handleAuthClickGoogle = async () => {
        if (!session) {
            // If the user is not authenticated, initiate the sign-in
            await signIn('google', { callbackUrl: '/' });
        } else {
            // If the user is already authenticated, you may want to handle sign-out
            await signOut();
        }
    };

    // if(status === "authenticated") {
    //     return (
    //         <Navbar container rounded className={"cus-navbar  sticky top-0 left-0 z-50 lg:px-3"}>
    //             <Navbar.Brand>
    //                 <img
    //                     unoptimized
    //                     width={100}
    //                     height={100}
    //                     alt="Logo"
    //                     className=" w-10 h-10 object-contain"
    //                     src="/mainlogo.png"
    //                 />
    //                 <span className="self-center text-xl font-bold whitespace-nowrap">
    //                 <span className="text-orange-100">Automate</span>
    //                 <span className="text-cool-blue-100">X</span>
    //             </span>
    //
    //             </Navbar.Brand>
    //             <div className={"flex items-center gap-2 flex md:order-2"}>
    //                 <div className="relative">
    //                     <img className="w-14 h-14 rounded-full" src={session.user.image} alt="" />
    //                     <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    //                 </div>
    //                 <button
    //                     onClick={() => signOut()}
    //                     type="button"
    //                     className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    //                 >
    //                     Sign Out
    //                 </button>
    //                 <Navbar.Toggle/>
    //             </div>
    //             <Navbar.Collapse>
    //                 <Navbar.Link className={"font-normal text-lg"} href="#">Feature & Service</Navbar.Link>
    //                 <Navbar.Link className={"font-normal text-lg"} href="#">Document</Navbar.Link>
    //                 <Navbar.Link className={`font-normal text-lg ${pathname === '/startbuilding' ? 'text-orange-500' : 'text-gray-600'}`} href="/startbuilding">Start Building</Navbar.Link>
    //                 <Navbar.Link className={"font-normal text-lg"} href="#">About Us</Navbar.Link>
    //             </Navbar.Collapse>
    //         </Navbar>
    //     )
    // }

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-0 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-extrabold text-gray-900 md:text-2xl dark:text-white">
                            Sign in
                        </h1>
                        <form className=" space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-100 focus:border-orange-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-100 dark:focus:border-orange-100"
                                    placeholder="name@visal.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-100 focus:border-orange-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-100 dark:focus:border-orange-100"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-100 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-100 dark:ring-offset-gray-800"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a onClick={handleModalToggle} href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-black bg-orange-100 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>

                            <div className="flex items-center space-x-4">
                                <hr className="w-full border border-gray-300" />
                                <div className="font-semibold text-gray-400">OR</div>
                                <hr className="w-full border border-gray-300" />
                            </div>
                            <button
                                onClick={handleAuthClickGoogle}
                                className="w-full group h-12 px-6 border-2 border-gray-200 rounded-lg transition duration-300 hover:border-yellow-300 focus:bg-yellow-50 active:bg-yellow-100">
                                <div className="relative flex items-center space-x-4 justify-center">
                                    <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                                </div>
                            </button>

                            <button
                                onClick={handleAuthClickHub}
                                className="w-full group h-12 px-6 border-2 border-gray-200 rounded-lg transition duration-300 hover:border-yellow-300 focus:bg-yellow-50 active:bg-yellow-100">
                                <div className="relative flex items-center space-x-4 justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                                </div>
                            </button>
                            <button
                                onClick={handleAuthClickLab}
                                className="w-full group h-12 px-6 border-2 border-gray-200 rounded-lg transition duration-300 hover:border-yellow-300 focus:bg-yellow-50 active:bg-yellow-100">
                                <div className="relative flex items-center space-x-4 justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="gitlab" className="absolute left-0 w-5 text-gray-700"><path fill="#E24329" d="m12 23.054 4.419-13.6H7.581L12 23.054z"></path><path fill="#FC6D26" d="m12 23.054-4.419-13.6H1.388L12 23.054z"></path><path fill="#FCA326" d="M1.388 9.453.045 13.586a.917.917 0 0 0 .332 1.023L12 23.054 1.388 9.453z"></path><path fill="#E24329" d="M1.388 9.454h6.193L4.919 1.262a.457.457 0 0 0-.87 0L1.388 9.454z"></path><path fill="#FC6D26" d="m12 23.054 4.419-13.6h6.193L12 23.054z"></path><path fill="#FCA326" d="m22.612 9.453 1.343 4.133a.917.917 0 0 1-.332 1.023L12 23.054 22.612 9.453z"></path><path fill="#E24329" d="M22.612 9.454h-6.193l2.662-8.191a.457.457 0 0 1 .87 0l2.661 8.191z"></path></svg>
                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Gitlab</span>
                                </div>
                            </button>

                            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link href="/signup" className="font-medium text-orange-400 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen p-4 text-center">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <div className="relative inline-block p-6 bg-white rounded-lg text-left shadow-xl">
                            <h2 className="text-lg font-semibold mb-4">Forgot Password</h2>
                            <p className="mb-4">Please enter your email address to reset your password.</p>
                            <form>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-100 focus:border-orange-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-100 dark:focus:border-orange-100"
                                        placeholder="name@visal.com"
                                        required
                                    />
                                </div>
                            </form>
                           <div className="flex justify-between">
                               <div className="mt-8">
                                   <button
                                       type="submit"
                                       className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-orange-100 border border-transparent rounded-md hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-100"
                                   >
                                       Reset Password
                                   </button>
                               </div>
                               <div className="mt-8">
                                   <button
                                       type="button"
                                       className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                       onClick={handleModalToggle}
                                   >
                                       Close
                                   </button>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SignInForm;
