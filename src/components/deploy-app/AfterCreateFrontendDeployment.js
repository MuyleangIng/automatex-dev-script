"use client"
import React from 'react';
import CardDeploymentApp from "@/components/deploy-app/CardDeploymentApp";
import {Alert} from "flowbite-react";
import {HiInformationCircle} from "react-icons/hi";
import DeploymentAppLoadingIndicator from "@/components/deploy-app/deploymentLoading/DeploymentAppLoadingIndicator";

function AfterCreateFrontendDeployment({data,isLoading,isFetching}) {
    return (<>
        {/*loop the card component*/}
        {isLoading || isFetching ? <DeploymentAppLoadingIndicator/> : (
            <div className=" container grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-14">
                {data?.total === 0 && (<div className="col-span-1 sm:col-span-2 lg:col-span-4 ">
                        <Alert color="failure" icon={HiInformationCircle}>
                            <span className="font-medium">No Application with such name.</span>
                        </Alert>
                    </div>)}
                {data?.list?.map((item, index) => (<CardDeploymentApp key={index} deployApp={item}/>))}
            </div>
        )}
    </>);
}

export default AfterCreateFrontendDeployment;