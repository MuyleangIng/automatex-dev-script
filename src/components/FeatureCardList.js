import React from 'react';
import {Card} from "flowbite-react";

function FeatureCardList(props) {
    return (<section className="bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                <div className="max-w-xl md:mx-auto text-center lg:max-w-2xl md:mb-12">
                    <h2 data-aos="fade-down-right" className="max-w-lg text-3xl font-extrabold text-cool-blue-100 dark:text-orange-100 sm:text-4xl md:mx-auto block whitespace-nowrap relative">
                        Our Feature
                        <span
                            className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 bg-cyan-300 h-1 w-3/12 rounded"></span>
                    </h2>
                    <p data-aos="fade-up-right" className="text-gray-500 mb-6 lg:text-lg lg:mt-6 dark:text-gray-300 sm:text-lg  mt-5">
                        Welcome to AutomateX, your all-in-one solution for seamless automation and
                        effortless deployment.
                    </p>
                </div>

                <div
                    className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                        <div  data-aos="flip-right"  className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex items-center justify-center">
                            <div className="relative">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl" >
                                    <svg className="w-6 h-6 absolute top-3 left-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="Rocket"><path d="M32 5.815s-10.073 7.816-10.073 27.016c0 12.314 3.724 20.013 8.573 21.329V41.766a1.5 1.5 0 1 1 3 0V54.16c4.849-1.315 8.573-9.015 8.573-21.329C42.073 13.409 32 5.815 32 5.815zm-.118 14.818c-1.729 0-3.418-.155-4.914-.438 1.465-4.721 3.531-7.901 5.051-9.761 1.516 1.837 3.572 4.989 5.027 9.715-1.554.314-3.334.484-5.164.484zM19.224 41.319c-3.007 0-5.444 2.081-5.444 4.648v12.218l9.862-7.296c-1.463-2.496-2.556-5.737-3.201-9.57h-1.217zm25.552 0H43.56c-.645 3.833-1.738 7.074-3.201 9.57l9.862 7.296V45.967c-.001-2.567-2.438-4.648-5.445-4.648z" fill="#1d8dd7" className="color000000 svgShape"></path></svg>
                                </div>
                            </div>
                        </div>
                        <h3 className="lg:text-xl mb-5 my-4 text-base font-bold dark:text-white text-center">Auto Deploy</h3>
                        <p className="text-gray-500 lg:text-lg text-base dark:text-gray-400 text-center">
                            you can streamline the deployment process while maintaining. Watch the deployment progress
                            in real-time.
                        </p>
                    </div>
                    <div  data-aos="flip-right"  className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex items-center justify-center">
                            <div className="relative">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl" >
                                    <svg className="w-6 h-6 absolute top-3 left-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="User"><path fill="#1d8dd7" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z" clip-rule="evenodd" className="color000000 svgShape"></path></svg>
                                </div>
                            </div>
                        </div>
                        <h3 className="lg:text-xl mb-5 my-4 text-base font-bold dark:text-white text-center">User Monitoring</h3>
                        <p className="text-gray-500 lg:text-lg text-base dark:text-gray-400 text-center">
                            Keep a watchful eye on every aspect of your services, from memory usage to performance
                            metrics.
                        </p>
                    </div>
                    <div data-aos="flip-right"  className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex items-center justify-center">
                            <div className="relative">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl" >
                                    <svg className="w-6 h-6 absolute top-3 left-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="Loop"><path d="M24 8V2l-8 8 8 8v-6c6.63 0 12 5.37 12 12 0 2.03-.51 3.93-1.39 5.61l2.92 2.92C39.08 30.05 40 27.14 40 24c0-8.84-7.16-16-16-16zm0 28c-6.63 0-12-5.37-12-12 0-2.03.51-3.93 1.39-5.61l-2.92-2.92C8.92 17.95 8 20.86 8 24c0 8.84 7.16 16 16 16v6l8-8-8-8v6z" fill="#1d8dd7" className="color000000 svgShape"></path><path fill="none" d="M0 0h48v48H0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h3 className="lg:text-xl mb-5 my-4 text-base font-bold dark:text-white text-center"> Rollback Version</h3>
                        <p className="text-gray-500 lg:text-lg text-base dark:text-gray-400 text-center">
                            With a simple click, you can quickly revert to a previous, stable version of your
                            software.
                        </p>
                    </div>
                    <div  data-aos="flip-right"  className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex items-center justify-center">
                            <div className="relative">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl" >
                                    <svg className="w-6 h-6 absolute top-3 left-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="Cloud"><path fill="none" d="M0 0h48v48H0z"></path><path d="M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zM20 34l-7-7 2.83-2.83L20 28.34l10.35-10.35 2.83 2.83L20 34z" fill="#1d8dd7" className="color000000 svgShape"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h3 className="lg:text-xl mb-5 my-4 text-base font-bold dark:text-white text-center">
                            Cloude Storage
                        </h3>
                        <p className="text-gray-500 lg:text-lg text-base dark:text-gray-400 text-center">
                            Offers you a secure and convenient space to store your backups and upload files
                            effortlessly.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>);
}

export default FeatureCardList;