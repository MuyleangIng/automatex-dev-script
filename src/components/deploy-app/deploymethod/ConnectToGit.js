import React from 'react';
import {Badge, Button, Card, Label, Select, Table, TextInput} from "flowbite-react";
import {HiSearch} from "react-icons/hi";
import Image from "next/image";
import Lottie from "lottie-react";
import GithubAim from "@/app/utils/assets/github.json";
import {FaGithub} from "react-icons/fa";

function ConnectToGit(props) {
    return (<div>
        <h1 className={"text-center font-bold"}> Connect to Git</h1>
        <div className="container flex flex-col mx-auto p-a ">
            <h2 className="text-lg font-bold text-cyan-500 dark:text-white">
                You Choose to Connect to GitHub
            </h2>
            <h4 className={"text-gray-500 text-base dark:text-white"}>
                Connect this app to GitHub to enable your repository and deploys.</h4>
            <section className="bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 ">
                    <div className="grid lg:grid-cols-2">
                        <Card className=" justify-center text-base font-medium w-96 h-16 bg-white dark:bg-gray-600 divide-y rounded-lg divide-gray-200 dark:divide-gray-600 ">
                            <div className="justify-between space-x-6 p-4 lg:mr-0">
                                <div className="flex items-center space-x-6 ">
                                    <Image height={100} width={100} unoptimized="true"
                                           className="h-10 w-10 rounded-full"
                                           src={"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"}
                                           alt={`user`}
                                    />
                                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                        <p>My User Name</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Badge color="gray">32 Repo</Badge>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className=" justify-center text-base font-medium bg-white dark:bg-gray-600 divide-y rounded-lg divide-gray-200 dark:divide-gray-600 ">
                            <div className="overflow-x-auto">
                                <div className={"col-span-5"}>
                                    <div className=" mb-6 relative text-gray-600 focus-within:text-gray-400 w-full sm:w-auto sm:col-span-4 lg:col-span-3">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                 strokeWidth="2"
                                                 viewBox="0 0 24 24" className="w-6 h-6">
                                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </button>
                                    </span>
                                        <input
                                            id="searchInput"
                                            type="text"
                                            autoComplete="off"
                                            className="py-2 text-sm text-white dark:text-gray-100 dark:bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-full"
                                            placeholder="Search..."
                                        />
                                    </div>
                                </div>
                                <div class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

                                    <button type="button" className="relative inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-gray-500 dark:hover:text-white dark:focus:ring-gray-400 dark:focus:text-white">
                                        <div className="flex items-start items-center">
                                            <FaGithub className={"w-8 h-8 me-2.5 "} />
                                            <div className="flex flex-col gap-2">
                                                <span>Nun-SomRithy/React-project</span>
                                                <Badge color="gray" className={"w-14"}>Private</Badge>
                                            </div>
                                        </div>
                                        <span>Connect</span>
                                    </button>
                                    <button type="button" className="relative inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-gray-500 dark:hover:text-white dark:focus:ring-gray-400 dark:focus:text-white">
                                        <div className="flex items-start items-center">
                                            <FaGithub className={"w-8 h-8 me-2.5 "} />
                                            <div className="flex flex-col gap-2">
                                                <span>Nun-SomRithy/React-project</span>
                                                <Badge color="gray" className={"w-14"}>Private</Badge>
                                            </div>
                                        </div>
                                        <span>Connect</span>
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    </div>);
}

export default ConnectToGit;