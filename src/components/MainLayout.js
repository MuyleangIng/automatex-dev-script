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

function MainLayout({children}) {
    const themeMode = useReadLocalStorage("flowbite-theme-mode")
    const pathname = usePathname()
    const developerPath = pathname.includes('/app')

    console.log(themeMode)
    return (
        <Provider store={store}>
            <SessionProvider>
                <Flowbite theme={{
                    mode: 'dark'
                }}>
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