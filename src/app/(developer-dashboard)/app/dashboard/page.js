'use client'
import React from 'react';
import SectionAppDeploy from "@/components/SectionAppDeploy";
import AfterCreateFrontendDeployment from "@/components/deploy-app/AfterCreateFrontendDeployment";
import {useGetAllDeploymentAppsQuery} from "@/store/features/deploy-app/deploySlice";

function Page() {
    const {data, isLoading, isFetching, error} = useGetAllDeploymentAppsQuery({page: 1, limit: 15});
    console.log("data-sadda:", data)
    //i want to check total data if there is no data then i want to show the sectionAppDeploy component else i want to show the AfterCreateFrontendDeployment component
    return (<>
        <div className={"m-14 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"}>
            {data?.total === 0 ? <SectionAppDeploy/> : <AfterCreateFrontendDeployment/>}
        </div>
    </>);
}

export default Page;