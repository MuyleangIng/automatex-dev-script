'use client'
import React from 'react';
import NavTab from "@/components/deploy-app/NavTab";
import GitAutomateX from "@/components/deploy-app/GitAutomateX";

function Page({params}) {
    return (
        <div>
            <GitAutomateX params={params}/>
        </div>
    );
}

export default Page;