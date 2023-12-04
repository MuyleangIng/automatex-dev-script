"use client"

import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {Breadcrumb, Button, Label, Select, TextInput, ToggleSwitch} from "flowbite-react";
import {HiArrowCircleRight, HiHome, HiUserCircle} from "react-icons/hi";
import DeployMethod from "@/components/DeployMethod";
import {useCreateDeploymentAppMutation} from "@/store/features/deploy-app/deploySlice";

export default function CreateDeploymentFrontendComponent() {
    const [createDeploymentApp, {isLoading, error, data}] = useCreateDeploymentAppMutation();

    const [switch2, setSwitch2] = useState(true);
    const [projectName, setProjectName] = useState('');
    const [domainName, setDomainName] = useState('');
    const [defaultBranch, setdefaultBranch] = useState('');
    const [enableAutomaticDeploys, setEnableAutomaticDeploys] = useState(false);
    const router=useRouter();


    const handleToggleChange = (isChecked) => {
        setEnableAutomaticDeploys(isChecked);
    };

    const updateSecondLabel = (value) => {
        const newDomainName = value + '.kuberthy.me';
        setDomainName(newDomainName);
    };

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setdefaultBranch(selectedValue);
    };
    const handleCreateApp = async (appData) => {
        try {
            const response = await createDeploymentApp(appData);
            router.push(`/app/deploy-apps/${response.data.repo.id}/resource`);
            console.log("Deployment App created successfully:", response.data);
            // Handle success, e.g., redirect to another page, show a success message, etc.
        } catch (error) {
            console.error("Error creating Deployment App:", error);
            // Handle error, e.g., show an error message to the user, log the error, etc.
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            name: projectName,
            appType: 'FRONTEND',
            sourceType: 'automatexGit',
            domain: domainName,
            defaultBranch: defaultBranch,
            deployType: 'Auto',
        };
        await handleCreateApp(formData);

        // Optionally, you can add additional logic here after the deployment app is created

        console.log('Form Data:', formData);
    };

    return (<>

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
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input
                                        type="text"
                                        name="project_name"
                                        id="project_name"
                                        className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        onChange={(e) => {
                                            const formattedValue = e.target.value
                                                .replace(/\s+/g, ' ') // Replace consecutive spaces with a single space
                                                .replace(/ /g, '-') // Replace spaces with hyphens
                                                .toLowerCase() // Convert to lowercase
                                                .replace(/[^a-z-]/g, ''); // Remove non-lowercase and non-hyphen characters
                                            setProjectName(formattedValue);
                                            updateSecondLabel(formattedValue);
                                        }}
                                        required
                                    />
                                    <label
                                        htmlFor="project_name"
                                        id="projectLabel"
                                        className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Project Name
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input
                                        type="text"
                                        name="domain_name"
                                        id="domain_name"
                                        className=" block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        disabled={true}
                                        value={domainName}
                                        required
                                    />
                                    <label
                                        htmlFor="domain_name"
                                        id="domainLabel"
                                        className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Domain Name
                                    </label>
                                </div>
                            </div>
                            {/*deployment method */}
                            <DeployMethod/>
                            {/*deployment method end */}

                            {/*choose branch to deploy*/}
                            <section
                                className="bg-white dark:bg-gray-900 m-2 py-5 border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700">
                                <div className="container flex flex-col mx-auto p-a ">
                                    <h2 className="text-lg font-bold text-cyan-500 dark:text-white">
                                        Quick setup - if you’ve done this get automatex git url
                                    </h2>
                                    <h4 className={"text-gray-500 text-base dark:text-white"}>After this app create you will get Automatex git url to repository and deploys.</h4>
                                    <div className={"py-5"}></div>
                                    <h2 className="text-lg  font-bold text-cyan-500 dark:text-white">
                                        AutomateX Deploys
                                    </h2>
                                    <h4 className={"text-gray-500 text-base dark:text-white"}> Facilitates a selected
                                        branch
                                        to be automatically deployed to this application.</h4>
                                </div>
                                {/*Push to deploy*/}
                                <div
                                    className="w-11/12 group h-20 p-4 mx-auto border-2 mt-10 border-gray-200 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800">
                                    <div className="relative flex items-center space-x-4 pb-2 text-center ">
                                        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
                                             id="zip-file">
                                            <path fill="#5aaae7"
                                                  d="M13 51H43v6a4 4 0 0 0 8 0V43H13zM55 3H17.11A4.11 4.11 0 0 0 13 7.11V21H51V7A4 4 0 0 1 55 3z"></path>
                                            <path fill="#78b9eb"
                                                  d="M43,57V51H5v6a4,4,0,0,0,4,4H47a3.995,3.995,0,0,1-4-4Z"></path>
                                            <path fill="#1e81ce"
                                                  d="M55,3a4,4,0,0,0-4,4v6h8V7a3.995,3.995,0,0,0-4-4Z"></path>
                                            <polygon fill="#ff9478"
                                                     points="51 21 13 21 9 21 9 43 13 43 51 43 55 43 55 21 51 21"></polygon>
                                            <path fill="#fff"
                                                  d="M40,26H36a1,1,0,0,0-1,1V38h2V33h3a3,3,0,0,0,3-3V29A3,3,0,0,0,40,26Zm1,4a1,1,0,0,1-1,1H37V28h3a1,1,0,0,1,1,1Z"></path>
                                            <rect width="2" height="12" x="31" y="26" fill="#fff"></rect>
                                            <path fill="#fff"
                                                  d="M28.9,27.447A1,1,0,0,0,28,26H22v2h4.382l-4.277,8.553A1,1,0,0,0,23,38h6V36H24.618Z"></path>
                                        </svg>
                                        <div className="flex flex-col leading-4 text-sm py-2 ">
                                        <span className="text-base font-bold text-cool-blue-150 dark:text-gray-300">&quot;Push to deploy: Make sure the branch is stable and tests pass before pushing for automatic app deployment.&quot;
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                {/*choose branch to deploy*/}
                                <div className="w-3/12 p-11">
                                    <h2 className=" mb-2 block text-lg  font-bold text-cyan-500 dark:text-white">
                                        AutomateX Deploys
                                    </h2>
                                    <div className="mb-2 block">
                                        <Label htmlFor="branch"/>
                                    </div>
                                    <Select
                                        id="branch"
                                        onChange={handleSelectChange}
                                        value={defaultBranch}
                                        required>
                                        <option>master</option>
                                        <option>main</option>
                                    </Select>
                                </div>

                                <div className={"mt-0 m-11"}>
                                    <h2 className=" mb-2 block text-lg  font-bold text-cyan-500 dark:text-white">
                                        Only enable this option if you have a CI service configured on your repo.
                                    </h2>
                                    <ToggleSwitch
                                        checked={enableAutomaticDeploys}
                                        label="Enable Automatic Deploys"
                                        onChange={handleToggleChange}
                                    />
                                </div>
                                <Button type="submit" className=" m-11 bg-orange-100">
                                    <HiArrowCircleRight className="mr-3 h-4 w-full text-xl text-white "/>
                                    Submit
                                </Button>
                            </section>
                        </form>
                    </section>
                </div>
            </div>

        </>)
}


// const initiateGitHubAuthentication = () => {
//     const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
//     console.log('GitHub Client ID:', clientId);
//
//     // Log the client ID to the console for debugging
//     console.log('GitHub Client ID:', clientId);
//
//     const redirectUri = encodeURIComponent(`${window.location.origin}/user/createWithGithub`); // Specify the repo page URL
//
//     const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;
//
//     window.location.href = githubAuthUrl;
// };
//
// const handleSignInClick = (e) => {
//     e.preventDefault();
//     router.push('/user/createWithGithub');
//     initiateGitHubAuthentication();
// };
