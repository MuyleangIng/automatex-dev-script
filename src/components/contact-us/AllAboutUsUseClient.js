"use client";
import React from 'react';
import {Button} from "flowbite-react";
import Image from "next/image";
import Concardduty from "@/components/contact-us/Concardduty";
import OurTeam from "@/components/contact-us/OurTeam";
import ContactUs from "@/components/contact-us/ContactUs";
import Lottie from "lottie-react";
import Spaces from "@/app/utils/assets/aboutus.json";
import Dash from "@/app/utils/assets/dashboard.json";
import {FaArrowRight} from "react-icons/fa6";

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
                                    outline
                                    className={"bg-cyan-300 "}
                                >
                                    Contact us
                                </Button>
                            </div>
                        </div>
                        <Lottie
                            animationData={Spaces}
                            className="mx-auto hidden w-6/12 md:flex"
                            data-aos="fade-right"
                        />
                    </div>
                </section>
                {/*card duty component*/}
                <Concardduty/>

                {/*vision section*/}
                <section className="bg-white dark:bg-gray-900">
                    <div
                        className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
                        <Lottie
                            animationData={Dash}
                            className="mx-auto hidden w-full md:flex"
                            data-aos="fade-right"
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
                            <Button
                                outline
                                className={"bg-cyan-300 "}
                            >
                                Get Start
                                <FaArrowRight className="w-3.5 h-3.5 ml-2"/>
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