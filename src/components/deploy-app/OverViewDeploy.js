import React from 'react';
import {FaCodeBranch, FaCopy, FaGithub} from "react-icons/fa";
import {Alert, Button, Card, Label, Textarea, TextInput} from "flowbite-react";
import {HiInformationCircle} from "react-icons/hi";
import {GrDeploy} from "react-icons/gr";
import {PiGoogleCardboardLogo} from "react-icons/pi";
import {AiOutlineBranches} from "react-icons/ai";
import ActivitiesFeedTable from "@/components/deploy-app/ActivitiesFeedTable";

function OverViewDeploy(props) {
    return (<>
        <Card className={"mt-14"}>
            <h3 className="mb-4 text-xl font-bold dark:text-white text-center underline">
                Deployment Information
            </h3>
                <div className=" grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="col-span-1 grid grid-cols-1 gap-y-3">
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="organization">Deployment Service :</Label>
                            <Alert  color="success" icon={GrDeploy }>
                                <span className="font-medium">movie-website-blmab9rekvisalsak.automatex.com</span>
                            </Alert>
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="organization">Domain :</Label>
                            <Alert color="teal" icon={PiGoogleCardboardLogo  }>
                                <span className="font-medium">react-js.kubernet.me</span>
                            </Alert>
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="department">Source From :</Label>
                            <Alert color="gray"  icon={AiOutlineBranches  }>
                                <span className="font-medium ">Main</span>
                            </Alert>
                            <Alert color="lime"  icon={FaGithub }>
                                <span className="font-medium ">https://github.com/Nun-SomRithy/first_pipeline.git</span>
                            </Alert>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-1 gap-y-3 border-dashed border-2 mt-6 rounded">

                    </div>
                </div>
        </Card>
        <h3 className="mt-10 text-xl font-bold dark:text-white ">
            Activities Feed
        </h3>
        <ActivitiesFeedTable/>
        </>);
}

export default OverViewDeploy;