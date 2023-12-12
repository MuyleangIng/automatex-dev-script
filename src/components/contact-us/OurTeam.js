import React from 'react';
import Image from "next/image";

function OurTeam(props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 dark:text-gray-300 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                    id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                  fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                  width="52"
                  height="24"
              />
            </svg>
          </span>{' '}
                        Our Talented Team of Professionals
                    </h2>
                </div>
                <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex">
                        <Image
                            width={100}
                            height={100}
                            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                            src="/images/sal.jpg"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-lg font-bold">Sak Visal</p>
                            <p className="text-sm text-gray-800 dark:text-gray-300">DevOps</p>
                        </div>
                    </div>
                    <div className="flex">
                        <Image
                            width={100}
                            height={100}
                            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                            src="/images/leang.jpg"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-lg font-bold">Ing MouyLeang</p>
                            <p className="text-sm text-gray-800 dark:text-gray-300">DevOps</p>
                        </div>
                    </div>
                    <div className="flex">
                        <Image
                            width={100}
                            height={100}
                            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                            src="/images/mich.jpg"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-lg font-bold">Neuy Mich</p>
                            <p className="text-sm text-gray-800 dark:text-gray-300">DevOps</p>
                        </div>
                    </div>
                    <div className="flex">
                        <Image
                            width={100}
                            height={100}
                            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                            src="/images/thy.jpg"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-lg font-bold">Nun Somrithy</p>
                            <p className="text-sm text-gray-800 dark:text-gray-300">DevOps</p>
                        </div>
                    </div>
                    <div className="flex">
                        <Image
                            width={100}
                            height={100}
                            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                            src="/images/lit.jpg"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-lg font-bold">Thon Chhavalit</p>
                            <p className="text-sm text-gray-800 dark:text-gray-300">DevOps</p>
                        </div>
                    </div>
                    <div className="flex">
                        <Image
                            width={100}
                            height={100}
                            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                            src="/images/nha.jpg"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-lg font-bold">Pos Panha</p>
                            <p className="text-sm text-gray-800 dark:text-gray-300">DevOps</p>
                        </div>
                    </div>
                    <div className="flex">
                        <Image
                            width={100}
                            height={100}
                            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                            src="/images/leap.jpg"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-lg font-bold">SoVathana Somboleap</p>
                            <p className="text-sm text-gray-800 dark:text-gray-300">DevOps</p>
                        </div>
                    </div>
                    <div className="flex">
                        <Image
                            width={100}
                            height={100}
                            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                            src="/images/pav.jpg"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-lg font-bold">Chhay SeavPav</p>
                            <p className="text-sm text-gray-800 dark:text-gray-300">DevOps</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurTeam;