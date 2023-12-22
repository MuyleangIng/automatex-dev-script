"use client"
import React from 'react';
import CardDeploymentApp from "@/components/deploy-app/CardDeploymentApp";

function AfterCreateFrontendDeployment({data}) {
    return (<>
        {/*loop the card component*/}
        <div className=" container grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-14">
            {data?.list?.map((item, index) => (<CardDeploymentApp key={index} deployApp={item}/>))}
        </div>
    </>);
}

export default AfterCreateFrontendDeployment;