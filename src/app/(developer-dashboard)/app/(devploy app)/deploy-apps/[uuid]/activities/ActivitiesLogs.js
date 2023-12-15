'use client';
import React, {useState, useEffect, useRef} from 'react';
import {
    useBuildPublicDeploymentAppMutation,
    useCreateDeploymentAppMutation,
    useGetActivitiesQuery,
    useGetAllDeploymentAppsQuery,
    useGetConsoleLogsQuery
} from '@/store/features/deploy-app/deployAppApiSlice';
import {TfiReload} from 'react-icons/tfi';
import {Accordion, Button} from 'flowbite-react';
import {IoRocketOutline} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {selectDeploymentApp} from "@/store/features/deploy-app/deployAppSlice";
import {useGetProjectsQuery} from "@/store/api/apiGitSlice";

function ActivitiesLogs({params}) {
    const {uuid} = params;
    const [buildPublicDeployment, {isLoading, error, data}] = useBuildPublicDeploymentAppMutation();
    const deployment = useSelector(selectDeploymentApp)
    const dispatch = useDispatch(); // Get the dispatch function
    const [pollingInterval, setPollingInterval] = useState(null);
    const [isPolling, setIsPolling] = useState(false);
    const active = 'dark:!bg-gray-700 dark:!text-white';
    const { data: gitProjects } = useGetProjectsQuery();

    // const dataLogs = useGetConsoleLogsQuery(uuid, {...pollingInterval});
    // const containerRef = useRef();
    // useEffect(() => {
    //     if (containerRef.current) {
    //         containerRef.current.scrollTop = containerRef.current.scrollHeight;
    //     }
    // }, [dataLogs?.error?.data]);
    const handleDeploy = () => {
        buildPublicDeployment({uuid}).unwrap()
            .then((res) => {
                console.log(`Successfully deployed app with UUID: ${uuid}`);
            })
            .catch((err) => {
                console.error(`Error deploying app with UUID: ${uuid}`, err);
                if (err.status === 'FETCH_ERROR') {
                    console.error('There was an error while fetching data:', err.message);
                }
            });
        console.log(`Deploying app with UUID: ${uuid}`);
    }
    console.log("uuid from :", uuid)
    console.log("deployment from :", buildPublicDeployment)

    return (


        <div className={'mt-10 w-full rounded-xl border-dashed border-2 bg-white p-4 shadow dark:bg-gray-800'}>

            <br/>

            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>What is Flowbite?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS
                            including buttons,
                            dropdowns, modals, navbars, and more.
                        </p>
                        {/*<pre>{datav1}</pre>*/}
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out this guide to learn how to&nbsp;
                            <a
                                href="https://flowbite.com/docs/getting-started/introduction/"
                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                                get started&nbsp;
                            </a>
                            and start developing websites even faster with components on top of Tailwind CSS.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is first conceptualized and designed using the Figma software so everything you see
                            in the library
                            has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out the
                            <a href="https://flowbite.com/figma/"
                               className="text-cyan-600 hover:underline dark:text-cyan-500">
                                Figma design system
                            </a>
                            based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT
                            license, whereas
                            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and
                            standalone
                            components, whereas Tailwind UI offers sections of pages.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as
                            there is no
                            technical reason stopping you from using the best of two worlds.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                            <li>
                                <a href="https://flowbite.com/pro/"
                                   className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    Flowbite Pro
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://tailwindui.com/"
                                    rel="nofollow"
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    Tailwind UI
                                </a>
                            </li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>


            {/*<Button*/}
            {/*    color="gray"*/}
            {/*    size={'sm'}*/}
            {/*    onClick={() => {*/}
            {/*        setIsPolling(!isPolling);*/}
            {/*        setPollingInterval(isPolling ? null : {pollingInterval: 8000});*/}
            {/*    }}*/}
            {/*    className={isPolling ? active : ''}*/}
            {/*>*/}
            {/*    <TfiReload className={`mr-3 h-4 w-4 ${isPolling ? 'animate-spin' : ''}`}/>*/}
            {/*    <p className={'text-xs'}>Polling</p>*/}
            {/*</Button>*/}
            {/*<div*/}
            {/*    ref={containerRef}*/}
            {/*    className="mx-auto p-2 rounded bg-gray-100 dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-40 h-[100vh] overflow-auto space-y-5 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-rounded-full"*/}
            {/*>*/}
            {/*    <pre>{dataLogs?.error?.data}</pre>*/}
            {/*</div>*/}
            {/*<div*/}
            {/*    className="w-11/12 group h-20 p-4 mx-auto border-2 mt-10 border-gray-200 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800">*/}

            {/*    <div className="flex flex-col leading-4 text-sm py-2 items-center space-x-4 pb-2 text-center">*/}
            {/*        <div className="text-base font-bold text-cool-blue-150 dark:text-gray-300">&quot;Your App was*/}
            {/*            Success Deploy&quot;</div>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </div>
    );
}

export default ActivitiesLogs;
