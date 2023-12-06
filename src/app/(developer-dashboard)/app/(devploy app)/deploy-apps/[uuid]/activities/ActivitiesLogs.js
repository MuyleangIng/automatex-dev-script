'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import {
    selectDeploymentApp,
    selectError,
    selectIsLoading,
} from '@/store/features/deploy-app/deployAppSlice';
import { useGetConsoleLogsQuery } from '@/store/features/deploy-app/deployAppApiSlice';
import { TfiReload } from 'react-icons/tfi';
import { Button } from 'flowbite-react';

function ActivitiesLogs({ params }) {
    const { uuid } = params;
    const [pollingInterval, setPollingInterval] = useState(null);
    const [isPolling, setIsPolling] = useState(false);
    const active = 'dark:!bg-gray-700 dark:!text-white';
    const dataLogs = useGetConsoleLogsQuery(uuid, { ...pollingInterval });
    const containerRef = useRef();

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [dataLogs?.error?.data]);

    return (
        <div className={'mt-10 w-full rounded-xl border-dashed border-2 bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8'}>
            <Button
                color="gray"
                size={'sm'}
                onClick={() => {
                    setIsPolling(!isPolling);
                    setPollingInterval(isPolling ? null : { pollingInterval: 8000 });
                }}
                className={isPolling ? active : ''}
            >
                <TfiReload className={`mr-3 h-4 w-4 ${isPolling ? 'animate-spin' : ''}`} />
                <p className={'text-xs'}>Polling</p>
            </Button>
            <div
                ref={containerRef}
                className="mx-auto p-2 rounded bg-gray-100 dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-40 h-[100vh] overflow-auto space-y-5 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-rounded-full"
            >
                <pre>{dataLogs?.error?.data}</pre>
            </div>
        </div>
    );
}

export default ActivitiesLogs;
