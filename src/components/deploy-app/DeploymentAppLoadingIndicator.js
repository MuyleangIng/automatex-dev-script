import React from 'react';

function DeploymentAppLoadingIndicator() {
    return (
        <div className={"m-14 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 hover:cursor-wait"}>
            <div className="grid grid-cols-6 gap-2">
                <div className="animate-pulse h-10 w-full bg-gray-200 dark:bg-gray-700 rounded col-span-5"></div>
                <div className={"animate-pulse h-10 bg-gray-200 dark:bg-gray-700 rounded col-span-1"}></div>
            </div>

            <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-14">
                {Array.from({length: 12}).map((_, index) => (
                        <div className="animate-pulse flex space-x-4 shadow p-5 dark:border dark:border-gray-700 rounded">
                            <div className="flex-1 space-y-4 py-1">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded col-span-1"></div>
                                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded col-span-2"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded col-span-1"></div>
                                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded col-span-2"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default DeploymentAppLoadingIndicator;