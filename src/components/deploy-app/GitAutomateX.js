import React, {useEffect, useState} from 'react';
import { CiFileOn } from "react-icons/ci";

import {Card} from "flowbite-react";
import Image from "next/image";
import { FaFolder } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { IoIosGitBranch } from "react-icons/io";
import { IoMdPricetags } from "react-icons/io";



import {FaCopy} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {
    selectDeploymentApp,
    selectError,
    selectIsLoading
} from "@/store/features/deploy-app/deployAppSlice";
import HandleContent from "@/components/deploy-app/HandleContent";
import ResourceLoadingIndicator from "@/components/deploy-app/deploymentLoading/resourceLoadingIndicator";
import {useSession} from "next-auth/react";
import {selectProjectById, selectProjectTree} from "@/store/api/apiGitSlice";
import {fetchGitProjectById, fetchProjectTree} from "@/store/features/gitlab/gitApi";
import {Table} from "flowbite-react";

function GitAutomateX({params}) {
    const dispatch = useDispatch()
    const {loading } = useSession()
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const data = useSelector(selectDeploymentApp)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    const gitProjects = useSelector(selectProjectById);
    const projectTree = useSelector(selectProjectTree);

    useEffect(() => {
        dispatch(fetchGitProjectById(data?.repoId));
    }, [data?.repoId]);
    console.log("gitProjects", gitProjects?.id);
    console.log("data",data?.repoId)

    useEffect(() => {
        dispatch(fetchProjectTree(data?.repoId));
    }, []);

    console.log("projectTree", projectTree);

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

    const style = "mt-[25px] text-[20px] text-des-light dark:text-des-dark flex items-center gap-2 px-2.5 py-1.5 focus:outline focus:outline-1 rounded-md focus:outline-gray-700 dark:focus:outline-white";
    const commands = ['git init', 'git add  .', 'git commit -m "first commit"', 'git branch -M main', `git remote add origin ${data?.repo?.http_url_to_repo || 'default_value'} \n`, 'git push -u origin main',];
    const command2 = [
        `git remote add origin ${data?.repo?.http_url_to_repo || 'default_value'} \n`,
        'git branch -M main\n',
        'git push -u origin main'
    ]
    return (
        <HandleContent
            error={error}
            isLoading={isLoading || loading || !data}
            customLoadingContent={<ResourceLoadingIndicator/>}
        >
            <>
                <div className={'flex'}>
                    <div
                        className={style}>
                        <span><FaGitAlt/></span>
                        master
                    </div>
                    <div className={style}>
                    <span><IoIosGitBranch/></span>
                        10 branch
                    </div>
                    <div
                        className={style}>
                        <span><IoMdPricetags /></span>
                        10 branch
                    </div>
                </div>
                {gitProjects?.empty_repo === false ? (
                    <div
                        className="mt-10 w-full rounded-xl border-dashed border-2 bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <Card className={"m-5"}>
                                    <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600 text-2xl">
                                        <Table.Head className="bg-gray-100 dark:bg-gray-700">
                                            <Table.HeadCell >
                                                <div className={'flex items-center gap-4'}>
                                                    <Image
                                                        src={gitProjects.owner.avatar_url ? gitProjects.owner.avatar_url: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'}
                                                        alt="user"
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full"
                                                    />
                                                    <div className={'text-lg font-medium'}>{gitProjects?.owner?.name}</div>
                                                </div>
                                            </Table.HeadCell>
                                            <Table.HeadCell className={'items-end'}>
                                                <div className={'text-sm font-medium'}>Branch: {gitProjects?.default_branch}</div>
                                            </Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                            {projectTree?.map((file, index) => (
                                                <Table.Row key={index}>
                                                    <Table.Cell className={'flex items-center gap-2'} >
                                                        {file.type === 'blob' ? (
                                                            <><CiFileOn />{file.name}</>
                                                        ) : file.type === 'tree' ? (
                                                            <><FaFolder />{file.name}</>
                                                        ) : null}
                                                    </Table.Cell>
                                                </Table.Row>
                                            ))}
                                        </Table.Body>
                                    </Table>
                                </Card>
                            </div>
                        </dl>
                    </div>

                ) : (
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
                                            <span className={"text-cyan-500"}>(</span> push an existing repository from the command line
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
                )}
            </>

        </HandleContent>);
}

export default GitAutomateX;