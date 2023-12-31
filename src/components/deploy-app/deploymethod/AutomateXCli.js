import React from 'react';
import {Dropdown, Label, Select, ToggleSwitch} from "flowbite-react";
import {Field} from "formik";

function AutomateXCli({formik}) {
    const handleDefaultBranchChange = (event) => {
        formik.setFieldValue('defaultBranch', event.target.value);
    };

    const handleToggleChange = (checked) => {
        formik.setFieldValue('autoDeploy', checked);
    };

    return (<div>
        {/*<h1 className={"text-center"}> AutomateX Git CLI </h1>*/}
        <div className="container flex flex-col mx-auto ">
            <h2 className="text-lg font-bold text-cyan-500 dark:text-cyan-500">
                Quick setup - if you’ve done this get automatex git url
            </h2>
            <h4 className={"text-gray-500 text-base dark:text-white"}>After this app create
                you will get Automatex git url to repository and deploys.</h4>
            <div className={"py-5"}></div>
        </div>
        <div className={"container flex flex-col mx-auto"}>
            <h2 className="text-lg  font-bold text-cyan-500 dark:text-cyan-500">
                AutomateX Deploys
            </h2>
            <h4 className={"text-gray-500 text-base dark:text-white"}> Facilitates a
                selected
                branch
                to be automatically deployed to this application.</h4>
        </div>
        <div
            className="w-full xl:w-11/12 group xl:h-20 p-4 mx-auto border-2 mt-10 border-gray-200 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800">
            <div className="relative flex items-center space-x-4 pb-2 text-center ">
                <svg className="md:w-20 xl:w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
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
                                        <span
                                            className="text-base font-medium text-cool-blue-150 dark:text-gray-300">&quot;Push to deploy: Make sure the branch is stable and tests pass before pushing for automatic app deployment.&quot;
                                        </span>
                </div>
            </div>
        </div>
        <div className="w-2/3 xl:w-3/12 p-11">
            <h2 className=" mb-2 block text-lg font-bold text-cyan-500 dark:text-cyan-500">
                Default Branch
            </h2>
            <div className="mb-2 block">
                <Label htmlFor="defaultBranch"/>
            </div>
            <Select
                name="defaultBranch"
                disabled={true}
                onChange={handleDefaultBranchChange} // use the new handler
                value={formik.values.defaultBranch}
            >
                <option value="main">main</option>
                {/* Add more options as needed */}
            </Select>
        </div>
        <div className="mt-6 md:mt-11 m-3 xl:m-11">
            <h2 className="mb-2 block xl:text-lg font-bold text-cyan-500 dark:text-cyan-500">
                Only enable this option if you have a CI service configured on your repo.
            </h2>

            <ToggleSwitch
                name="autoDeploy"
                onChange={handleToggleChange}
                checked={formik.values.autoDeploy}
                label="Enable Automatic Deploys"
            />
        </div>

    </div>);
}

export default AutomateXCli;