'use client'
import React from 'react';
import {useSession} from "next-auth/react";
import {useSelector} from "react-redux";
import {selectDeploymentApp, selectError, selectIsLoading} from "@/store/features/deploy-app/deployAppSlice";
import {useGetConsoleLogsQuery} from "@/store/features/deploy-app/deployAppApiSlice";



function ActivitiesLogs({params}) {
    const {uuid} = params
    const datav1 = useGetConsoleLogsQuery(uuid)

    return (
        <pre>
            {datav1.error.data}
        </pre>
    );
}
export default ActivitiesLogs;