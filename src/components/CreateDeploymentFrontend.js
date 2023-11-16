"use client"

import React from "react";

export default function CreateDeploymentFrontendComponent(){
    return(
        <>
            <section className="flex items-center flex-1 w-full mb-24">
                <div className="flex flex-col w-full ">
                    <h1 className="text-5xl font-extrabold text-center lg:text-5xl 2xl:text-6xl">
                    <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 animate-gradient">
                        Create Your
                    </span>
                        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                        Deployment
                    </span>
                    </h1>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 pb-20">
                <div className="grid lg:h-full ">
                    <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
                        <form
                            className="w-full space-y-4 md:space-y-6 xl:max-w-5xl"
                            action="#"
                        >
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                Server Name :
                            </h2>

                            <div className="flex items-center">
                                <p className="font-medium text-gray-500 sm:text-lg dark:text-gray-400">We reached here with our hard work hand and dedication</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Sever Name</label>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                Custom Domain of Default :
                            </h2>
                            <div className="flex items-center">
                                <p className="font-medium text-gray-500 sm:text-lg dark:text-gray-400">We reached here with our hard work hand and dedication</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Domain Name</label>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                Framework Preset :
                            </h2>
                            <div className="flex items-center">
                                <p className="font-medium text-gray-500 sm:text-lg dark:text-gray-400">We reached here with our hard work hand and dedication</p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                                <a
                                    className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                                    href="#"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="mx-auto w-20 h-32 sm:w-32 sm:h-32 mb-4" viewBox="0 0 48 48">
                                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                    </svg>
                                </a>
                                <a
                                    className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                                    href="#"
                                >
                                    <svg className="mx-auto w-20 h-32 sm:w-32 sm:h-32 mb-4" xmlns="http://www.w3.org/2000/svg" width="2500" height="2246" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 230" id="react"><path fill="#FFF" d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z"></path><path fill="#53C1DE" d="M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z"></path><path fill="#FFF" d="M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z"></path><path fill="#53C1DE" d="M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177"></path></svg>

                                </a>
                                <a
                                    className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                                    href="#"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="mx-auto w-20 h-32 sm:w-32 sm:h-32 mb-4" viewBox="0 0 48 48">
                                        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                                    </svg>
                                </a>
                                <a
                                    className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                                    href="#"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="mx-auto w-20 h-32 sm:w-32 sm:h-32 mb-4"viewBox="0 0 48 48">
                                        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                                    </svg>
                                </a>
                                <a
                                    className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                                    href="#"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="mx-auto w-20 h-32 sm:w-32 sm:h-32 mb-4" viewBox="0 0 48 48">
                                        <polygon fill="none" points="26.055,24.519 18.71,37 33.401,37"></polygon><path fill="none" d="M14.279,36.641l9.455-16.065l-4.653-7.907L4.762,37h9.366C14.178,36.88,14.212,36.756,14.279,36.641	C14.279,36.642,14.279,36.642,14.279,36.641z"></path><path fill="#1de9b6" d="M14.262,39.569c-0.453-0.792-0.481-1.74-0.134-2.569H4.762l14.319-24.331l4.653,7.907l2.321-3.943	l-4.358-7.404c-0.551-0.937-1.528-1.496-2.615-1.497c0,0,0,0-0.001,0c-1.086,0-2.064,0.559-2.616,1.496L0.458,36.425	c-0.551,0.936-0.559,2.103-0.02,3.046S1.988,41,3.074,41h13.438C15.58,40.908,14.732,40.392,14.262,39.569z M2.182,37.44h0.01H2.182	z"></path><path fill="#00bfa5" d="M47.65,36.641L33.478,12.562c-0.53-0.9-1.469-1.437-2.513-1.437c-1.044,0-1.984,0.537-2.514,1.437	l-2.396,4.071l2.321,3.943l2.589-4.398L43,37h-5c0.258,0.802,0.151,1.724-0.276,2.471C37.185,40.414,36.086,41,35,41l0,0	c0.001,0.013-0.001-0.013,0,0h10c1.043,0,2.149-0.525,2.667-1.431C48.186,38.664,48.179,37.542,47.65,36.641z"></path><path fill="#00838f" d="M38,37c-0.068-0.21-0.182-0.381-0.296-0.575l-9.328-15.849l-2.321-3.943l-2.321,3.943l-9.455,16.065	c0,0,0,0.001,0,0.001c-0.067,0.113-0.101,0.238-0.151,0.358c-0.347,0.829-0.32,1.778,0.134,2.569c0.47,0.822,1.318,1.338,2.25,1.431	h18.576c1.086,0,2.096-0.586,2.635-1.529C38.151,38.724,38.258,37.802,38,37z M26.055,24.519L33.401,37H18.71L26.055,24.519z"></path>
                                    </svg>
                                </a>
                                <a
                                    className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                                    href="#"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="mx-auto w-20 h-32 sm:w-32 sm:h-32 mb-4" viewBox="0 0 48 48">
                                        <path fill="#bdbdbd" d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"></path><path fill="#b71c1c" d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"></path><path fill="#dd2c00" d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"></path><path fill="#bdbdbd" d="M24 5.996L24 15.504 32.578 34 36.987 34z"></path><path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z"></path><path fill="#bdbdbd" d="M24 24H30V28H24z"></path><path fill="#eee" d="M18 24H24V28H18z"></path>
                                    </svg>
                                </a>
                                <a
                                    className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                                    href="#"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="mx-auto w-20 h-32 sm:w-32 sm:h-32 mb-4" viewBox="0 0 48 48">
                                        <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon>
                                    </svg>

                                </a>
                                <a
                                    className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                                    href="#"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="mx-auto w-20 h-32 sm:w-32 sm:h-32 mb-4" viewBox="0 0 48 48">
                                        <path fill="#b71c1c" d="M45,29.316c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,29.316,3,29.832,3,30.469v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,32.882,45,32.83,45,32.775V29.316z"></path><path fill="#e53935" d="M20.616,39.158c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,39.792,22.048,39.798,20.616,39.158z"></path><path fill="#b71c1c" d="M45,21.675c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,21.675,3,22.192,3,22.829v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,25.242,45,25.19,45,25.135V21.675z"></path><path fill="#e53935" d="M20.616,31.517c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,32.152,22.048,32.158,20.616,31.517z"></path><path fill="#b71c1c" d="M45,14.035c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,14.035,3,14.551,3,15.188v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,17.601,45,17.549,45,17.494V14.035z"></path><path fill="#e53935" d="M20.616,23.877c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,24.512,22.048,24.517,20.616,23.877z"></path><path fill="#fff" d="M18.748,14.741c-0.002,1.042-2.762,2.057-5.093,2.086c-2.419,0.03-5.273-0.993-5.282-2.051	c-0.009-1.061,2.842-2.161,5.311-2.135C16.017,12.665,18.751,13.703,18.748,14.741z"></path><path fill="#fff" d="M17.038,18.471c2.393,1.022,4.785,2.045,7.178,3.067c1.054-1.56,2.108-3.12,3.162-4.68	C23.931,17.396,20.485,17.934,17.038,18.471z"></path><path fill="#fff" d="M21.86,9.775c-1.101,0.401-2.203,0.801-3.304,1.202c1.507,0.132,3.015,0.264,4.522,0.395	c0.48,0.796,0.959,1.592,1.439,2.387c0.295-0.722,0.59-1.444,0.885-2.166c1.286-0.1,2.572-0.2,3.858-0.3	c-0.997-0.419-1.994-0.839-2.991-1.259c0.254-0.608,0.508-1.216,0.762-1.825c-0.97,0.29-1.939,0.58-2.909,0.87	c-1.07-0.422-2.14-0.843-3.21-1.265C21.228,8.468,21.544,9.122,21.86,9.775z"></path><path fill="#b71c1c" d="M27.267,14.619c2.271-0.906,4.543-1.813,6.814-2.719c1.962,0.834,3.924,1.668,5.886,2.502	c-2.202,0.876-4.403,1.752-6.605,2.629C31.331,16.226,29.299,15.423,27.267,14.619z"></path><path fill="#a01c1c" d="M34.082,11.963c-0.005,1.596-0.01,3.191-0.015,4.787c1.967-0.783,3.934-1.565,5.901-2.348	C38.006,13.589,36.044,12.776,34.082,11.963z"></path>
                                    </svg>
                                </a>
                                <a
                                    className="flex flex-col items-center justify-center rounded-xl border border-black border-opacity-10 p-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10"
                                    href="#"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="mx-auto w-20 h-32 sm:w-32 sm:h-32 mb-4"  viewBox="0 0 48 48">
                                        <path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
                                    </svg>
                                </a>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                Deployment Method:
                            </h2>
                            <div className="flex items-center">
                                <p className="font-medium text-gray-500 sm:text-lg dark:text-gray-400">We reached here with our hard work hand and dedication</p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                                <button
                                    className="w-full group h-20 px-2 border-2 border-gray-200 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 25 25" viewBox="0 0 25 25" id="git"><g fill="#583689"><path d="M4.711 13.689c-2.327 0-4.22-1.894-4.22-4.223s1.893-4.223 4.22-4.223 4.22 1.895 4.22 4.223-1.893 4.223-4.22 4.223zm0-6.446c-1.224 0-2.22.997-2.22 2.223s.996 2.223 2.22 2.223 2.22-.997 2.22-2.223-.996-2.223-2.22-2.223zM5.247 24.432c-2.767 0-4.935-1.54-4.935-3.506s2.168-3.507 4.935-3.507c2.768 0 4.936 1.541 4.936 3.507s-2.168 3.506-4.936 3.506zm0-5.013c-1.68 0-2.935.795-2.935 1.507 0 .711 1.255 1.506 2.935 1.506s2.936-.795 2.936-1.506c0-.712-1.256-1.507-2.936-1.507z"></path><path d="m5.217 19.353c-1.73-.734-2.728-1.775-2.964-3.094-.392-2.189 1.551-4.088 1.773-4.298l1.369 1.457-.685-.729.688.727c-.36.343-1.351 1.539-1.176 2.495.111.61.708 1.149 1.775 1.601z"></path><path d="m7.092 5.896h2.295v2h-2.295z" transform="rotate(-34.699 8.239 6.896)"></path><path d="m12.296 6.959h2v9.311h-2z"></path></g><path fill="#de002a" d="m13.296 4.781c-.945 0-1.715-.77-1.715-1.716s.77-1.716 1.715-1.716c.946 0 1.716.77 1.716 1.716s-.77 1.716-1.716 1.716zm0-2c-.156 0-.284.127-.284.284s.128.284.284.284c.157 0 .285-.127.285-.284 0-.156-.128-.284-.285-.284z"></path><path fill="#583689" d="m23.312 17.27h-1.333c-2.184 0-3.96-1.777-3.96-3.962v-9.168h2v9.168c0 1.082.879 1.962 1.96 1.962h1.333z"></path><path fill="#583689" d="m17.231 6.3h5.007v2h-5.007z"></path></svg>
                                        <div className="flex flex-col ml-2 leading-4 text-left md:ml-3 p-2">
                                            <span className="text-base font-semibold text-black dark:text-gray-400">AutomateX git</span>
                                            <span className=" font-light text-black dark:text-gray-400">
                                            use automatex CLI
                                        </span>
                                        </div>
                                    </div>
                                </button>
                                <button
                                    className="w-full group h-20 px-2 border-2 border-gray-200 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="zip-file"><path fill="#5aaae7" d="M13 51H43v6a4 4 0 0 0 8 0V43H13zM55 3H17.11A4.11 4.11 0 0 0 13 7.11V21H51V7A4 4 0 0 1 55 3z"></path><path fill="#78b9eb" d="M43,57V51H5v6a4,4,0,0,0,4,4H47a3.995,3.995,0,0,1-4-4Z"></path><path fill="#1e81ce" d="M55,3a4,4,0,0,0-4,4v6h8V7a3.995,3.995,0,0,0-4-4Z"></path><polygon fill="#ff9478" points="51 21 13 21 9 21 9 43 13 43 51 43 55 43 55 21 51 21"></polygon><path fill="#fff" d="M40,26H36a1,1,0,0,0-1,1V38h2V33h3a3,3,0,0,0,3-3V29A3,3,0,0,0,40,26Zm1,4a1,1,0,0,1-1,1H37V28h3a1,1,0,0,1,1,1Z"></path><rect width="2" height="12" x="31" y="26" fill="#fff"></rect><path fill="#fff" d="M28.9,27.447A1,1,0,0,0,28,26H22v2h4.382l-4.277,8.553A1,1,0,0,0,23,38h6V36H24.618Z"></path></svg>
                                        <div className="flex flex-col ml-2 leading-4 text-left md:ml-3 p-2">
                                            <span className="text-base font-semibold text-black dark:text-gray-400">Source Code</span>
                                            <span className=" font-light text-black dark:text-gray-400">
                                           drops your zip file
                                        </span>
                                        </div>
                                    </div>
                                </button>
                                <button
                                    className="w-full group h-20 px-2 border-2 border-gray-200 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>                                      <div className="flex flex-col ml-2 leading-4 text-left md:ml-3 p-2">
                                            <span className="text-base font-semibold text-black dark:text-gray-400">GitHub</span>
                                            <span className=" font-light text-black dark:text-gray-400">
                                            connect to github
                                        </span>
                                        </div>
                                    </div>
                                </button>
                                <button
                                    className="w-full group h-20 px-2 border-2 border-gray-200 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="gitlab"><polygon fill="#E24329" points="12 23.054 16.419 9.453 7.581 9.453 12 23.054"></polygon><polygon fill="#C53A24" points="12 9.453 7.581 9.453 12 23.054 12 9.453"></polygon><polygon fill="#FC6D26" points="12 23.054 7.581 9.453 1.388 9.453 12 23.054"></polygon><path fill="#FCA326" d="M1.388,9.453l-1.343,4.133c-0.123,0.377,0.012,0.79,0.332,1.023L12,23.054L1.388,9.453L1.388,9.453z"></path><path fill="#E24329" d="M1.388,9.453h6.193L4.919,1.262c-0.136-0.421-0.732-0.421-0.87,0L1.388,9.453L1.388,9.453z"></path><polygon fill="#DB5F21" points="4.484 9.453 1.388 9.453 4.484 13.422 4.484 9.453"></polygon><path fill="#DB8E21" d="M1.388,9.453l-1.343,4.133c-0.123,0.377,0.012,0.79,0.332,1.023l4.107,2.984v-4.171L1.388,9.453L1.388,9.453z"></path><path fill="#C53A24" d="M4.484,0.946c-0.183,0-0.367,0.105-0.436,0.316L1.388,9.453h3.097L4.484,0.946L4.484,0.946L4.484,0.946z"></path><polygon fill="#FC6D26" points="12 23.053 16.419 9.453 22.612 9.453 12 23.053"></polygon><path fill="#FCA326" d="M22.612,9.453l1.343,4.133c0.123,0.377-0.012,0.79-0.332,1.023L12,23.054L22.612,9.453L22.612,9.453z"></path><path fill="#E24329" d="M22.612,9.453h-6.193l2.662-8.191c0.137-0.421,0.733-0.421,0.87,0L22.612,9.453L22.612,9.453z"></path><polygon fill="#DB5F21" points="19.581 9.453 16.419 9.453 12 23.053 19.581 13.338 19.581 9.453"></polygon><polygon fill="#DB8E21" points="19.581 13.339 12 23.054 19.581 17.546 19.581 13.339"></polygon><path fill="#C53A24" d="M19.516,0.946c-0.183,0-0.366,0.105-0.435,0.316l-2.662,8.191h3.162V0.951C19.559,0.948,19.537,0.946,19.516,0.946L19.516,0.946z"></path></svg>
                                        <div className="flex flex-col ml-2 leading-4 text-left md:ml-3 p-2">
                                            <span className="text-base font-semibold text-black dark:text-gray-400">Gitlab</span>
                                            <span className=" font-light text-black dark:text-gray-400">
                                            connect to gitlab
                                        </span>
                                        </div>
                                    </div>
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </section>
        </>


    )
}