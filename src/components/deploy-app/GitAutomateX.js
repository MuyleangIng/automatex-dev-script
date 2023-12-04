import React, {useState} from 'react';
import {Avatar, Card} from "flowbite-react";
import Image from "next/image";
import {FaCopy} from "react-icons/fa";
import { useGetSingleDeploymentQuery} from "@/store/features/deploy-app/deploySlice";

function GitAutomateX({params}) {
    const { id } = params
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const {data, isLoading, isFetching, error} = useGetSingleDeploymentQuery(id);
    console.log("data-uuid:", data)

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
            setIsTooltipVisible(true);
            // Hide the tooltip after a delay (e.g., 2 seconds)
            setTimeout(() => {
                setIsTooltipVisible(false);
            }, 2000);
        }, (err) => {
            console.error('Unable to copy text to clipboard', err);
        });
    };

    const commands = ['echo "# new"  >> README.md', 'git init', 'git add README.md', 'git commit -m "first commit"', 'git branch -M main', `git remote add origin undifine \n`, 'git push -u origin main',];
    const command2 = [`git remote add origin undifind \n`, 'git branch -M main\n', 'git push -u origin main']
    return (<div>
        <div className="mt-10 w-full rounded-xl border-dashed border-2 bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <h3 className="mb-4 text-xl font-bold text-cyan-500 dark:text-white">
                Quick setup — if you’ve done this kind of thing before
            </h3>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <dt className="text-lg font-medium text-gray-900 dark:text-white">
                        Connect this app to Automatex to enable your repository and deploys.
                    </dt>

                    <Card className={"m-5"}>
                        <div className="flex items-center text-2xl font-bold dark:text-white"
                        >
                            <Image width={100} height={100} alt="" src="/images/branch.png"
                                   className="mr-4 w-4/10 h-full"/>
                            {/*<span>AutomateX-Git  ( Create a new repository on the command line Below )</span>*/}
                            <div className="flowbite-container">
                                <span className="flowbite-text">AutomateX-Git</span> <span
                                className={"text-cyan-500"}>(</span> Create a new repository on the command
                                line<span className={"text-cyan-500 "}> )</span>
                            </div>
                        </div>
                        <div className="space-y-6 relative">
                            <figure className="rounded bg-gray-50 p-6 dark:bg-gray-800">
                                <div
                                    className="commands-container text-sm text-gray-500 dark:text-gray-400 relative"
                                >
                                    <button
                                        className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                        onClick={() => copyToClipboard(commands.join('\n'))}
                                    >
                                        <FaCopy/>
                                    </button>
                                    {isTooltipVisible && (<div
                                        className="absolute top-0 right-10 button  bg-gray-900 text-white p-2 rounded">
                                        Copied
                                    </div>)}
                                    {commands.map((command, index) => (
                                        <div key={index} className="flex items-center mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mr-2">
                                                {command}
                                            </h3>
                                        </div>))}
                                </div>
                            </figure>
                        </div>
                        <div className="flex items-center text-2xl font-bold dark:text-white">
                            <div className="flowbite-container">
                                <span
                                    className={"text-cyan-500"}>(</span> push an existing repository from the command
                                line
                                line<span className={"text-cyan-500 "}> )</span>
                            </div>
                        </div>

                        <div className="space-y-6 relative">
                            <figure className="rounded bg-gray-50 p-6 dark:bg-gray-800">
                                <div
                                    className="commands-container text-sm text-gray-500 dark:text-gray-400 relative"
                                >
                                    {command2.map((command2, index) => (
                                        <div key={index} className="flex items-center mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mr-2">
                                                {command2}
                                            </h3>
                                        </div>))}
                                </div>
                            </figure>
                        </div>
                    </Card>
                </div>
            </dl>
        </div>
    </div>);
}

export default GitAutomateX;