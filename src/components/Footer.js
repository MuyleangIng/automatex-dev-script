"use client"
import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import BtnTheme from "@/components/BtnTheme";
import Image from "next/image";
import {FaFacebook} from "react-icons/fa";

function MainFooter(){
    const pathname = usePathname();

    if (
        pathname ===  "/auth/login" ||
        pathname === "/auth/signup" ||
        pathname === "/auth/reset-password"
    ){
        return null;
    }
    return(
        <>
            <footer className={`px-4 divide-y bg-slate-50 dark:bg-gray-800 dark:text-gray-100`}>
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <Link href="/" className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full">
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    alt="Logo"
                                    className=" w-14 h-14 object-contain"
                                    src="/mainlogo.png"
                                />
                            </div>
                            <span className="self-center text-xl font-bold whitespace-nowrap">
                        <span className="text-orange-100">Automate</span>
                        <span className="text-cool-blue-100">X</span>
                    </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="text-blue-900 font-medium text-lg dark:text-gray-100">Service</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link rel="noopener noreferrer" target={"_blank"} href="https://cloud.automatex.dev/">Cloud Storage</Link>
                                </li>
                                <li>
                                    <Link  rel="noopener noreferrer" target={"_blank"} href="https://gitlab.automatex.dev/">Private Git Server</Link>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="/auth/login">Auto Deploy</a>
                                </li>
                                <li>
                                    <Link  rel="noopener noreferrer" target={"_blank"} href="https://gitlab.automatex.dev/">Artifact Management</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-blue-900 font-medium text-lg dark:text-gray-50">Explore</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link  rel="noopener noreferrer" target={"_blank"} href="https://docs.automatex.dev/">Documents</Link>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="/auth/login">Clients</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="/auth/login">Monitoring</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="/auth/login">Integration</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-blue-900 font-medium text-lg dark:text-gray-50">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="/about-us">About us </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="/about-us">Planning</a>
                                </li>
                                <li>
                                    <Link as={Link} rel="noopener noreferrer" href="/privacy-policy">Privacy & Policy</Link>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="/about-us">     Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-blue-900 font-medium text-lg dark:text-gray-50">Follow Us On</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#" title="Facebook"
                                       className="flex items-center p-1">
                                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             width="100" height="100"
                                             viewBox="0 0 48 48">
                                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                                            <path fill="#fff"
                                                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#" title="Telegram"
                                       className="flex items-center p-1">
                                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             width="100" height="100"
                                             viewBox="0 0 48 48">
                                            <path fill="#29b6f6"
                                                  d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path>
                                            <path fill="#fff"
                                                  d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"></path>
                                            <path fill="#b0bec5"
                                                  d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"></path>
                                            <path fill="#cfd8dc"
                                                  d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="py-6 text-sm text-center dark:text-gray-400">© 2023 AutomateX. All rights reserved.
                </div>
            </footer>
        </>

    )
}

export default MainFooter