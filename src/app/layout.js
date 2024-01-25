import './globals.css'
import MainLayout from "@/components/MainLayout";
import localFont from 'next/font/local'
import React from "react";
const satoshi = localFont({
    src: '../fonts/Satoshi-Medium.ttf',
    display: 'swap',
})

export const metadata = {
    // Assuming process.env.NEXT_PUBLIC_APP_URL is set to your full base URL, e.g., 'https://www.automatex.com'
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
    manifest: process.env.NEXT_PUBLIC_APP_URL + "/icons/manifest.json",
    title: {
        template: '%s - AUTOMATEX'
    },
    openGraph: {
        title: 'Home - AUTOMATEX',
        description: 'Deploy your application with AutomateX.',
        url: process.env.NEXT_PUBLIC_APP_URL, // Use absolute URL
        siteName: 'AUTOMATEX',
        images: [
            {
                url: process.env.NEXT_PUBLIC_APP_URL + "/public/mainlogo.png", // Absolute URL
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
        creator: 'AUTOMATEX Team',
        images: [
            process.env.NEXT_PUBLIC_APP_URL + "/public/mainlogo.png" // Absolute URL
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

