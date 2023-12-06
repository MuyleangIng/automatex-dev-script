import React from 'react';
import NavTab from "@/components/deploy-app/NavTab";

function Layout({children, params}) {
    const {uuid} = params
    return (
        <div className={"container"}>
            <NavTab uuid={uuid}/>
            {children}
        </div>

    );
}

export default Layout;