import './globals.css'
import MainLayout from "@/components/MainLayout";
import localFont from 'next/font/local'
import React from "react";
const satoshi = localFont({
    src: '../fonts/Satoshi-Medium.ttf',
    display: 'swap',
})

export const metadata = {
    title: {
        template: '%s - AUTOMATEX'
    },
    openGraph:{
        title: 'Home - AUTOMATEX',
        description: 'Deploy your application with AutomateX.',
        url: '/',
        siteName: 'AUTOMATEX',
        images: [
            {
                url: "/public/mainlogo.png" ,
                width: 800,
                height: 600,
            },
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: {
            template: '%s - AUTOMATEX'
        },
        description: 'Collect better data and make better decisions.',
        creator: 'AUTOMATEX Team ',
        images: [
            "/mainlogo.png"
        ],
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={satoshi.className + " dark:bg-gray-900 dark:text-white"}>
            <MainLayout>
                {children}
            </MainLayout>
        </body>
        </html>
    );
}

