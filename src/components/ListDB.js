'use client'
import React from 'react';
import HandleContent from './deploy-app/HandleContent';
import DeploymentAppLoadingIndicator from './deploy-app/deploymentLoading/DeploymentAppLoadingIndicator';
import HandlePagination from './deploy-app/HandlePagination';
import SectionAppDeploy from './SectionAppDeploy';
import AfterCreateDbDeployment from './deploy-app/AfterCreateDbDeployment';
import {useGetAllDeploymentDatabasesQuery} from "@/store/features/deploy-db/deployDbApiSlice";


function ListDB() {
  const {data, isLoading, isFetching, error, refetch } = useGetAllDeploymentDatabasesQuery({page: 1, limit: 12});
  // console.log("data from :", data)
  const onPageChange = ({page, perPage}) => {
      refetch({page: page, limit: perPage || 12});
  }
    return (
      
<>
<div className="flex justify-between items-center py-6 px-24">
                <div className=" items-center">
                    <b className="font-bold text-xl">Database</b>
                    <p className="text-lg  mt-10 ">
                        Read and Write directly to your database and store from your project
                    </p>
                </div>

                
            </div>

            <HandleContent
            error={error}
            isLoading={isLoading}
            customLoadingContent={<DeploymentAppLoadingIndicator/>}
        >
            <div className={"m-14 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"}>
                {data?.total === 0  ? <SectionAppDeploy/> : (isLoading ? <DeploymentAppLoadingIndicator/> : <AfterCreateDbDeployment data={data}/> )}
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
      </>
    );
}

export default ListDB;