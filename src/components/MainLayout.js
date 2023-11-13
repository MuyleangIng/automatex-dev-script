'use client';
import React from 'react';
import {Provider} from "react-redux";
import {Flowbite} from "flowbite-react";
import {SessionProvider} from "next-auth/react";
import store from "@/store";
import HandleNavbar from "@/components/HandleNavbar";
import HeadingBar from "@/components/HeadingBar";
import MainFooter from "@/components/Footer";


function MainLayout({ children }) {
    return (
        <Provider store={store}>
            <SessionProvider>
                <Flowbite theme={{
                    dark: false
                }}>

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