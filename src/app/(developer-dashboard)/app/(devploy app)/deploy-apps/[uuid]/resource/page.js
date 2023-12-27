'use client'
import React from 'react';
import GitAutomateX from "@/components/deploy-app/GitAutomateX";

function Page({params}) {
    return (<GitAutomateX params={params}/> );
}

export default Page;