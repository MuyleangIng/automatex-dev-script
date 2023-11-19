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
    const { theme, setTheme } = useTheme();  // Use the useTheme hook

    // const toggleTheme = () => {
    //     setTheme(theme === 'dark' ? 'light' : 'dark');  // Toggle between dark and light themes
    // };
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
                    <MainFooter/>
                </Flowbite>
            </SessionProvider>
        </Provider>
    );
}

export default MainLayout;