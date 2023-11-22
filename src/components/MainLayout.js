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


function MainLayout({ children }) {
    const { theme, setTheme } = useTheme();

    const containerStyle = {
        backgroundColor: theme === 'dark' ? '#1a202c' : '#f5f5f5', // Set dark and light background colors
    };

    return (
        <Provider store={store}>
            <SessionProvider>
                <Flowbite theme={{
                    dark: theme === 'dark',  // Set the theme based on the current theme from useTheme
                }}>

                    {/*<button onClick={toggleTheme}>*/}
                    {/*    Toggle Theme*/}
                    {/*</button>*/}

                    <HeadingBar/>
                    <HandleNavbar/>
                    {children}
                    <MainFooter />
                </Flowbite>
            </SessionProvider>
        </Provider>
        
    );
}

export default MainLayout;