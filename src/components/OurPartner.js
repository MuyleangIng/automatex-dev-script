import React from 'react';
import {Button} from "flowbite-react";
import Image from "next/image";

function OurPartner(props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
                <h2 className="mb-8 text-center text-3xl text-cool-blue-151 font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">
                    Our beloved partner
                </h2>
                <div className="grid grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
                    <a href="#" className="flex items-center justify-center">
                        <Image width={100} height={100} unoptimized="true"
                               src="/images/portistad.png"
                               className="h-28 hover:text-gray-900 dark:hover:text-white"
                               alt="Ikea - logo"></Image>
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <Image width={100} height={100} unoptimized="true"
                               src="/images/surveybox.png"
                               className="w-5/12 hover:text-gray-900 dark:hover:text-white"
                               alt="Ikea - logo"></Image>
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <Image width={100} height={100} unoptimized="true"
                               src="/images/istaddemy.png"
                               className="w-6/12 hover:text-gray-900 dark:hover:text-white"
                               alt="Ikea - logo"></Image>
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <Image width={100} height={100} unoptimized="true"
                               src="/images/cstad.png"
                               className="w-5/12 hover:text-gray-900 dark:hover:text-white"
                               alt="Ikea - logo"></Image>
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <a href="#" className="flex items-center justify-center">
                            <Image width={100} height={100} unoptimized="true"
                                   src="/images/camgiving.png"
                                   className="w-8/12 hover:text-gray-900 dark:hover:text-white"
                                   alt="Ikea - logo"></Image>
                        </a>
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <Image width={100} height={100} unoptimized="true"
                               src="/images/photostad.png"
                               className="w-8/12 hover:text-gray-900 dark:hover:text-white"
                               alt="Ikea - logo"></Image>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default OurPartner;