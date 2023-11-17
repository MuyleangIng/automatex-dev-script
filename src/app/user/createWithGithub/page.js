"use client"

import {Button, Checkbox, Label, Select, Table, TextInput} from "flowbite-react";
import React from "react";
import Lottie from "lottie-react";
import {HiSearch} from "react-icons/hi";
import GithubAim from "../../utils/assets/github.json";




export default function CreateWithGihubSection(){
    return(

        <>
            <section className="flex items-center flex-1 w-full mb-2">
                <div className="flex flex-col w-full ">
                    <h1 className="text-5xl font-extrabold text-center lg:text-5xl 2xl:text-3xl">
                    <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-orange-200 dark:via-indigo-300 dark:to-sky-500 animate-gradient ">
                        Choose to connect with
                    </span>
                        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                        Github
                    </span>
                    </h1>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 mb-20">
                <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-20 lg:py-16">
                    <div className="mx-auto w-full rounded-lg bg-slate-50 p-6 shadow dark:bg-gray-800 sm:max-w-xl sm:p-8 lg:col-span-6">
                        <h1 className="mb-2 text-2xl font-extrabold text-black dark:text-white">
                            Import Git Repository
                        </h1>
                        <form className="mt-4 space-y-6 sm:mt-6" action="#">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="grid grid-cols-1 gap-2">
                                    <Select id="countries" defaultValue="Repository name">
                                        <option disabled>Repository Name</option>
                                        <option value="US">Repository Name</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </Select>
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                    <Label htmlFor="search-bar" className="sr-only">
                                        Search
                                    </Label>
                                    <TextInput
                                        icon={HiSearch}
                                        id="search-bar"
                                        placeholder="Search"
                                        type="search"
                                        className="[&_input]:py-2 [&_input]:!pl-10 mr-2 block"
                                    />
                                    <HiSearch className="h-5 w-5 md:hidden dark:text-gray-400 mr-3" />
                                </div>
                            </div>

                            <div className="min-w-full bg-white dark:bg-gray-600 divide-y rounded-lg divide-gray-200 dark:divide-gray-600">
                                <div className="flex items-center justify-between space-x-6 p-4 lg:mr-0">
                                    <div className="flex items-center space-x-6 whitespace-nowrap">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                                            alt="Neil Sims avatar"
                                        />
                                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                                Neil Sims
                                            </div>
                                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">private</span>

                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                        >
                                            Import
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="min-w-full bg-white dark:bg-gray-600 divide-y rounded-lg divide-gray-200 dark:divide-gray-600">
                                <div className="flex items-center justify-between space-x-6 p-4 lg:mr-0">
                                    <div className="flex items-center space-x-6 whitespace-nowrap">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://git-rawify.vercel.app/assets/img/github1.png"
                                            alt="Neil Sims avatar"
                                        />
                                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                                Neil Sims
                                            </div>
                                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">private</span>

                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                        >
                                            Import
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="min-w-full bg-white dark:bg-gray-600 rounded-lg divide-y divide-gray-200 dark:divide-gray-600">
                                <div className="flex items-center justify-between space-x-6 p-4 lg:mr-0">
                                    <div className="flex items-center space-x-6 whitespace-nowrap">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://w7.pngwing.com/pngs/240/158/png-transparent-social-media-computer-icons-github-fork-github-purple-text-social-media.png"
                                            alt="Neil Sims avatar"
                                        />
                                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                                Neil Sims
                                            </div>
                                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">private</span>

                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                        >
                                            Import
                                        </button>
                                    </div>
                                </div>
                            </div>



                        </form>
                    </div>
                    <div className="mr-auto place-self-center lg:col-span-6">
                        <Lottie
                            animationData={GithubAim}
                            className="w-44 md:w-48 lg:w-44 xl:w-72 relative left-24 md:left-72 lg:left-16 "
                        />
                    </div>
                </div>
            </section>
        </>
    )
}