import './globals.css'
import MainLayout from "@/components/MainLayout";
import localFont from 'next/font/local'
import Providers from "@/app/providers";
import { NextAuthProvider } from "@/app/provider";
import { Provider } from "react-redux";
import store from "@/store";

const satoshi = localFont({
    src: '../fonts/Satoshi-Regular.ttf',
    display: 'swap',
})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={satoshi.className + " dark:bg-gray-900 dark:text-white"}>
        <Provider store={store}>
            <Providers>
                <NextAuthProvider>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </NextAuthProvider>
            </Providers>
        </Provider>
        </body>
        </html>
    );
}

