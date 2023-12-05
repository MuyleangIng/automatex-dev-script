import react from 'react';
import {Card} from "flowbite-react";

import React from "react";
function ResourceLoadingIndicator() {
    return (
        <div className="mt-10 w-full rounded-xl border-dashed border-2 bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <h3 className="mb-4 text-xl font-bold text-cyan-500 dark:text-white"></h3>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <dt className="text-lg font-medium text-gray-900 dark:text-white"></dt>
                    <Card className={"m-5"}>
                        <div className="flex items-center text-2xl font-bold dark:text-white">
                            <div className="animate-pulse w-4/10 h-full mr-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                            <div className="flowbite-container">
                                <span className="animate-pulse flowbite-text bg-gray-300 dark:bg-gray-700 rounded"></span>
                                <span className={"animate-pulse text-cyan-500 bg-gray-300 dark:bg-gray-700 rounded"}></span>
                                <span className={"animate-pulse text-cyan-500 bg-gray-300 dark:bg-gray-700 rounded"}> </span>
                            </div>
                        </div>
                        <div className="space-y-6 relative">

                        </div>
                        <div className="flex items-center text-2xl font-bold dark:text-white">
                            <div className="flowbite-container">

                            </div>
                        </div>
                        <div className="space-y-6 relative">
                            <figure className="rounded bg-gray-50 p-6 dark:bg-gray-800">
                                <div className="commands-container text-sm text-gray-500 dark:text-gray-400 relative">
                                    <div className="animate-pulse flex items-center mb-4">
                                        <h3 className="animate-pulse text-lg font-semibold text-gray-900 dark:text-white mr-2 bg-gray-300 dark:bg-gray-700 rounded"></h3>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </Card>
                </div>
            </dl>
        </div>

    )
}
export default ResourceLoadingIndicator;