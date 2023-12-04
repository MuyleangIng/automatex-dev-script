"use client";
import React from 'react';
import {Button} from "flowbite-react";
import Image from "next/image";
import Concardduty from "@/components/contact-us/Concardduty";
import OurTeam from "@/components/contact-us/OurTeam";
import ContactUs from "@/components/contact-us/ContactUs";

function AllAboutUsUseClient(props) {
    return (<>
            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div
                        className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
                        <div>
                            <h2 className="mb-4 text-4xl font-extrabold text-orange-100 tracking-tight text-gray-900 dark:text-white">
                                Welcome to AutomateX –
                            </h2>
                            <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg">
                                At AutomateX, we are on a mission to revolutionize the way businesses operate by
                                harnessing
                                the power of automation. In a fast-paced world, where time is of the essence, we believe
                                in
                                simplifying processes
                            </p>
                            <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                                <Button
                                    href="#"
                                    className="border-0 bg-orange-100 text-white hover:bg-cool-blue-50 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                >
                                    <div className="text-center">
                                        <div className="-mt-1 font-sans text-sm font-semibold">
                                            Contact Us
                                        </div>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <Image width={100} height={100} unoptimized="true"
                               alt="mobile app"
                               src="/images/about/vision.png"
                               className="mx-auto hidden w-9/12 md:flex"
                        />
                    </div>
                </section>
                {/*card duty component*/}
                <Concardduty/>

                {/*vision section*/}
                <section className="bg-white dark:bg-gray-900">
                    <div
                        className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
                        <Image width={100} height={100} unoptimized="true"
                               alt=""
                               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                               className="w-full dark:hidden"
                        />
                        <Image width={100} height={100} unoptimized="true"
                               alt="sasa"
                               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                               className="hidden w-full dark:block"
                        />
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl font-extrabold text-orange-100 tracking-tight text-gray-900 dark:text-white">
                                Our Visions +
                            </h2>
                            <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg">
                                We warmly welcome all stakeholders, partners, and enthusiasts to join us in shaping this
                                transformative journey. Your contributions are key to turning our collective vision into
                                a
                                dynamic reality that exceeds every expectation.
                            </p>
                            <Button href="#" className="w-fit [&>span]:items-center bg-orange-100">
                                Get started
                                <svg
                                    className="-mr-1 ml-2 h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </section>

                {/*    our team member */}
                <OurTeam/>
                {/*Contact Us*/}
                <ContactUs/>
            </div>
        </>

    );
}

export default AllAboutUsUseClient;