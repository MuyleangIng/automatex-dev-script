import React from 'react';
import {Button} from "flowbite-react";

function SectionAppDb(props) {
    return (
        <>
            <div className="flex justify-between items-center py-6 px-24">
                <div className="flex items-center">
                    <b className="font-bold text-xl">Database</b>
                </div>

                <button className="rounded-lg bg-gray-800 py-2.5 px-5 text-sm text-white font-medium">
                    Create Database
                </button>
            </div>

            <div className="relative flex justify-center items-center w-full h-screen bg-slate-200 dark:bg-gray-800">
                <div className="flex flex-col items-center bg-whitesmoke rounded-lg w-full max-w-3xl p-8">
                    <div className="text-3xl mb-4">
                        <b className="leading-[30px]">Create Database</b>
                        <p className="text-lg leading-[30px]">
                            Create database and store that you can connect to your team’s project
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default SectionAppDb;