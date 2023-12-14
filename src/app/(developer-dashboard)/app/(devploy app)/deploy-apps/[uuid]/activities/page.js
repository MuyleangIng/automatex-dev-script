'use client'
import React from 'react';
import ActivitiesLogs from "@/app/(developer-dashboard)/app/(devploy app)/deploy-apps/[uuid]/activities/ActivitiesLogs";

function Page({params}) {
    return (<ActivitiesLogs params={params}/>);
}

export default Page;