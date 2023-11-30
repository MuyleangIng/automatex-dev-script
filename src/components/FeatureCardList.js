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
                    <p data-aos="fade-up-right" className="text-gray-500 dark:text-gray-400 sm:text-lg  mt-5">
                        Welcome to AutomateX, your all-in-one solution for seamless automation and
                        effortless deployment.
                    </p>
                </div>

                <div
                    className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                    <Card  data-aos="flip-right">
                        <div className="flex items-center justify-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={"w-14 h-14 text-orange-100 dark:text-orange-100"}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold dark:text-white text-center">User Monitoring</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            Keep a watchful eye on every aspect of your services, from memory usage to performance
                            metrics.
                        </p>
                    </Card>
                    <Card data-aos="flip-right">
                        <div className="flex items-center justify-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-orange-200 dark:text-orange-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold dark:text-white text-center"> Rollback Version</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            With a simple click, you can quickly revert to a previous, stable version of your
                            software.
                        </p>
                    </Card>
                    <Card  data-aos="flip-right">
                        <div className="flex items-center justify-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor"
                                     className="w-14 h-14 text-orange-200 dark:text-orange-100">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"/>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold dark:text-white text-center">
                            Cloude Storage
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            Offers you a secure and convenient space to store your backups and upload files
                            effortlessly.
                        </p>
                    </Card>
                    <Card  data-aos="flip-right">
                        <div className="flex items-center justify-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="orange" className="w-14 h-14 text-orange-200 dark:text-orange-100">
                                    <path d="M18.763 13.7944L20.029 16.0222C19.8786 16.3163 19.7105 16.6051 19.5244 16.8873C19.3383 17.1695 19.1391 17.4378 18.9281 17.6919L16.4377 17.4142C15.7715 17.9608 15.0027 18.3869 14.1645 18.6592L13.0002 20.945C12.6719 20.9813 12.3382 21 12.0002 21C11.6622 21 11.3285 20.9813 11.0002 20.945L9.83293 18.6582C8.99428 18.3854 8.22514 17.9585 7.5589 17.4111L5.05407 17.6915C4.84303 17.4374 4.64381 17.1691 4.45774 16.8869C4.27168 16.6047 4.10356 16.3159 3.95312 16.0218L5.22637 13.7814C5.07803 13.2142 5.00021 12.6139 5.00021 12.0002C5.00021 11.3749 5.08219 10.7688 5.23599 10.192L3.95351 7.936C4.10394 7.64191 4.27206 7.3531 4.45812 7.07091C4.64419 6.78873 4.84341 6.52043 5.05445 6.2663L7.60942 6.55327C8.26776 6.02075 9.01625 5.60683 9.84 5.33984M9.83614 5.33996L11 3.05493C11.3283 3.01863 11.662 3 12 3C12.338 3 12.6716 3.01863 13 3.05493L14.1638 5.33996C14.9882 5.60716 15.7389 6.01764 16.3976 6.55077L18.9275 6.26661C19.1385 6.52074 19.3377 6.78904 19.5238 7.07123C19.7098 7.35341 19.878 7.64223 20.0284 7.93632L18.7592 10.1697M18.7594 10.1732C18.9164 10.7556 19.0002 11.3681 19.0002 12.0002C19.0002 12.6215 18.9193 13.2239 18.7673 13.7974M15.0002 12.0002C15.0002 13.657 13.6571 15.0002 12.0002 15.0002C10.3433 15.0002 9.0002 13.657 9.0002 12.0002C9.0002 10.3433 10.3433 9.00015 12.0002 9.00015C13.6571 9.00015 15.0002 10.3433 15.0002 12.0002Z" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold dark:text-white text-center">Auto Deploy</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            you can streamline the deployment process while maintaining. Watch the deployment progress
                            in real-time.
                        </p>
                    </Card>
                </div>
            </div>
        </section>);
}

export default FeatureCardList;