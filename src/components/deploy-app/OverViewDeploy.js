import React, {useEffect} from 'react';
import {FaGithub} from "react-icons/fa";
import {Alert, Button, Card, Label, Textarea, TextInput} from "flowbite-react";
import {GrDeploy} from "react-icons/gr";
import {PiGoogleCardboardLogo} from "react-icons/pi";
import {AiOutlineBranches} from "react-icons/ai";
import ActivitiesFeedTable from "@/components/deploy-app/ActivitiesFeedTable";
import {useSession} from "next-auth/react";
import {useSelector,useDispatch} from "react-redux";
import {selectDeploymentApp, selectError, selectIsLoading} from "@/store/features/deploy-app/deployAppSlice";
import ResourceLoadingIndicator from "@/components/deploy-app/deploymentLoading/resourceLoadingIndicator";
import HandleContent from "@/components/deploy-app/HandleContent";
import Link from "next/link";
import Image from "next/image";
import {fetchGitProjects, selectAllProjects} from "@/store/api/apiGitSlice";
import { HiCubeTransparent } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";



function OverViewDeploy(params) {
    const dispatch = useDispatch();

    const {loading } = useSession()
    const data = useSelector(selectDeploymentApp)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)

    const gitProjects = useSelector(selectAllProjects);
    console.log("gitProjects", gitProjects);
    console.log("data from overview deploy :", data.jobInfo.color)
    useEffect(() => {
        dispatch(fetchGitProjects());
    }, []);
    return (<HandleContent
        error={error}
        isLoading={isLoading || loading || !data}
        customLoadingContent={<ResourceLoadingIndicator/>}
    >

        <Card className={"mt-14"}>
            <h3 className="mb-4 text-xl font-medium text-base-color-light dark:text-base-color-dark text-center ">
                Deployment Information
            </h3>
                <div className=" grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="col-span-1 grid grid-cols-1 gap-y-3">
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="organization" className={'text-base-color-light dark:text-base-color-dark'}>Deployment Service:</Label>
                            <Alert  color="success" icon={GrDeploy }>
                                <span className="font-medium">{data?.name}</span>
                            </Alert>
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="organization" className={'text-base-color-light dark:text-base-color-dark'}>Domain:</Label>
                            <Alert color="teal" icon={PiGoogleCardboardLogo}>
                                {data.jobInfo.color === 'blue' ? (
                                    <Link className="font-medium" target="_blank" rel="noopener noreferrer" href={`https://${data?.domains[0]?.fullSubdomain}`} passHref>
                                        {data?.domains[0]?.fullSubdomain}
                                    </Link>
                                ) : (
                                    data.jobInfo.color === 'red' ? (
                                        <div className="font-medium" style={{cursor: 'not-allowed', color: 'grey'}}>
                                            {data?.domains[0]?.fullSubdomain}
                                        </div>
                                    ) : null
                                )}
                            </Alert>
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="department" className={'text-base-color-light dark:text-base-color-dark'}>Source From:</Label>
                            <Alert color="gray"  icon={AiOutlineBranches  }>
                                <span className="font-medium ">{data?.defaultBranch}</span>
                            </Alert>
                            <Alert color="lime"  icon={FaGithub }>
                                <span className="font-medium ">{data?.repo?.http_url_to_repo}</span>
                            </Alert>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-1 gap-y-3 border-dashed border-2 mt-6 rounded">
                        {/*<div className={'grid grid-cols-2 gap-x-4'}>*/}
                        {/*    <Image*/}
                        {/*        src={'/images/about/vision.png'}*/}
                        {/*        art={'vision'}*/}
                        {/*        width={500}*/}
                        {/*        height={300}*/}
                        {/*    />*/}
                        {/*    <div>*/}
                        {/*        <div className={'flex'}>*/}
                        {/*            <Button*/}
                        {/*                className={'flex gap-x-2 items-center px-2.5 py-1.5 bg-white rounded-[8px] outline-1 outline-cyan-70'}>*/}
                        {/*                <span><HiCubeTransparent/></span>*/}
                        {/*                View App*/}
                        {/*            </Button>*/}
                        {/*            <div className={'py-1.5'}>*/}
                        {/*                <BsThreeDotsVertical />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
        </Card>
        <h3 className="mt-10 text-xl font-bold dark:text-white ">
            Activities Feed
        </h3>
        <ActivitiesFeedTable/>
    </HandleContent>);
}

export default OverViewDeploy;