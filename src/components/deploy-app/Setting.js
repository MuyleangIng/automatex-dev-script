"use client"

import {Badge, Button, Card, Label, TextInput} from "flowbite-react";
import {FaPlus} from "react-icons/fa";
import {IoGitBranch} from "react-icons/io5";
import {HiCheck} from "react-icons/hi";


export default function SettingDev(){
    return(
        <>
            <Card>
                <h3 className="mb-4 text-xl font-bold dark:text-white">
                    Service Name :
                </h3>
                <p className="mb-4 text-base font-medium dark:text-white">
                    Used to identify your Project on the Dashboard, Vercel CLI, and in the URL of your Deployments.
                </p>
                <form action="#">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                            <TextInput
                                id="current-password"
                                name="current-password"
                                placeholder="ex1-reactjs-app"
                                type="text"
                            />
                        </div>
                    </div>
                </form>
            </Card>
            <div className="mt-5">
                <Card>
                    <h3 className="mb-4 text-xl font-bold dark:text-white">
                        Environment Variables :
                    </h3>
                    <p className="mb-4 text-base font-medium dark:text-white">
                        In order to provide your Deployment with Environment Variables  at Build and Runtime,<br/> you may enter them right here, for the Environment of your choice.                    </p>
                    <form action="#">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                <Label htmlFor="current-password">Key</Label>
                                <TextInput
                                    id="current-password"
                                    name="current-password"
                                    placeholder="NEXT_PUBLIC_API_URL"
                                    type="text"
                                />
                            </div>
                            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                <Label htmlFor="new-password">Value</Label>
                                <TextInput
                                    id="new-password"
                                    name="new-password"
                                    placeholder="https://surveybox-api.istad.co/api"
                                    type="text"
                                />
                            </div>
                            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                <TextInput
                                    id="confirm-password"
                                    name="confirm-password"
                                    placeholder="••••••••"
                                    type="text"
                                />
                            </div>
                            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                <TextInput
                                    id="new-password"
                                    name="new-password"
                                    placeholder="••••••••"
                                    type="text"
                                />
                            </div>
                            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                <TextInput
                                    id="confirm-password"
                                    name="confirm-password"
                                    placeholder="••••••••"
                                    type="text"
                                />
                            </div>
                            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                <TextInput
                                    id="new-password"
                                    name="new-password"
                                    placeholder="••••••••"
                                    type="text"
                                />
                            </div>
                            <div className="col-span-6">
                                <Button>
                                    <FaPlus className="mr-2 h-5 w-5" />
                                    Add another
                                </Button>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
            <div className="mt-5">
                <Card>
                    <h3 className="mb-4 text-xl font-bold dark:text-white">
                        Node.js Version:
                    </h3>
                    <p className="mb-4 text-base font-medium dark:text-white">
                        The version of Node.js that is used in the Build Step and for Serverless Functions. A new Deployment is required for your changes to take effect.                    </p>
                    <form action="#">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                <TextInput
                                    id="current-password"
                                    name="current-password"
                                    placeholder="18.x"
                                    type="text"
                                />
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
            <div className="mt-5">
                <Card>
                    <h3 className="mb-4 text-xl font-bold dark:text-white">
                        Domains:
                    </h3>
                    <p className="mb-4 text-base font-medium dark:text-white">
                        These domains are assigned to your Production Deployments. Optionally, a different Git branch or a redirection to another domain can be configured for each one.
                    </p>
                    <form action="#">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                                <TextInput
                                    id="current-password"
                                    name="current-password"
                                    placeholder="enter your domain custom"
                                    type="text"
                                />
                            </div>
                            <div className="col-span-6">
                                <Button>
                                    <FaPlus className="mr-2 h-5 w-5" />
                                    Add another
                                </Button>
                            </div>
                        </div>

                    </form>
                </Card>
            </div>
            <div className="mt-5">
                <Card>
                    <h3 className="mb-4 text-xl font-bold dark:text-white underline">
                        ex4-next-js-project.vercel.app
                    </h3>
                    <p className="mb-4 text-base font-medium dark:text-white" style={{ display: 'flex', alignItems: 'center' }}>
                        <IoGitBranch className="mr-2" /> this my latest commit
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <div className="flex center">
                            <Badge className="mr-2" color="gray"  icon={HiCheck} />
                            master
                        </div>
                        <div className="flex center">
                            <Badge className="mr-2" color="gray"  icon={HiCheck} />
                            product
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}