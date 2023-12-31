"use client"
import React from 'react';
import {Avatar, Button, Card} from "flowbite-react";
import Link from "next/link";

function Page(props) {
    return (<div>
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Privacy Policy
                    </h2>
                    <p className="mb-8 text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
                        Read this Privacy Policy and our Cookie Policy carefully

                    </p>

                </div>
                <div className="mb-8 grid lg:mb-12 lg:grid-cols-2">
                    <Card
                        className="flex flex-col items-center justify-center rounded-none border-0 border-b border-gray-200 bg-gray-50 p-3 text-center dark:border-gray-700 dark:bg-gray-800 md:border-r md:p-8">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Who We Are and How To Contact Us
                            </h3>
                            <p className="my-4">
                                Welcome to <Link as={Link} href="https://automatex.dev/" target={"_blank"}
                                                 style={{color: 'blue'}}>automatex.dev</Link>, hosted by AutomateX Inc.
                                (AutomateX). We collect
                                personal data from our customers and their end users  to
                                provide our services. Personal information includes data like names, addresses, and IP
                                addresses.
                            </p>
                            <p className="my-4">


                            </p>
                            <p className="my-4">
                                If you have any questions comments or concerns regarding this Privacy Policy our
                                Cookie Policy and/or our data practices or would like to exercise your rights do not
                                hesitate to contact us at privacy@AutomateX.com or see our information below.
                            </p>
                        </blockquote>
                    </Card>
                    <Card
                        className="flex flex-col items-center justify-center rounded-none border-0 border-b border-gray-200 bg-gray-50 p-3 text-center dark:border-gray-700 dark:bg-gray-800 md:p-8">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Children Privacy
                            </h3>
                            <p className="my-4">
                                This Privacy Policy explains how we handle personal data on our Platform. It covers
                                affiliated websites software, or platforms owned or operated by AutomateX. Note that it
                                does not address how Customers handle their End Users data on their websites.
                            </p>
                            <p className="my-4">
                                Note at the outset that this Privacy Policy does not cover our Customers websites. Each
                                Customer is responsible for posting its own terms conditions and privacy policies, and
                                ensuring compliance with all applicable laws and regulations.

                            </p>
                        </blockquote>
                    </Card>
                </div>
            </div>
        </section>
    </div>);
}

export default Page;