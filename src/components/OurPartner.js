import React from 'react';
import {Button} from "flowbite-react";
import Image from "next/image";

function OurPartner(props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
              <span className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 data-aos="zoom-in-up" className="max-w-lg mb-6 text-3xl font-extrabold text-cool-blue-100 dark:text-orange-100 sm:text-4xl md:mx-auto block whitespace-nowrap relative">
                        Our Best Clients
                    </h2>
                </span>
                <div className="grid grid-cols-2 gap-3 text-gray-500 dark:text-gray-400 md:grid-cols-3 lg:grid-cols-6">
                    <a data-aos="flip-down"
                       className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:bg-gray-800 dark:hover:bg-gray-400"
                       href="#"
                    >
                        <Image data-aos="flip-up" width={100} height={100} unoptimized="true"
                               src="/images/surveybox.png"
                               className="w-1/2 hover:text-gray-900 dark:hover:text-white"
                               alt="Ikea - logo"></Image>
                    </a>
                    <a data-aos="flip-down"
                       className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:bg-gray-800 dark:hover:bg-gray-400"
                       href="#"
                    >
                        <Image data-aos="flip-up" width={100} height={100} unoptimized="true"
                               src="/images/brachnha1.png"
                               className="w-2/3 hover:text-gray-900 dark:hover:text-white"
                               alt="Ikea - logo"></Image>
                    </a>
                    <a data-aos="flip-down"
                       className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:bg-gray-800 dark:hover:bg-gray-400"
                       href="#"
                    >
                        <Image data-aos="flip-up" width={100} height={100} unoptimized="true"
                               src="/images/photostad.png"
                               className="w-96 hover:text-gray-900 dark:hover:text-white"
                               alt="Ikea - logo"></Image>
                    </a>
                    <a data-aos="flip-down"
                       className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:bg-gray-800 dark:hover:bg-gray-400"
                       href="#"
                    >
                        <Image data-aos="flip-up" width={100} height={100} unoptimized="true"
                               src="/images/istaddemy.png"
                               className="w-2/3 hover:text-gray-900 dark:hover:text-white"
                               alt="Ikea - logo"></Image>
                    </a>
                    <a data-aos="flip-down"
                       className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:bg-gray-800 dark:hover:bg-gray-400"
                       href="#"
                    >
                        <Image data-aos="flip-up" width={100} height={100} unoptimized="true"
                               src="/images/camgiving.png"
                               className="w-1/2 hover:text-gray-900 dark:hover:text-white"
                               alt="Ikea - logo"></Image>
                    </a>
                    <a data-aos="flip-down"
                       className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:bg-gray-800 dark:hover:bg-gray-400"
                       href="#"
                    >
                        <Image data-aos="flip-up" width={100} height={100} unoptimized="true"
                               src="/images/portistad.png"
                               className="w-2/3 hover:text-gray-900 dark:hover:text-white"
                               alt="Ikea - logo"></Image>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default OurPartner;