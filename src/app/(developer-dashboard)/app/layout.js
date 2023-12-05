"use client"
import React from 'react';
import DevTabs from "@/components/DevTabs";
import {usePathname} from "next/navigation";
import {Provider} from "react-redux";
import store from "@/store";
function Layout({children}) {
    const pathname = usePathname();
    const developerPath = pathname.includes('/deploy-apps/')

    return (
        <main className={"container"}>
            {!developerPath &&  <DevTabs />}
            <Provider store={store}>
                {children}
             </Provider>

        </main>
    );
}

export default Layout;