import React from 'react';
import {Button, Card, Label, TextInput} from "flowbite-react";
import {FaPlus} from "react-icons/fa";

function EnvironmentDeploy(props) {
    return (
        <div>
            <div className="mt-5">
                <Card>
                    <h3 className="mb-4 text-xl font-bold dark:text-white text-cyan-500">
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
        </div>
    );
}

export default EnvironmentDeploy;