import React, {useEffect} from 'react';
import {FaGithub} from "react-icons/fa";
import {Alert, Button, Card, Label} from "flowbite-react";
import {GrDeploy} from "react-icons/gr";
import {AiOutlineBranches} from "react-icons/ai";
import {useSession} from "next-auth/react";
import {useSelector, useDispatch} from "react-redux";
import {selectDeploymentApp, selectError, selectIsLoading} from "@/store/features/deploy-app/deployAppSlice";
import ResourceLoadingIndicator from "@/components/deploy-app/deploymentLoading/resourceLoadingIndicator";
import HandleContent from "@/components/deploy-app/HandleContent";
import Link from "next/link";
import Image from "next/image";
import {fetchGitProjects, selectAllProjects} from "@/store/api/apiGitSlice";
import {TbWorldPlus} from "react-icons/tb";


function OverViewDeploy(params) {
    const dispatch = useDispatch();
    const {loading} = useSession()
    const data = useSelector(selectDeploymentApp)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    const gitProjects = useSelector(selectAllProjects);
    useEffect(() => {
        dispatch(fetchGitProjects());
    }, []);

    return (<HandleContent
        error={error}
        isLoading={isLoading || loading || !data}
        customLoadingContent={<ResourceLoadingIndicator/>}
    >

        <Card className={"mt-14"}>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-500  dark:text-cyan-500 text-center ">
                Deployments Information
            </h2>
            <div className=" grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="col-span-1 grid grid-cols-1 gap-y-3">
                    <div className="grid grid-cols-1 gap-y-2">
                        <Label htmlFor="organization" className={'text-base-color-light dark:text-base-color-dark'}>Deployment Service:</Label>
                        <Alert color="yellow" icon={GrDeploy}>
                            <span className="font-medium">{data?.name}</span>
                        </Alert>
                    </div>
                    <div className="grid grid-cols-1 gap-y-2">
                        <Label htmlFor="organization"
                               className={'text-base-color-light dark:text-base-color-dark'}>Domain:</Label>
                        <Alert color="success" className={"transition-transform duration-500 cursor-pointer ease-in-out transform hover:scale-105"} icon={TbWorldPlus }>
                            {data?.jobInfo?.color === 'blue' ? (
                                <Link className="font-medium" target="_blank" rel="noopener noreferrer"
                                      href={`https://${data?.domains[0]?.fullSubdomain}`} passHref>
                                    {data?.domains[0]?.fullSubdomain}
                                </Link>) : (data?.jobInfo?.color === 'red' ? (
                                    <div className="font-medium" style={{cursor: 'not-allowed', color: 'grey'}}>
                                        {data?.domains[0]?.fullSubdomain}
                                    </div>) : null)}
                        </Alert>
                    </div>
                    <div className="grid grid-cols-1 gap-y-2">
                        <Label htmlFor="department" className={'text-base-color-light dark:text-base-color-dark'}>Source
                            From:</Label>
                        <Alert color="teal" icon={AiOutlineBranches}>
                            <span className="font-medium ">{data?.defaultBranch}</span>
                        </Alert>
                        <Alert color="red" icon={FaGithub}>
                            <span className="font-medium ">{data?.repo?.http_url_to_repo}</span>
                        </Alert>
                    </div>
                </div>
                <div
                    className="col-span-2 grid grid-cols-1 gap-y-3 border-dashed border-2 mt-6 rounded flex justify-center items-center">
                    <section className="bg-white dark:bg-gray-900">
                        <div className="mx-auto max-w-screen-xl items-center py-2 sm:py-6 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
                            <Image height={100} width={100}
                                alt=""
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                                className="w-full dark:hidden"
                            />
                            <Image height={100} width={100}
                                alt=""
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                                className="hidden w-full dark:block"
                            />
                            <div className="mt-4 md:mt-0">
                                <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                    Code Quality Metrics
                                </h2>
                                <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg">
                                    SonarQube is a tool that assesses and enhances code quality by offering metrics and indicators .
                                </p>
                                <Button href={`https://sonarqube.automatex.dev/dashboard?id=${data?.name}-automatex`} target={"_blank"}  className="w-fit [&>span]:items-center bg-cyan-500 hover:bg-cyan-700">
                                    SonarQube
                                    <svg
                                        className="-mr-1 ml-2 h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Card>
        {/*<h3 className="mt-10 text-xl font-bold dark:text-white ">*/}
        {/*    Activities Feed*/}
        {/*</h3>*/}
        {/*<ActivitiesFeedTable/>*/}
    </HandleContent>);
}

export default OverViewDeploy;