"use client"
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import { Button, FloatingLabel} from "flowbite-react";
import {HiArrowCircleRight} from "react-icons/hi";
import {useCreateDeploymentAppMutation} from "@/store/features/deploy-app/deployAppApiSlice";
import * as Yup from "yup";
import { useFormik} from "formik";
import {DeploymentTypes, SourceType} from "@/lib/enumTypes";
import DeployMethod from "@/components/DeployMethod";
import ConnectToGit from "@/components/deploy-app/deploymethod/ConnectToGit";
import AutomateXCli from "@/components/deploy-app/deploymethod/AutomateXCli";

export default function CreateDeploymentFrontendComponent() {
    const [createDeploymentApp, {isLoading, error, data}] = useCreateDeploymentAppMutation();
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        projectName: Yup.string().required('Required'), // domainName: Yup.string().required('Required'),
        // appType: Yup.string().required('Required'),
        // sourceType: Yup.string().required('Required'),
        // defaultBranch: Yup.string().required('Required'),
        // deployType: Yup.string().required('Required'),
    });

    const handleToggleChange = (isChecked) => {
        setEnableAutomaticDeploys(isChecked);
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            appType: DeploymentTypes.fe, // Set a default value
            sourceType: SourceType.default, // Set a default value
            sourcePath: '', // Set a default value
            defaultBranch: 'main', // Set a default value
            autoDeploy: true, // Set a default value
        },
        validationSchema:validationSchema,
        onSubmit: (values, {setSubmitting, resetForm}) => {
            resetForm({values: ''});
            console.log(values);
        },
    });

    console.log("formik",formik.values)

    return (
        <>
        <div className="grid grid-cols-12 gap-4">
            <div
                className="col-span-12 mx-4 mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 md:mx-6 lg:my-6 xl:p-8 2xl:col-span-10 2xl:col-start-2">
                <section className="flex items-center flex-1 w-full mb-24">
                    <div className="flex flex-col w-full ">
                        <h1 className="text-5xl font-extrabold text-center lg:text-2xl xl:text-4xl">
                            <span
                                className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 animate-gradient">
                                Create Your Deployment
                            </span>
                        </h1>
                    </div>
                </section>
                <section className="bg-white dark:bg-gray-900">
                    <form onSubmit={formik.handleSubmit} className={""}>

                        <FloatingLabel
                            autoComplete="off"
                            variant="filled"
                            name="name"
                            label="Project Name"
                            onChange={(e) => {
                                const projectNameValue = e.target.value;
                                // Remove spaces before updating state
                                const formattedProjectName = projectNameValue.replace(/\s/g, '');
                                // Convert to lowercase before updating state
                                const formattedProjectNameLowercase = formattedProjectName.toLowerCase();
                                formik.setFieldValue('name', formattedProjectNameLowercase);
                            }}
                        />
                        <p>Domain Name : {formik.values.name?(formik.values.name+"."+process.env.NEXT_PUBLIC_DOMAIN_NAME):"default your project name"}</p>

                        {/*choose branch to deploy*/}
                        <DeployMethod formik={formik}/>
                        {/*choose branch to deploy*/}
                    <div className="bg-white dark:bg-gray-900 m-2 py-5 border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700">


                        {(() => {
                            switch (formik.values.sourceType) {
                                case SourceType.default:
                                    return (<AutomateXCli/>)
                                case SourceType.public:
                                    return ("null")
                                case SourceType.github:
                                    return (<ConnectToGit formik={formik} />)
                                case SourceType.gitlab:
                                    return ("null");
                            }
                        })()}
                    </div>

                        <Button type="submit" className=" m-11 bg-orange-100">
                            <HiArrowCircleRight className="mr-3 h-4 w-full text-xl text-white "/>
                            Submit
                        </Button>
                    </form>
                </section>
            </div>
        </div>

    </>)
}


