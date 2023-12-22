'use client';
import {Card,Table} from "flowbite-react";
import { IoRocketOutline } from "react-icons/io5";

import React, { useState, useEffect, useRef } from 'react';
import {
    useBuildPublicDeploymentAppMutation,
    useGetConsoleLogsQuery,
} from '@/store/features/deploy-app/deployAppApiSlice';
import { TfiReload } from 'react-icons/tfi';
import { FaSpinner } from 'react-icons/fa';
import { Button } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { selectDeploymentApp } from '@/store/features/deploy-app/deployAppSlice';
import { toast } from 'react-toastify';
import ToastConfig from '@/components/deploy-app/deploymentLoading/ToastConfig';
import { Accordion } from 'flowbite-react';
function ActivitiesLogs({ params }) {
    const { uuid } = params;
    const [buildPublicDeployment, { isLoading, error, data }] = useBuildPublicDeploymentAppMutation();
    const deployment = useSelector(selectDeploymentApp);
    const [pollingInterval, setPollingInterval] = useState(null);
    const [isPolling, setIsPolling] = useState(false);
    const [isLoadingSpinner, setIsLoadingSpinner] = useState(false);
    const active = 'dark:!bg-gray-700 dark:!text-white';
    const [toastShown, setToastShown] = useState(false);
    const [hasSuccess, setHasSuccess] = useState(false);
    const [hasFailure, setHasFailure] = useState(false);
    const dataLogs = useGetConsoleLogsQuery(uuid, { ...pollingInterval });
    const containerRef = useRef();
    const uuidBuild = deployment?.uuid;

    const handleDeploy = () => {
        buildPublicDeployment(uuidBuild).unwrap()
            .then((data) => {
                console.log('data', data);
                setIsPolling(true);
                setPollingInterval({ pollingInterval: 2000 });
            })
            .catch((error) => {
                console.error(`Error deploying app with UUID: ${uuidBuild}`, error);
            });
        setIsPolling(true);
        setPollingInterval({ pollingInterval: 2000 });
    }
    useEffect(() => {
        if (isPolling) {
            setIsLoadingSpinner(true);
        }
    }, [isPolling]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [dataLogs?.error?.data]);

    useEffect(() => {
        let logs = dataLogs?.error?.data;
        if (typeof logs === 'string') { // Check if logs is a string
            let lines = logs.split('\n');
            lines = lines.filter(line => !line.includes('TASK')); // Filter out lines containing 'TASK ['
            logs = lines.join('\n');
            let filteredLines = lines.filter(
                (line) => line.includes('Finished: SUCCESS') || line.includes('Finished: FAILURE')
            );
            if (filteredLines.length > 0) {
                const newHasSuccess = filteredLines.some((line) => line.includes('Finished: SUCCESS'));
                const newHasFailure = filteredLines.some((line) => line.includes('Finished: FAILURE'));
                setHasSuccess(newHasSuccess);
                setHasFailure(newHasFailure);

                if (newHasSuccess || newHasFailure) {
                    setIsPolling(false);
                    setPollingInterval(null);
                    setIsLoadingSpinner(false);
                    setToastShown(true);
                }
            }
        } else {
            console.log('logs is not a string');
        }
    }, [dataLogs?.error?.data, toastShown, hasFailure, hasSuccess]);
    useEffect(() => {
        if (hasSuccess || hasFailure) {
            toast[hasSuccess ? 'success' : 'error'](
                `Deployment ${hasSuccess ? 'finished successfully' : 'failed'}!`
            );
        }
    }, [hasSuccess, hasFailure]);
    return (
        <>
            <ToastConfig />
            <div  className={'mt-10 w-full rounded-xl border-dashed border-2 bg-white p-4 shadow dark:bg-gray-800'}
            >

                <div className="flex items-center justify-end">
                    <Button onClick={handleDeploy}  disabled={isPolling || isLoadingSpinner}>
                        <IoRocketOutline className={"h-5 w-5 mr-2"} /> Deploy App
                    </Button>
                </div>
                <br/>

                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>{deployment?.jobInfo?.displayName}</Accordion.Title>
                        <Accordion.Content>
                            {(deployment?.jobInfo?.color === 'red' || deployment?.jobInfo?.color === 'blue')  ? (
                                <div className={'mt-10 w-full rounded-xl border-dashed border-2 bg-white p-4 shadow dark:bg-gray-800'}>
                                    <Button
                                        color="gray"
                                        size={'sm'}
                                        onClick={() => {
                                            setIsPolling(!isPolling);
                                            setPollingInterval(isPolling ? null : { pollingInterval: 2000 });
                                            setIsLoadingSpinner(isPolling);
                                        }}

                                        className={isPolling ? active : ''}
                                    >
                                        {isLoadingSpinner ? (
                                            <FaSpinner className={`mr-3 h-4 w-4 animate-spin`} />
                                        ) : (
                                            <TfiReload className={`mr-3 h-4 w-4 ${isPolling ? 'animate-spin' : ''}`} />
                                        )}
                                        <p className={'text-xs'}>Polling</p>
                                    </Button>
                                    <div
                                        ref={containerRef}
                                        className="mx-auto p-2 rounded bg-gray-100 dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-40 h-[100vh] overflow-auto space-y-5 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-rounded-full"
                                    >
                                        <pre>{dataLogs?.error?.data}</pre>
                                    </div>
                                    <div
                                        className="w-11/12 group h-20 p-4 mx-auto border-2 mt-10 border-gray-200 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800"
                                    >
                                        {isLoadingSpinner ? (
                                            <div className="flex items-center justify-center h-full">
                                                <FaSpinner className="h-6 w-6 animate-spin text-gray-500" />
                                            </div>
                                        ) : (
                                            <div
                                                className="flex flex-col leading-4 text-sm py-2 items-center space-x-4 pb-2 text-center"
                                            >
                                                <div className="text-base font-bold text-cool-blue-150 dark:text-gray-300">
                                                    {hasSuccess ? 'Your App was Successfully Deployed' : 'Deployment Failed'}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div>Error: Data logs not available</div>
                            )}
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                has a design equivalent in our Figma file.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Check out the
                                <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    Figma design system
                                </a>
                                based on the utility classes from Tailwind CSS and components from Flowbite.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </>
    );
}

export default ActivitiesLogs;
