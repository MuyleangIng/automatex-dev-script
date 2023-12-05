'use client'
import React from 'react';
import SectionAppDeploy from "@/components/SectionAppDeploy";
import AfterCreateFrontendDeployment from "@/components/deploy-app/AfterCreateFrontendDeployment";
import {useGetAllDeploymentAppsQuery} from "@/store/features/deploy-app/deployAppApiSlice";
import HandleContent from "@/components/deploy-app/HandleContent";
import DeploymentAppLoadingIndicator from "@/components/deploy-app/DeploymentAppLoadingIndicator";
import HandlePagination from "@/components/deploy-app/HandlePagination";

function Page() {
    const {data, isLoading, isFetching, error, refetch } = useGetAllDeploymentAppsQuery({page: 2, limit: 12});
    console.log("data from :", data)
    const onPageChange = ({page, perPage}) => {
        refetch({page: page, limit: perPage || 12});
    }
    return (
        <HandleContent
            error={error}
            isLoading={isLoading}
            customLoadingContent={<DeploymentAppLoadingIndicator/>}
        >
            <div className={"m-14 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"}>
                {data?.total === 0 ? <SectionAppDeploy/> : (isLoading ? <DeploymentAppLoadingIndicator/> : <AfterCreateFrontendDeployment data={data}/> )}
            </div>
            <div className="my-5">
                <HandlePagination
                    data={data}
                    isLoading={isLoading}
                    onPageChange={onPageChange}
                    defaultPerPage={12}
                    selectBg={"dark:bg-gray-900"}
                />
            </div>
        </HandleContent>
    );
}

export default Page;