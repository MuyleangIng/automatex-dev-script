"use client"

import LoadingIndicator from "@/components/LoadingIndicator";
import {signIn, signOut, useSession} from "next-auth/react";
import React, {useCallback} from "react";
import Image from "next/image";


export default function AXGithubButton(){
    const { data: session ,status,loading } = useSession()

    const handleAuthGithub = async () => {
        if (!session) {
            // If the user is not authenticated, initiate the sign-in
            await signIn('github', { callbackUrl: '/app/dashboard' });
            popupCenter(url, "Sign In with your Github Account");
        } else {
            // If the user is already authenticated, you may want to handle sign-out
            await signOut({ callbackUrl: '/' });
        }
    };

    const popupCenter = (url, title) => {
        const dualScreenLeft = window.screenLeft ?? window.screenX;
        const dualScreenTop = window.screenTop ?? window.screenY;

        const width =
            window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

        const height =
            window.innerHeight ??
            document.documentElement.clientHeight ??
            screen.height;

        const systemZoom = width / window.screen.availWidth;

        const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
        const top = (height - 550) / 2 / systemZoom + dualScreenTop;

        const newWindow = window.open(
            url,
            title,
            `width=${500 / systemZoom},height=${550 / systemZoom
            },top=${top},left=${left}`
        );

        newWindow?.focus();
    };
    return(
        <>
            <button
                // onClick={() => popupCenter("/auth/login", "Sign In with you google account")}
                // onClick={LoginWithGoogle}
                onClick={handleAuthGithub}
                type="button"
                className="w-full text-blue-800 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none
                                focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center
                                inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-blue-100
                                dark:hover:bg-gray-700 mr-2 mb-2 border border-gray-300"
            >
                <LoadingIndicator width={7} height={7} className={status==='loading' ? '' :'hidden' } />
                <Image
                    className="w-4 h-4 mr-2 -ml-1"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    unoptimized
                />
                Sign up with Github
            </button>
        </>
    )
}