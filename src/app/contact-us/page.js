"use client"
import React from 'react';
import Image from "next/image";
import {Card} from "flowbite-react";

function Page(props) {
    return (<section>
        <div className={"max-w-screen-xs lg:max-w-screen-xl mx-auto px-5 sm:px-0 py-14 md:py-10 lg:py-0"}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                    <div className="max-w-md mx-auto" data-aos="zoom-out-left">
                        <div className={"flex items-center flex-col gap-5 sm:items-start py-10"}>
                            <h1 className={"uppercase text-orange-100 font-extrabold text-3xl"}>AutomateX</h1>
                            <p className={"opacity-80 text-lg"}>
                                Optimize every task through automation with Automatex. Free yourself from repetitive
                                duties, unlock the full potential of your DevOps expertise . </p>
                        </div>
                    </div>
                </div>
                <div className={"order-1"} data-aos="zoom-in-left">
                    <Image unoptimized width={100} height={100} className={"w-full h-full"}
                           src="/images/about/vision.png" alt="banner-header.png"/>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-9  max-w-screen-xs lg:max-w-screen-xl mx-auto px-5 sm:px-0 py-14 md:py-10 lg:py-0 ">
            <Card className="h-auto max-w-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                    order.
                </p>
            </Card>
            <div>
            {/*<Card href="#" className="h-auto max-w-full">*/}
            {/*    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">*/}
            {/*        Noteworthy technology acquisitions 2021*/}
            {/*    </h5>*/}
            {/*    <p className="font-normal text-gray-700 dark:text-gray-400">*/}
            {/*        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological*/}
            {/*        order.*/}
            {/*    </p>*/}
            {/*</Card>*/}
        </div>
        <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
            />
        </div>
        <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt=""
            />
        </div>
    </div>


</section>


)

}

export default Page;