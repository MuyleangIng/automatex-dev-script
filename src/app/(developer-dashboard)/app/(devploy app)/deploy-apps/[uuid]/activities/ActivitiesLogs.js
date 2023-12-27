'use client';
import {Spinner} from "flowbite-react";
import { IoRocketOutline } from "react-icons/io5";
import React, { useState, useEffect, useRef } from 'react';
import {
    useBuildPublicDeploymentAppMutation, useGetConsoleLogByBuildNumberQuery,
    useLazyGetConsoleLogByBuildNumberQuery, useLazyGetSingleDeploymentQuery,
} from '@/store/features/deploy-app/deployAppApiSlice';
import { Button } from 'flowbite-react';
import {useDispatch, useSelector} from 'react-redux';
import {addDeploymentApp, selectDeploymentApp, selectIsLoading} from '@/store/features/deploy-app/deployAppSlice';
import { Accordion } from 'flowbite-react';
import ResourceLoadingIndicator from "@/components/deploy-app/deploymentLoading/resourceLoadingIndicator";
import HandleContent from "@/components/deploy-app/HandleContent";
import HandlePagenation from "@/components/deploy-app/deploymentLoading/HandlePagenation";
function ActivitiesLogs({ params }) {
    const { uuid } = params;
    const dispatch = useDispatch()
    const [fetchDeployment, {data: nData, isLoading: nLoading,isFetching,error: nError}] = useLazyGetSingleDeploymentQuery(uuid);
    const [buildPublicDeployment, { error, data }] = useBuildPublicDeploymentAppMutation();
    const deployment = useSelector(selectDeploymentApp);
    const isLoading = useSelector(selectIsLoading)
    const [deploying, setDeploying] = useState(false);

    const handleDeploy = () => {
        buildPublicDeployment(deployment?.uuid)
            .unwrap()
            .then((res) => {
                setDeploying(true);
            })
            .catch((error) => {
                console.error(`Error deploying app with UUID: ${uuidBuild}`, error);
            });
    }


    useEffect(() => {
        fetchDeployment(uuid)
        dispatch(addDeploymentApp(nData))
    }, [deployment,deploying]);


    return (
        <HandleContent
            error={error}
            isLoading={isLoading}
            customLoadingContent={<ResourceLoadingIndicator/>}
        >
            <div  className={'mt-10 w-full rounded-xl border-dashed border-2 border-gray-300 dark:border-white bg-white pt-4 mb-5 shadow dark:bg-gray-800 overflow-hidden'}
            >
                <div className="flex items-center justify-end mr-2">
                    <Button
                        onClick={handleDeploy}
                        color={"gray"}
                        isProcessing={deploying}
                        disabled={deploying}>
                        <IoRocketOutline className={"h-5 w-5 mr-2"} /> Deploy App
                    </Button>
                </div>
                <br/>
                {deploying && (<BuildingLogItem deployment={nData} buildNumber={deployment?.jobInfo?.nextBuildNumber} deploying={deploying} setDeploying={setDeploying}/>)}
                {deployment && (<MainAccordion deployment={deployment}/>) }

            </div>
        </HandleContent>
    );
}
const MainAccordion = ({deployment}) => {
    const [onLog, setOnLog] = useState('item-0');
    const {
        data,
        handleResultsNumber,
        total
    } = HandlePagenation({ initData: deployment?.jobInfo?.builds });
    return (
        <>
            <Accordion>
                {data.map((item, index) => (<BuildLogItem
                    key={index}
                    depUuid={deployment?.uuid}
                    index={index}
                    item={item}
                    onLog={onLog}
                    setOnLog={setOnLog} />))}
            </Accordion>
            <div className={" flex justify-end gap-2 items-center text-gray-900  dark:bg-gray-800 dark:text-white border-gray-400"}>
                <select
                    className={"dark:bg-gray-800 bg-white border-0 text-gray-900 text-sm rounded-lg focus:ring-0 block dark:border-gray-800 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-0"}
                    onChange={e => handleResultsNumber(e.target.value)}
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="40">40</option>
                    <option value={total}>All</option>
                </select>
            </div>
        </>
        )
}

export default ActivitiesLogs;

const BuildingLogItem = ({deployment,deploying,setDeploying,buildNumber}) => {
    const { data, error, isError, isLoading, isFetching} = useGetConsoleLogByBuildNumberQuery({uuid: deployment?.uuid,number: buildNumber},{ pollingInterval: 1000 });
    const containerRef = useRef();
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
        if(error){
            if (error?.status === 'PARSING_ERROR'){
                if (error.data.includes("Finished: SUCCESS") || error.data.includes("Finished: FAILURE")){
                    setInterval(() => {
                        setDeploying(false)
                    },3000)
                }
            }
        }
    }, [isLoading, isFetching]);

    if (!deploying) return;

    return (
        <Accordion.Panel
            isOpen={true}
        >
            <Accordion.Title>Build {buildNumber}</Accordion.Title>
            <Accordion.Content>
                {error?.status === 'PARSING_ERROR' && (
                    <div
                        ref={containerRef}
                        className="mx-auto p-2 rounded bg-gray-100 dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-40 h-[500px] overflow-x-hidden overflow-y-auto space-y-5 scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-gray-100"
                    >
                        <pre>
                            {error?.data}
                        </pre>
                    </div>
                )}
                <div className={"flex items-center gap-2"}>
                    <Spinner aria-label="Large spinner example" size="lg" />
                    <p>Loading...</p>
                </div>
            </Accordion.Content>
        </Accordion.Panel>
    )
}

const BuildLogItem = ({ item, index,depUuid,onLog,setOnLog }) => {
    const [fetchData,{ data, error, isError, isLoading, isFetching}] = useLazyGetConsoleLogByBuildNumberQuery();
    const [open, setOpen] = useState(false)
    const containerRef = useRef();

    useEffect(() => {
        if (!isLoading && !isFetching){
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [isLoading, isFetching]);

    return (
        <>
        <Accordion.Panel
            isOpen={open && (onLog === 'item-'+index)}
            setOpen={()=>{
                fetchData({uuid: depUuid,number: item.number})
                setOnLog('item-'+index)
                if (onLog === 'item-'+index){
                    setOpen(!open)
                }else {
                    setOpen(true)
                }
            }}
        >
            <Accordion.Title>Log {item?.number}</Accordion.Title>
            <Accordion.Content>
                <div
                    ref={containerRef}
                    className="mx-auto p-2 rounded bg-gray-100 dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-40 h-[500px] overflow-x-hidden overflow-y-auto space-y-5 scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-gray-100"
                >
                    {isLoading || isFetching ? (<div className={"h-full animate-pulse text-cyan-500 bg-gray-300 dark:bg-gray-700 rounded hover:cursor-wait"}></div>) : (
                        <pre>
                            {error?.data}
                        </pre>
                    )}
                </div>
            </Accordion.Content>
        </Accordion.Panel>
        </>

    )
}
