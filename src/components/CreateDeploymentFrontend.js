"use client"
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {Button, Label, Radio, TextInput} from "flowbite-react";
import {HiArrowCircleRight} from "react-icons/hi";
import {useCreateDeploymentAppMutation} from "@/store/features/deploy-app/deployAppApiSlice";
import * as Yup from "yup";
import {useFormik} from "formik";
import {DeploymentTypes, SourceType} from "@/lib/enumTypes";
import DeployMethod from "@/components/DeployMethod";
import ConnectToGit from "@/components/deploy-app/deploymethod/ConnectToGit";
import AutomateXCli from "@/components/deploy-app/deploymethod/AutomateXCli";
import {useDispatch} from "react-redux";
import {addDeploymentApp} from "@/store/features/deploy-app/deployAppSlice";
import {toast, ToastContainer} from "react-toastify";
import ToastConfig from "@/components/deploy-app/deploymentLoading/ToastConfig";
import PublicGitUrl from "@/components/deploy-app/deploymethod/PublicGitUrl";
import EnvironmentDeploy from "@/components/deploy-app/EnvironmentDeploy";
import LoadingLogo from "@/components/deploy-app/deploymentLoading/LoadingLogo";
import ZipFIle from "@/components/deploy-app/deploymethod/ZipFIle";

export default function CreateDeploymentFrontendComponent() {
    const [createDeploymentApp, {isLoading, error, data}] = useCreateDeploymentAppMutation();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch(); // Get the dispatch function

    // const validationSchema = Yup.object().shape({
    //     // name: Yup.string()
    //     //     .required('Required')
    //     //     .matches(/^[a-z0-9]*$/, 'Project name can only contain lowercase letters and numbers')
    //     //     .matches(/^\S*$/, 'Project name cannot contain spaces'),
    //     // domainName: Yup.string().required('Required'),
    //     // appType: Yup.string().required('Required'),
    //     // sourceType: Yup.string().required('Required'),
    //     // defaultBranch: Yup.string().required('Required'),
    //     // deployType: Yup.string().required('Required'),
    // });

    const formik = useFormik({
        initialValues: {
            name: '',
            appType: DeploymentTypes.fe,
            sourceType: SourceType.default,
            sourcePath: '',
            defaultBranch: 'main',
            autoDeploy: 'true' ,
            envs: [ ],
        },
        // validationSchema:validationSchema,
        onSubmit:(values, {setSubmitting, resetForm}) => {
            setLoading(true); // Start loading
            console.log('Form submitted with values:', values);
            resetForm();
            createDeploymentApp(values).unwrap()
                .then((res) => {
                    console.log('Response from createDeploymentApp:', res.uuid);
                    dispatch(addDeploymentApp(res.uuid))
                    setSubmitting(false)
                    toast.success("Insert! Successfully")
                    resetForm()
                    if (formik.values.sourceType === SourceType.public) {
                        router.push(`/app/deploy-apps/${res.uuid}/activities`);
                    } else {
                        router.push(`/app/deploy-apps/${res.uuid}/resource`);
                    }
                    setLoading(false);
                })
                .catch((err) => {
                    console.error('Error from createDeploymentApp:', err);
                    setLoading(false);
                })
        },
    });
    return (
        <>
            <ToastConfig/>
            {loading && <LoadingLogo />}
            <div className="grid grid-cols-12 gap-4 ">
            <div
                className="col-span-12 mx-4 mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 md:mx-6 lg:my-6 xl:p-8 2xl:col-span-10 2xl:col-start-2">
                <section className="flex items-center flex-1 w-full mb-24">
                    <div className="flex flex-col w-full ">
                        <h1 className="text-3xl font-extrabold text-center lg:text-2xl xl:text-4xl">
                            <span
                                className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 animate-gradient">
                                Create Your Deployment
                            </span>
                        </h1>
                    </div>
                </section>
                <section className="bg-white dark:bg-gray-800">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                            <div className="relative z-0 w-full mb-6 group">
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="name" value="Your Project Name" />
                                    </div>
                                </div>
                                <TextInput
                                    autoComplete="off"
                                    name="name"
                                    label="Project Name"
                                    value={formik.values.name}
                                    required
                                    onChange={(e) => {
                                        const projectNameValue = e.target.value;
                                        const formattedProjectName = projectNameValue.replace(/\s/g, '');
                                        const formattedProjectNameLowercase = formattedProjectName.toLowerCase();
                                        formik.setFieldValue('name', formattedProjectNameLowercase);
                                    }}
                                />
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="domain" value="Your Domain Name" />
                                    </div>
                                </div>
                                <TextInput
                                    autoComplete="off"
                                    disabled={true}
                                    name="name"
                                    label="Project Name"
                                    value={formik.values.name?(formik.values.name+"."+process.env.NEXT_PUBLIC_DOMAIN_NAME):""}
                                    onChange={(e) => {
                                        const projectNameValue = e.target.value;
                                        const formattedProjectName = projectNameValue.replace(/\s/g, '');
                                        const formattedProjectNameLowercase = formattedProjectName.toLowerCase();
                                        formik.setFieldValue('name', formattedProjectNameLowercase);
                                    }}
                                />
                            </div>
                        </div>
                        <fieldset className="flex max-w-md flex-col gap-4">
                            <legend className="mb-4">Choose your Application Type</legend>
                            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                                <div className="flex items-center gap-2">
                                    <label
                                        className='border border-slate-400 w-full rounded-xl flex items-center space-x-2 px-5 py-2 md:text-lg hover:cursor-pointer'
                                    >
                                        <input
                                            type={"radio"}
                                            name={"appType"}
                                            value={DeploymentTypes.fe}
                                            onChange={formik.handleChange}
                                            checked={formik.values.appType === DeploymentTypes.fe}
                                            className="w-5 h-5 text-cyan-500 bg-gray-100 border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <p className={"text-center uppercase"}>Frontend</p>
                                    </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <label
                                        className='border border-slate-400 w-full rounded-xl flex items-center space-x-2 px-5 py-2 md:text-lg hover:cursor-pointer'
                                    >
                                        <input
                                            type={"radio"}
                                            name={"appType"}
                                            value={DeploymentTypes.be}
                                            onChange={formik.handleChange}
                                            checked={formik.values.appType === DeploymentTypes.be}
                                            className="w-5 h-5 text-cyan-500 bg-gray-100 border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <p className={"uppercase"}>BackEnd</p>
                                    </label>

                                </div>
                            </div>

                        </fieldset>
                        <DeployMethod formik={formik}/>
                        <div className="bg-white dark:bg-gray-900 m-2 py-5 border-2 border-gray-300 border-dashed rounded-lg dark:border-cyan">
                            {(() => {
                                switch (formik.values.sourceType) {
                                    case SourceType.default:
                                        return (<AutomateXCli formik={formik}/>)
                                    case SourceType.public:
                                        return (<PublicGitUrl formik={formik} />)
                                    case SourceType.github:
                                        return (<ConnectToGit formik={formik} />)
                                    case SourceType.file:
                                        return (<ZipFIle formik={formik} />)
                                }
                            })()}
                        </div>
                         <EnvironmentDeploy formik={formik}/>

                        <Button type="submit"  className="m-11 bg-orange-100">
                            <HiArrowCircleRight className="mr-3 h-4 w-full text-xl text-white "/>
                            Submit
                        </Button>
                    </form>
                </section>
            </div>
        </div>

    </>)
}


