'use client';
import React from 'react';
import Image from "next/image";
import {signIn, signOut, useSession} from "next-auth/react";

function SocialLogin() {
    const { data: session } = useSession();

    const handleAuthGithub = async () => {
        if (!session) {
            // If the user is not authenticated, initiate the sign-in
            await signIn('github', { callbackUrl: '/app/dashboard' });
        } else {
            // If the user is already authenticated, you may want to handle sign-out
            await signOut({ callbackUrl: '/' });
        }
    };

    const handleAuthClickLab = async () => {
        if (!session) {
            // If the user is not authenticated, initiate the sign-in
            await signIn('gitlab', { callbackUrl: '/app/dashboard' });
        } else {
            // If the user is already authenticated, you may want to handle sign-out
            await signOut({ callbackUrl: '/' });
        }
    };
    const handleAuthClickGoogle = async () => {
        if (!session) {
            // If the user is not authenticated, initiate the sign-in
            await signIn('google', { callbackUrl: '/app/dashboard' });
        } else {
            // If the user is already authenticated, you may want to handle sign-out
            await signOut({ callbackUrl: '/' });
        }
    };


    return (
        <div className="space-y-3">
            <button
                type={"button"}
                onClick={handleAuthClickGoogle}
                className="w-full group h-12 px-6 border-2 border-gray-200 rounded-lg transition duration-300 hover:border-yellow-300 focus:bg-yellow-50 active:bg-yellow-100">
                <div className="relative flex items-center space-x-4 justify-center">
                    <Image unoptimized width={100} height={100} src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                           className="absolute left-0 w-5" alt="google logo"/>
                    <span
                        className="block w-max font-semibold tracking-wide text-gray-700 dark:text-gray-400 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                </div>
            </button>
            <button
                type={"button"}
                onClick={handleAuthGithub}
                className="w-full group h-12 px-6 border-2 border-gray-200 rounded-lg transition duration-300 hover:border-yellow-300 focus:bg-yellow-50 active:bg-yellow-100">
                <div className="relative flex items-center space-x-4 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         className="absolute left-0 w-5 text-gray-700 dark:text-gray-400"
                         viewBox="0 0 16 16">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <span
                        className="block w-max dark:text-gray-400 font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                </div>
            </button>
            <button
                type={"button"}
                onClick={handleAuthClickLab}
                className="w-full group h-12 px-6 border-2 border-gray-200 rounded-lg transition duration-300 hover:border-yellow-300 focus:bg-yellow-50 active:bg-yellow-100">
                <div className="relative flex items-center space-x-4 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="gitlab"
                         className="absolute left-0 w-5 text-gray-700">
                        <path fill="#E24329" d="m12 23.054 4.419-13.6H7.581L12 23.054z"></path>
                        <path fill="#FC6D26" d="m12 23.054-4.419-13.6H1.388L12 23.054z"></path>
                        <path fill="#FCA326"
                              d="M1.388 9.453.045 13.586a.917.917 0 0 0 .332 1.023L12 23.054 1.388 9.453z"></path>
                        <path fill="#E24329"
                              d="M1.388 9.454h6.193L4.919 1.262a.457.457 0 0 0-.87 0L1.388 9.454z"></path>
                        <path fill="#FC6D26" d="m12 23.054 4.419-13.6h6.193L12 23.054z"></path>
                        <path fill="#FCA326"
                              d="m22.612 9.453 1.343 4.133a.917.917 0 0 1-.332 1.023L12 23.054 22.612 9.453z"></path>
                        <path fill="#E24329"
                              d="M22.612 9.454h-6.193l2.662-8.191a.457.457 0 0 1 .87 0l2.661 8.191z"></path>
                    </svg>
                    <span
                        className="block w-max dark:text-gray-400 font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Gitlab</span>
                </div>
            </button>
        </div>
    );
}

export default SocialLogin;