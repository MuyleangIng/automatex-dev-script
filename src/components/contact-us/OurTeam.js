import React from 'react';
import Image from "next/image";

function OurTeam(props) {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Executive Team</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-80 dark:border-orange-200 dark:hover:border-transparent">
                        <Image
                            width="100"
                            height="100"
                            class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                            src="/images/our-member/thy.jpg"
                            unoptimized={true}
                            alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Nun Somrithy</h1>

                            <p class="mt-2 text-gray-600 capitalize dark:text-gray-300 group-hover:text-gray-50">DevOps</p>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-80 dark:border-orange-200 dark:hover:border-transparent">
                        <Image
                            width="100"
                            height="100"
                            unoptimized={true}
                            class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                            src="/images/our-member/leang.jpg"
                            alt=""/>

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Ing Muyleang</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-50">DevOps</p>
                    </div>
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-80 dark:border-orange-200 dark:hover:border-transparent">
                        <Image
                            width="100"
                            height="100"
                            unoptimized={true}
                            class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                            src="/images/our-member/mich.jpg"
                            alt=""/>

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Neuy Mich</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-50">DevOps</p>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-80 dark:border-orange-200 dark:hover:border-transparent">
                        <Image
                            width="100"
                            height="100"
                            unoptimized={true}
                            class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                            src="/images/our-member/sal.jpg"
                            alt=""/>

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Sak Visal</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-50">DevOps</p>
                    </div>
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-80 dark:border-orange-200 dark:hover:border-transparent">
                        <Image
                            width="100"
                            height="100"
                            unoptimized={true}
                            class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                            src="/images/our-member/nha.jpg"
                            alt=""/>

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Pos Panha</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-50">DevOps</p>
                    </div>
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-80 dark:border-orange-200 dark:hover:border-transparent">
                        <Image
                            width="100"
                            height="100"
                            unoptimized={true}
                            class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                            src="/images/our-member/leap.jpg"
                            alt=""/>

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Sovattana Samboleap</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-50">DevOps</p>
                    </div>
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-80 dark:border-orange-200 dark:hover:border-transparent">
                        <Image
                            width="100"
                            height="100"
                            unoptimized={true}
                            class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                            src="/images/our-member/lit.jpg"
                            alt=""/>

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Thon Chhavalit</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-50">DevOps</p>
                    </div>
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-80 dark:border-orange-200 dark:hover:border-transparent">
                        <Image
                            width="100"
                            height="100"
                            unoptimized={true}
                            class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                            src="/images/our-member/pav.jpg"
                            alt=""/>

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Chhay Seavpav</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-50">DevOps</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default OurTeam;