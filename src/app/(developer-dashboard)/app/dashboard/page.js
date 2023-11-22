'use client'
import React from 'react';
import SectionAppDeploy from "@/components/SectionAppDeploy";

function Page() {
    return (
        <div className={"m-4 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"}>
            <h1>Welcome to Developer Dashboard</h1>
            <SectionAppDeploy/>
        </div>
    );
}

export default Page;