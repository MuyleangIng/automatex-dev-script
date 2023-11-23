'use client';
import React from 'react';
import {Provider} from "react-redux";
import {Flowbite} from "flowbite-react";
import {SessionProvider} from "next-auth/react";
import store from "@/store";
import HandleNavbar from "@/components/HandleNavbar";
import HeadingBar from "@/components/HeadingBar";
import MainFooter from "@/components/Footer";
import {useTheme} from "next-themes";
import {usePathname} from "next/navigation";

function MainLayout({children}) {
    const {theme, setTheme} = useTheme()
    const pathname = usePathname()
    const developerPath = pathname.includes('/app')

    return (
        <Provider store={store}>
            <SessionProvider>
                <Flowbite theme={{
                    dark: theme === 'dark',  // Set the theme based on the current theme from useTheme
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