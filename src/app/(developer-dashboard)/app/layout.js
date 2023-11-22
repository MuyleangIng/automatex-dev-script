import React from 'react';
import DevTabs from "@/components/DevTabs";

function Layout({children}) {
    return (
        <main className={"container"}>
            <DevTabs />
            {children}
        </main>
    );
}

export default Layout;