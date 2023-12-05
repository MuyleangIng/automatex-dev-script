import React from 'react';
import NavTab from "@/components/deploy-app/NavTab";

function Layout({children}) {
    return (
        <div className={"container"}>
            <NavTab/>
            {children}
        </div>

    );
}

export default Layout;