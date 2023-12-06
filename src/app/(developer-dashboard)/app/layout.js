"use client"
import React from 'react';
import DevTabs from "@/components/DevTabs";
import {usePathname} from "next/navigation";
function Layout({children}) {
    const pathname = usePathname();
    const developerPath = pathname.includes('/deploy-apps/')

    return (
        <main className={"container"}>
            {!developerPath &&  <DevTabs />}
            {children}
        </main>
    );
}

export default Layout;