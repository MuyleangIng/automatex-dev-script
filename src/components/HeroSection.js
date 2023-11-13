import React from 'react';
import Image from 'next/image';
import HeadingBar from "@/components/HeadingBar";

function HeroSection() {
    return(
        // Hero section
        <section className="bg-white dark:bg-gray-900 relative">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl dark:text-white">
                        <span className="text-blue-900 block mb-8">Say Goodbye </span>
                        <span className="text-blue-900">To <span className="text-cyan-200">Manual.</span></span>
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mt-5">
                        At AutomateX we're on a mission to revolutionize the way you work. With AutomateX, you can say goodbye to manual tasks.
                    </p>
                    <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Subscribe
                    </button>

                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="/images/HeroSection.png" alt="mockup" className="w-full h-auto object-cover" />
                </div>
                <div className="mt-4 ml-4 absolute -left-48 top-96">
                    <svg
                        width="490"
                        height="589"
                        viewBox="0 0 490 589"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Include the path and gradient definitions */}
                        <path d="M-211.503 587.924C-259.073 561.958 -355.043 496.229 -358.36 441.039C-362.507 372.051 -345.253 348.941 -375.186 306.521C-405.119 264.1 -443.368 223.361 -318.572 175.616C-193.776 127.871 -187.485 113.326 -136.595 102.457C-85.7042 91.5876 50.6413 -50.2482 50.0224 20.8574C49.4035 91.963 -17.8661 218.658 141.5 153.534C168.097 142.384 388.768 -3.31184 489 127.034" stroke="url(#paint0_linear_293_1273)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear_293_1273" x1="-139.634" y1="618.177" x2="-297.475" y2="-142.058" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#36E6D5"/>
                                <stop offset="1" stop-color="#29E871"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            {/*Feature Section */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 text-3xl font-extrabold text-blue-900 sm:text-4xl md:mx-auto block whitespace-nowrap">
                        Explore The Benefit of The Features
                    </h2>
                    <p className=" text-base text-gray-700 md:text-lg">
                        Unique and Powerful suit of software to run and entire, brought to you by a company with the long term version to transform the way you work.
                    </p>
                </div>
                <div className=" grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className=" flex flex-col justify-between p-5 bg-emerald-50 border-b-cyan-50 rounded-md shadow-0">
                        <div>
                            <div className=" flex items-center justify-center w-16 h-16 mb-4 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-emerald-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </div>
                            <h6 className="mb-2 font-bold text-lg text-blue-900 ">Integrated Platform </h6>
                            <p className="mb-7 text-sm text-blue-900">
                                A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-5 bg-slate-50 border-b-cyan-50 rounded-md shadow-0">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-emerald-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>

                            </div>
                            <h6 className="mb-2 font-bold text-lg text-blue-900">Personal Dashboard</h6>
                            <p className="mb-7 text-sm text-blue-900">
                                Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-5 bg-emerald-50 border-b-cyan-50 rounded-md shadow-0">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-emerald-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-bold text-lg text-blue-900 ">Organically grow</h6>
                            <p className="mb-7 text-sm text-blue-900">
                                A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*Service Section */}
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 text-4xl font-extrabold text-blue-900 sm:text-4xl md:mx-auto block whitespace-nowrap">
                    Service
                </h2>
            </div>
            <main className="relative mb-5">
                {/* First Card */}
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-emerald-50 rounded-r-full mb-8 lg:mb-0">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 text-center lg:text-left">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 text-3xl font-medium text-blue-900 sm:text-4xl sm:leading-none">
                                    Full Service Deployment
                                </h2>
                                <p className="text-base text-blue-900 md:text-lg">
                                    Say goodbye to manual and error-prone deployment processes. Our Service automates the deployment of frontend code, backend service, database, and all other components of your application stack.
                                </p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3">
                                <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    See more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:w-1/2">
                            <div className="w-2/5">
                                <img className="object-cover" src="/images/Service.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="px-4 py-16 mt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-emerald-50 rounded-l-full mb-8 lg:mb-0">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="flex items-center justify-center lg:w-1/2">
                            <div className="w-2/5">
                                <img className="object-cover" src="/images/cloud.png" alt="" />
                            </div>
                        </div>
                        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pl-5 text-center lg:text-left">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 text-3xl font-medium text-blue-900 sm:text-4xl sm:leading-none">
                                    Full Service Deployment
                                </h2>
                                <p className="text-base text-blue-900 md:text-lg">
                                    Say goodbye to manual and error-prone deployment processes. Our Service automates the deployment of frontend code, backend service, database, and all other components of your application stack.
                                </p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3">
                                <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    See more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Third Card */}
                <div className="px-4 py-16 mx-auto mt-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-emerald-50 rounded-r-full mb-8 lg:mb-0">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 text-center lg:text-left">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 text-3xl font-medium text-blue-900 sm:text-4xl sm:leading-none">
                                    Full Service Deployment
                                </h2>
                                <p className="text-base text-blue-900 md:text-lg">
                                    Say goodbye to manual and error-prone deployment processes. Our Service automates the deployment of frontend code, backend service, database, and all other components of your application stack.
                                </p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3">
                                <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    See more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:w-1/2">
                            <div className="w-2/5">
                                <img className="object-cover" src="/images/git.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Feature Section   */}
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-10">
                <h2 className="max-w-lg mb-6 text-4xl font-extrabold text-blue-900 sm:text-4xl md:mx-auto block whitespace-nowrap">
                    Our Feature
                </h2>
            </div>
            <section className="bg-emerald-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10">
                    <h4 className="text-md font-light text-center text-gray-800 lg:text-3xl dark:text-white">explore our <br/> awesome <span className="text-blue-500">Components</span></h4>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-full dark:text-white">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-blue-900">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>

                            </span>

                            <h1 className="text-xl font-semibold text-blue-900 dark:text-white">User Monitoring</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-full dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-blue-900">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>

                            </span>

                            <h1 className="text-xl font-semibold text-blue-900 dark:text-white"> Rollback Version</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>

                        </div>


                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-full dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 text-blue-900">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>

                            </span>

                            <h1 className="text-xl font-semibold text-blue-900 dark:text-white">Cloude Storage</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-full dark:text-white">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-blue-900">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </span>

                            <h1 className="text-xl font-semibold text-blue-900 dark:text-white">Simple & clean designs</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>
                </div>

                {/*Support languages section */}
                <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="faq">
                    <h2 className="text-4xl font-bold text-center pb-28">Support Languages</h2>

                    <div className="mx-auto w-full max-w-4xl bg-white dark:bg-transparent">
                        <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-56">
                            <a target="_blank" href="">
                                <div className="h-20  mx-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"/></svg>
                                </div>
                            </a>
                            <a target="_blank" href="">
                                <div className="h-20  mx-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 230" id="react"><path fill="#FFF" d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z"></path><path fill="#53C1DE" d="M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z"></path><path fill="#FFF" d="M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z"></path><path fill="#53C1DE" d="M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177"></path></svg>
                                </div>
                            </a>
                            <a target="_blank" href="">
                                <div className="h-20  mx-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 221" id="vue"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"></path><path fill="#41B883" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"></path><path fill="#35495E" d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"></path></svg>                                </div>
                            </a>
                            <a target="_blank" href="">
                                <div className="h-20  mx-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" preserveAspectRatio="xMidYMid" viewBox="0 0 256 272" id="angular"><path fill="#E23237" d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z"></path><path fill="#B52E31" d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z"></path><path fill="#FFF" d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z"></path></svg>                                </div>
                            </a>
                            <a target="_blank" href="">
                                <div className="h-20  mx-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="html"><polygon fill="#E44D26" points="3.345 21.601 1.419 0 22.581 0 20.653 21.598 11.987 24 3.345 21.601"></polygon><polygon fill="#F16529" points="12 22.164 19.002 20.222 20.65 1.766 12 1.766"></polygon><path fill="#EBEBEB" d="M12,9.778H8.495L8.252,7.065H12v-2.65H5.357l0.063,0.711l0.651,7.3H12V9.778L12,9.778z M12,16.658l-0.012,0.003l-2.95-0.797l-0.189-2.113H6.19l0.371,4.16l5.427,1.507L12,19.414V16.658L12,16.658z"></path><path fill="#FFF" d="M11.991,9.778v2.649h3.263l-0.308,3.436l-2.955,0.797v2.756l5.431-1.505l0.04-0.448l0.623-6.974l0.064-0.712h-0.714H11.991L11.991,9.778z M11.991,4.415v2.65h6.399l0.053-0.596l0.121-1.343l0.063-0.711H11.991L11.991,4.415z"></path><polygon fill="#DEDEDE" points="12 23.996 11.987 24 12 24 12 23.996"></polygon><path fill="#C64321" d="M12,7.065L12,7.065H8.252l0.242,2.713h3.496H12V7.065L12,7.065z M12,0H1.419l1.926,21.601L11.987,24L12,23.996v-4.582v0l-0.012,0.004l-5.427-1.507l-0.371-4.16h2.659l0.189,2.113l2.95,0.797l0.003-0.001v0L12,16.658v-4.231H6.071l-0.651-7.3L5.357,4.415h6.634H12V0L12,0z"></path><path fill="#CDCDCD" d="M8.849,13.751H6.19l0.371,4.16l5.427,1.507L12,19.414v0l-0.009,0.002v-2.756l-0.003,0.001l-2.95-0.797L8.849,13.751L8.849,13.751z M11.991,4.415H5.357l0.063,0.711l0.651,7.3H12h-0.009V9.778H8.495L8.252,7.065H12h-0.009V4.415L11.991,4.415z"></path><path fill="#DEDEDE" d="M12,16.658l-0.009,0.002v0v2.756L12,19.414V16.658L12,16.658z M12,9.778h-0.009v2.649H12V9.778L12,9.778z M12,4.415h-0.009v2.65H12V4.415L12,4.415z"></path></svg>
                                </div>
                            </a>
                            <a target="_blank" href="">
                                <div className="h-20  mx-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 16 16" id="css"><path fill="#2196F3" d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0z"></path><path fill="#FAFAFA" d="m12.274 4.709-.161 1.809-.486 5.423L8 12.944l-.003.001-3.625-1.004-.253-2.836h1.776l.132 1.471 1.971.532.001-.001 1.974-.532.269-2.451-6.208.017-.176-1.676 6.533-.077.132-1.794-6.84.019-.115-1.669h8.864z"></path></svg>                                </div>
                            </a>
                            <a target="_blank" href="">
                                <div className="h-20  mx-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                        <path fill="#8bc34a" d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"></path><path fill="#fff" d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"></path>
                                    </svg>                                </div>
                            </a>
                            <a target="_blank" href="">
                                <div className="h-20  mx-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                        <polygon fill="none" points="26.055,24.519 18.71,37 33.401,37"></polygon><path fill="none" d="M14.279,36.641l9.455-16.065l-4.653-7.907L4.762,37h9.366C14.178,36.88,14.212,36.756,14.279,36.641	C14.279,36.642,14.279,36.642,14.279,36.641z"></path><path fill="#1de9b6" d="M14.262,39.569c-0.453-0.792-0.481-1.74-0.134-2.569H4.762l14.319-24.331l4.653,7.907l2.321-3.943	l-4.358-7.404c-0.551-0.937-1.528-1.496-2.615-1.497c0,0,0,0-0.001,0c-1.086,0-2.064,0.559-2.616,1.496L0.458,36.425	c-0.551,0.936-0.559,2.103-0.02,3.046S1.988,41,3.074,41h13.438C15.58,40.908,14.732,40.392,14.262,39.569z M2.182,37.44h0.01H2.182	z"></path><path fill="#00bfa5" d="M47.65,36.641L33.478,12.562c-0.53-0.9-1.469-1.437-2.513-1.437c-1.044,0-1.984,0.537-2.514,1.437	l-2.396,4.071l2.321,3.943l2.589-4.398L43,37h-5c0.258,0.802,0.151,1.724-0.276,2.471C37.185,40.414,36.086,41,35,41l0,0	c0.001,0.013-0.001-0.013,0,0h10c1.043,0,2.149-0.525,2.667-1.431C48.186,38.664,48.179,37.542,47.65,36.641z"></path><path fill="#00838f" d="M38,37c-0.068-0.21-0.182-0.381-0.296-0.575l-9.328-15.849l-2.321-3.943l-2.321,3.943l-9.455,16.065	c0,0,0,0.001,0,0.001c-0.067,0.113-0.101,0.238-0.151,0.358c-0.347,0.829-0.32,1.778,0.134,2.569c0.47,0.822,1.318,1.338,2.25,1.431	h18.576c1.086,0,2.096-0.586,2.635-1.529C38.151,38.724,38.258,37.802,38,37z M26.055,24.519L33.401,37H18.71L26.055,24.519z"></path>
                                    </svg>                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*    Why us section */}
            <section className="bg-white dark:bg-gray-900">
                <div className="container grid grid-cols-1 gap-10 px-6 py-12 mx-auto lg:grid-cols-3">
                    <div className="flex items-center">

                        <h1 className="mt-2 md:text-6xl font-bold text-yellow-300 text-3xl dark:text-white !important">Why Us ?</h1>

                    </div>

                    <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2">
                        <div>
                            <h2 className="font-bold text-3xl text-blue-800 dark:text-white mb-10">Expertise</h2>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br /> Melbourne VIC 3000 AU</p>
                        </div>

                        <div>
                            <h2 className="font-bold text-3xl text-blue-800 dark:text-white mb-10">London</h2>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">100 Oxford Street <br /> London W1D 1LL UK</p>
                        </div>

                        <div>
                            <h2 className="font-bold text-3xl text-blue-800 dark:text-white mb-10">Sydney</h2>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br /> Melbourne VIC 3000 AU</p>
                        </div>

                        <div>
                            <h2 className="font-bold text-3xl text-blue-800 dark:text-white mb-10">San Francisco</h2>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br /> Melbourne VIC 3000 AU</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievement    */}
            <main className="bg-emerald-50 w-full mt-8">
                <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                    <div className="col-span-2 mb-8">
                        <h1 className="mt-2 md:text-5xl font-bold text-blue-500 text-3xl dark:text-white !important mb-4">Helping a local Business</h1>
                        <h1 className="mt-2 md:text-5xl font-bold text-yellow-300 text-3xl dark:text-white !important mb-10">reinvent itself</h1>
                        <p className="font-medium text-gray-500 sm:text-lg dark:text-gray-400">We reached here with our hard work hand and dedication</p>

                    </div>
                    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                        <div>
                            <svg className="w-8 h-8 mb-2 text-yellow-300 md:w-12 md:h-12 dark:text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>

                            <h3 className="mb-2 text-2xl font-bold dark:text-white">2212</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">Clients</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-2 text-yellow-300 md:w-12 md:h-12 dark:text-purple-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                            </svg>

                            <h3 className="mb-2 text-2xl font-bold dark:text-white">229</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">Collaboration</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-2 text-yellow-300 md:w-12 md:h-12 dark:text-purple-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>

                            <h3 className="mb-2 text-2xl font-bold dark:text-white">828</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">Deploy Service</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-2 text-yellow-300 md:w-12 md:h-12 dark:text-purple-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                            </svg>

                            <h3 class="mb-2 text-2xl font-bold dark:text-white">1924</h3>
                            <p class="font-light text-gray-500 dark:text-gray-400">Feedback</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Our Cilent Sections   */}
            <div className="container my-24 mx-auto md:px-6">
                {/* Section: Design Block */}
                <section className="mb-32 text-center">
                    <h2 className="text-4xl font-bold text-center pb-28 mt-10">Our Clients</h2>

                    <div className="grid px-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        <div className="mx-auto mb-12 lg:mb-0">
                            <img
                                src="/images/cstad.png"
                                className="px-6 dark:brightness-150 md:px-12 w-24"
                                alt="Nasa - logo"
                            />
                        </div>

                        <div className="mx-auto mb-12 lg:mb-0">
                            <img
                                src="/images/brachnha.png"
                                className="px-6 dark:brightness-150 md:px-12 w-24"
                                alt="Amazon - logo"
                            />
                        </div>

                        <div className="mx-auto mb-12 lg:mb-0">
                            <img
                                src="/images/surveybox.png"
                                className="px-6 dark:brightness-150 md:px-12 w-24"
                                alt="Nike - logo"
                            />
                        </div>

                        <div className="mx-auto mb-12 lg:mb-0">
                            <img
                                src="/images/photostad.png"
                                className="px-6 dark:brightness-150 md:px-12 w-24"
                                alt="Ikea - logo"
                            />
                        </div>
                        <div className="mx-auto mb-12 lg:mb-0">
                            <img
                                src="/images/portistad.png"
                                className="px-6 dark:brightness-150 md:px-12 w-24"
                                alt="Ikea - logo"
                            />
                        </div>
                        <div className="mx-auto mb-12 mt-10 lg:mb-0">
                            <img
                                src="/images/istaddemy.png"
                                className="px-6 dark:brightness-150 md:px-12 w-24"
                                alt="Ikea - logo"
                            />
                        </div>
                        <div className="mx-auto mb-12 mt-10 lg:mb-0">
                            <img
                                src="/images/camgiving.png"
                                className="px-6 dark:brightness-150 md:px-12 w-24"
                                alt="Ikea - logo"
                            />
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>

        </section>

    )

}
export default HeroSection