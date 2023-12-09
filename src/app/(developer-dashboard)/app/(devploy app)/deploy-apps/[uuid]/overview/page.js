'use client'
import React from 'react';
import OverViewDeploy from "@/components/deploy-app/OverViewDeploy";

function Page({params}) {
    return (
        <div>
        <OverViewDeploy params={params}/>
        </div>
    );
}

export default Page;