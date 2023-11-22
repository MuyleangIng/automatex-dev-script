import React from "react";

export default function SilderCard(){
    return(
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                <a
                    className="flex flex-col w:2/3 items-center w-2/3 justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                    href="#"
                >
                    <img
                        src="/images/photostad.png"
                        className="mx-auto w-20 h-20 md:w-24 md:h-20mb-4"
                        alt="Ikea - logo"
                    />

                </a>
                <a
                    className="flex flex-col w:2/3 items-center w-2/3 justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                    href="#"
                >
                    <img
                        src="/images/surveybox.png"
                        className="mx-auto w-20 h-20 md:w-24 md:h-20mb-4"
                        alt="Ikea - logo"
                    />

                </a>
                <a
                    className="flex flex-col w:2/3 items-center w-2/3 justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                    href="#"
                >
                    <img
                        src="/images/camgiving.png"
                        className="mx-auto w-20 h-20 md:w-24 md:h-20mb-4"
                        alt="Ikea - logo"
                    />

                </a>
                <a
                    className="flex flex-col items-center w-2/3 justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                    href="#"
                >
                    <img
                        src="/images/brachnha.png"
                        className="mx-auto w-20 h-20 md:w-24 mb-4"
                        alt="Ikea - logo"
                    />

                </a>
                <a
                    className="flex flex-col items-center w-2/3  justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                    href="#"
                >
                    <img
                        src="/images/istaddemy.png"
                        className="mx-auto w-20 h-20 md:w-24 mb-4"
                        alt="Ikea - logo"
                    />

                </a>
                <a
                    className="flex flex-col items-center w-2/3 justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                    href="#"
                >
                    <img
                        src="/images/portistad.png"
                        className="mx-auto w-20 h-32 md:w-24 mb-4"
                        alt="Ikea - logo"
                    />

                </a>

            </div>

        </>
    )
  }