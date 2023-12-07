'use client'
import React from 'react';
import {useSession} from "next-auth/react";
import {useSelector} from "react-redux";
import {selectDeploymentApp, selectError, selectIsLoading} from "@/store/features/deploy-app/deployAppSlice";
import ActivitiesLogs from "@/app/(developer-dashboard)/app/(devploy app)/deploy-apps/[uuid]/activities/ActivitiesLogs";



function Page({params}) {
    return (
        <div>
       <ActivitiesLogs params={params}/>
         </div>
    );
}

export default Page;