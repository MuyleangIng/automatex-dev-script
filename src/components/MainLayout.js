'use client'

import React from 'react';
import {Provider} from "react-redux";
import {Flowbite} from "flowbite-react";
import {SessionProvider} from "next-auth/react";
import store from "@/store";
import HandleNavbar from "@/components/HandleNavbar";
import HeadingBar from "@/components/HeadingBar";
import MainFooter from "@/components/Footer";
import {usePathname} from "next/navigation";
import {useReadLocalStorage} from "usehooks-ts";
import Navbar from '../app/(admin-dashboard)/components/Navbar';

function MainLayout({children}) {
    const themeMode = useReadLocalStorage("flowbite-theme-mode")
    const pathname = usePathname()
    const developerPath = pathname.includes('/app')
    const isAdminPath =  pathname.includes('/admin')

    if(isAdminPath) {
        return (
            <Provider store={store}>
                <SessionProvider>
                    <Flowbite theme={{ dark: themeMode ? (themeMode==='dark') : true }} >
                        <Navbar />
                        {children}
                    </Flowbite>
                </SessionProvider>
            </Provider>
        );
    }

    return (
        <Provider store={store}>
            <SessionProvider>
                <Flowbite theme={{ dark: themeMode ? (themeMode==='dark') : true }} >
                    {!developerPath && (<HeadingBar/>)}
                    <HandleNavbar/>
                    {children}
                    {!developerPath && <MainFooter/>}
                </Flowbite>
            </SessionProvider>
        </Provider>
    );
}

export default MainLayout;