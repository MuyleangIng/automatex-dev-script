"use client";
import React, {useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import {Button} from "flowbite-react";
import FeatureCardList from "@/components/FeatureCardList";
import OurPartner from "@/components/OurPartner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FaArrowRight} from "react-icons/fa6";
import {useRouter} from "next/navigation";
import Link from "next/link";
import Lottie from "lottie-react";
import Space from "@/app/utils/assets/cloud.json";
import Spaces from "@/app/utils/assets/service.json";
import { gsap } from 'gsap';
import Service from "@/app/utils/assets/herosec.json";
import HomeLoading from "@/components/HomeLoading";
import {useSession} from "next-auth/react";

function HeroSection() {
    const {status } = useSession()
    // git animation
    const router = useRouter()
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    const settings = {
        // dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 6, // Number of slides to show at a time
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true, // Auto-play slides
        autoplaySpeed: 2000, // Duration between slides in milliseconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    if (status === "loading") {
        return <HomeLoading />
    }



        return (<>
                <main className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between lg:flex-row">
                        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                            <div className="max-w-xl mb-6">
                                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl dark:text-white">
                                    <span className="text-orange-50 block mb-8" data-aos="fade-up-right">Say Goodbye </span>
                                    <span className="text-orange-50" data-aos="zoom-in-left">To <span data-aos="fade-down-right" className="text-cool-blue-300">Manual.</span></span>
                                </h1>
                                <p data-aos="zoom-in-left" className=" mb-5 mt-5 text-lg text-gray-600 dark:text-gray-300">At AutomateX we are on a
                                    mission to revolutionize the way you work. With AutomateX, you can say goodbye to manual
                                    tasks.</p>
                            </div>
                            <div className="flex flex-col items-center md:flex-row">
                                <Button outline
                                        onClick={() => router.push("/startbuilding")}
                                >
                                    Start Deploy
                                </Button>
                            </div>
                        </div>
                        <div className="relative lg:w-1/2">
                            <Lottie
                                animationData={Service}
                                className="mx-auto w-44 md:w-48 lg:w-52 xl:w-7/12 md:flex"
                                data-aos="fade-right"
                            />
                        </div>
                    </div>
                </main>
            <section className="{`bg-white ${theme === 'dark' ? 'dark:bg-gray-900' : 'dark:bg-gray-900'}  relative ">
                {/*Feature Section */}
                <div
                    className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ${theme === 'dark' ? 'dark:bg-gray-900' : 'dark:bg-gray-900'}">
                <span className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 data-aos="zoom-in-up" className=" max-w-lg mb-6 text-lg xl:text-3xl font-extrabold text-cool-blue-100 dark:text-orange-100 sm:text-4xl md:mx-auto block whitespace-nowrap relative">
                        Explore The Benefit of The Features
                        <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 bg-cyan-300 h-1 w-[30rem] rounded"></span>
                    </h2>
                    <p data-aos="zoom-in-left" className=" text-base text-gray-800 dark:text-gray-300 md:text-lg mb-14 mt-14f">
                        Unique and Powerful suit of software to run and entire,<br/> brought to you by a company with the
                        long term version to transform the way you work.
                    </p>
                </span>
                    <div className=" grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3 " data-aos="zoom-in-up">
                        <article data-aos="fade-up-left"
                                 className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="relative">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl">
                                    <svg className="w-6 h-6 absolute top-3 left-3 text-white"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Setting">
                                        <path fill="#1d8dd7"
                                              d="M6.98 1a.978.978 0 0 0-.98.98v1.231a5.5 5.5 0 0 0-1.176.492l-.873-.873a.978.978 0 0 0-1.387 0l-.734.735a.978.978 0 0 0 0 1.386l.87.87A5.5 5.5 0 0 0 2.214 7H.98A.978.978 0 0 0 0 7.98V9.02c0 .543.437.98.98.98h1.231a5.5 5.5 0 0 0 .49 1.178l-.87.871a.978.978 0 0 0 0 1.387l.733.734a.978.978 0 0 0 1.387 0l.87-.869A5.5 5.5 0 0 0 6 13.785v1.235c0 .543.437.98.98.98h1.04c.543 0 .98-.437.98-.98v-1.23a5.5 5.5 0 0 0 1.176-.493l.873.873a.978.978 0 0 0 1.387 0l.734-.734a.978.978 0 0 0 0-1.387l-.87-.87A5.5 5.5 0 0 0 12.786 10h1.235c.543 0 .98-.437.98-.98V7.98a.978.978 0 0 0-.98-.98h-1.23a5.5 5.5 0 0 0-.493-1.176l.873-.873a.978.978 0 0 0 0-1.386l-.734-.735a.978.978 0 0 0-1.387 0l-.87.87A5.5 5.5 0 0 0 9 3.214V1.981A.978.978 0 0 0 8.02 1H6.98zm.52 5A2.5 2.5 0 0 1 10 8.5 2.5 2.5 0 0 1 7.5 11 2.5 2.5 0 0 1 5 8.5 2.5 2.5 0 0 1 7.5 6z"
                                              className="colorf05542 svgShape"></path>
                                    </svg>
                                </div>
                            </div>
                            <h2 className="mt-5 mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                <Link href="#">
                                    Integrated platform
                                </Link>
                            </h2>
                            <p className="mb-4 text-lg text-gray-500 font-normal dark:text-gray-300">
                                This integration enables seamless communication and interaction between different
                                components have access to the most up-to-date information, promoting
                            </p>

                        </article>
                        <article data-aos="fade-up-left"
                                 className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="relative">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl">
                                    <svg className="w-6 h-6 absolute top-3 left-3 text-white"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="profile">
                                        <g data-name="Layer 2" fill="#1d8dd7" className="color000000 svgShape">
                                            <circle cx="16" cy="6.96" r="6" fill="#1d8dd7"
                                                    className="color000000 svgShape"></circle>
                                            <path
                                                d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"
                                                fill="#1d8dd7" className="color000000 svgShape"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <h2 className="mt-5 mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                <Link href="#">
                                    Personal Dashboard
                                </Link>
                            </h2>
                            <p className="mb-4 text-lg text-gray-500 font-normal dark:text-gray-300">
                                User dashboards ensuring that individuals only see information and features relevant to
                                their roles within an organization.
                            </p>

                        </article>
                        <article data-aos="fade-up-left"
                                 className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="relative">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="scan"
                                         className="w-6 h-6 absolute top-3 left-3 text-white">
                                        <path fill="#1d8dd7"
                                              d="M21.1972192,9.23684211 C21.4724456,9.20531344 21.7415728,9.33252106 21.8892455,9.56394031 C22.0369182,9.79535956 22.0369182,10.0899036 21.8892455,10.3213228 C21.7415728,10.5527421 21.4724456,10.6799497 21.1972192,10.6484211 L21.1972192,10.6484211 L20.1798966,10.6484211 L20.1798966,13.3105263 C20.1824453,14.5533801 19.6840627,15.7461917 18.7946562,16.625912 C17.9052498,17.5056323 16.6978739,18 15.4387895,18 L15.4387895,18 L14.6614015,18 C14.2638649,18 13.9415978,17.6818865 13.9415978,17.2894737 C13.9415978,16.8970608 14.2638649,16.5789474 14.6614015,16.5789474 L14.6614015,16.5789474 L15.4387895,16.5789474 C17.2524483,16.5581891 18.7116189,15.1009296 18.711497,13.3105263 L18.711497,13.3105263 L18.711497,10.6484211 L16.0146325,10.6484211 L16.0146325,11.7094737 C16.0146325,12.2999293 15.7770123,12.8662015 15.3540455,13.2837167 C14.9310788,13.7012319 14.3574128,13.9357895 13.7592475,13.9357895 L13.7592475,13.9357895 L8.26954461,13.9357895 C7.0239299,13.9357895 6.01415967,12.9390339 6.01415967,11.7094737 L6.01415967,11.7094737 L6.01415967,10.6484211 L3.35568465,10.6484211 L3.35568465,13.3105263 C3.35568465,15.1156254 4.83811329,16.5789474 6.66678169,16.5789474 L6.66678169,16.5789474 L7.49215661,16.5789474 C7.88969322,16.5789474 8.21196031,16.8970608 8.21196031,17.2894737 C8.21196031,17.6818865 7.88969322,18 7.49215661,18 L7.49215661,18 L6.71476861,18 C4.08315205,18.0001299 1.9423934,15.9080947 1.91607723,13.3105263 L1.91607723,13.3105263 L1.91607723,10.6484211 L0.802780836,10.6484211 C0.527554413,10.6799497 0.258427242,10.5527421 0.110754532,10.3213228 C-0.0369181774,10.0899036 -0.0369181774,9.79535956 0.110754532,9.56394031 C0.258427242,9.33252106 0.527554413,9.20531344 0.802780836,9.23684211 L0.802780836,9.23684211 Z M13.7496502,4.06421053 C14.3478154,4.06421053 14.9214814,4.29876812 15.3444481,4.71628332 C15.7674149,5.13379852 16.0050351,5.70007066 16.0050351,6.29052632 L16.0050351,6.29052632 L16.0050351,7.51263158 C16.0077577,7.58377363 15.9803208,7.65281715 15.9293226,7.70315806 C15.8783244,7.75349896 15.8083793,7.78058225 15.7363084,7.77789474 L15.7363084,7.77789474 L6.28288638,7.77789474 C6.21081542,7.78058225 6.1408704,7.75349896 6.08987219,7.70315806 C6.03887397,7.65281715 6.01143706,7.58377363 6.01415967,7.51263158 L6.01415967,7.51263158 L6.01415967,6.29052632 C6.01415967,5.06096606 7.0239299,4.06421053 8.26954461,4.06421053 L8.26954461,4.06421053 Z M15.4387895,5.68434189e-14 C18.0552408,0.0464966099 20.1515284,2.15369526 20.1511045,4.73684211 L20.1511045,4.73684211 L20.1511045,5.75052632 C20.1511045,6.14293916 19.8288373,6.46105263 19.4313007,6.46105263 C19.0337641,6.46105263 18.711497,6.14293916 18.711497,5.75052632 L18.711497,5.75052632 L18.711497,4.73684211 C18.7243076,3.86835591 18.3863844,3.03055443 17.7723434,2.40843021 C17.1583024,1.78630599 16.3186508,1.43103105 15.4387895,1.42105263 L15.4387895,1.42105263 L14.6614015,1.42105263 C14.2638649,1.42105263 13.9415978,1.10293916 13.9415978,0.710526316 C13.9415978,0.318113467 14.2638649,5.68434189e-14 14.6614015,5.68434189e-14 L14.6614015,5.68434189e-14 Z M7.44416969,5.68434189e-14 C7.83954545,0.0051023485 8.15880443,0.320246466 8.1639734,0.710526316 C8.15880443,1.10080617 7.83954545,1.41595028 7.44416969,1.42105263 L7.44416969,1.42105263 L6.66678169,1.42105263 C5.7802463,1.42096072 4.9307011,1.77180596 4.30835191,2.39503713 C3.68600272,3.01826831 3.3428363,3.86182498 3.35568465,4.73684211 L3.35568465,4.73684211 L3.35568465,5.75052632 C3.35051568,6.14080617 3.0312567,6.45595028 2.63588094,6.46105263 L2.63588094,6.46105263 L2.62628356,6.46105263 L2.5295877,6.45340744 C2.18196026,6.40260168 1.91607723,6.10687381 1.91607723,5.75052632 L1.91607723,5.75052632 L1.91607723,4.73684211 C1.91594565,2.13914387 4.03529672,0.0259769791 6.66678169,5.68434189e-14 L6.66678169,5.68434189e-14 Z"
                                              transform="translate(1 3)" className="color200e32 svgShape"></path>
                                    </svg>
                                </div>
                            </div>
                            <h2 className="mt-5 mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                <Link href="#">
                                    Scanning Technology
                                </Link>
                            </h2>
                            <p className="mb-4 text-lg text-gray-500 font-normal dark:text-gray-300">
                                Double scanning protocol to entails subjecting your application scanning processes to
                                minimizing the chances of any potential vulnerabilities going undetected.
                            </p>

                        </article>
                    </div>
                </div>

                {/*Service Section */}
                <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
                    <h2 data-aos="fade-up-right"
                        className="max-w-lg mb-6 text-3xl font-extrabold text-cool-blue-100 dark:text-orange-100 sm:text-4xl md:mx-auto block whitespace-nowrap relative">
                        Service
                        <span
                            className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 bg-cyan-300 h-1 w-3/12 rounded"></span>
                    </h2>
                </div>

                {/* First Card */}
                <main
                    className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded-r-full mb-8 lg:mb-0 bg-white dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div
                            className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 text-center lg:text-left text-black dark:text-gray-200">
                            <div className="max-w-xl mb-6">
                                <h2 data-aos="flip-right"
                                    className="max-w-lg mb-6 sm:text-2xl font-bold lg:text-xl text-cyan-500 sm:leading-none">
                                    Full Service Deployment
                                </h2>
                                <p data-aos="fade-down-left"
                                   className="text-base md:text-lg text-gray-800 dark:text-gray-300">
                                    Say goodbye to manual and error-prone deployment processes. Our Service automates
                                    the deployment of frontend code, backend service, database, and all other components
                                    of your application stack.
                                </p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3">
                                <Button
                                    outline
                                    className={"bg-cyan-300 "}
                                >
                                    See More
                                    <FaArrowRight className="w-3.5 h-3.5 ml-2"/>
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:w-1/2">
                            <Lottie
                                animationData={Spaces}
                                className="w-52 md:w-0 lg:w-0 xl:w-full"
                                data-aos="fade-right"
                            />
                        </div>
                    </div>
                </main>

                {/* Second Card */}
                <div
                    className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-5 md:px-24 lg:px-8 lg:py-20 mb-8 lg:mb-0 bg-white  dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="flex items-center justify-center lg:w-1/2">
                            <Lottie
                                animationData={Space}
                                className="w-40 md:w-0 lg:w-0 xl:w-2/3"
                                data-aos="fade-right"
                            />
                        </div>
                        <div
                            className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 text-center lg:text-left text-black dark:text-gray-200">
                            <div className="max-w-xl mb-6">
                                <h2 data-aos="flip-right"
                                    className="max-w-lg mb-6 sm:text-2xl font-bold lg:text-xl text-cyan-500 sm:leading-none">
                                    Personal Cloud Storage
                                </h2>
                                <p data-aos="fade-down-left"
                                   className="text-base md:text-lg text-gray-800 dark:text-gray-300">
                                    Our Cloud Storage service provides a secure and user-friendly platform for storing
                                    your important data, whether it is for backups or file uploads. With 5GB of storage
                                    space, your documents, photos, and files .
                                </p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3">
                                <Button
                                    outline
                                    className={"bg-cyan-300 "}
                                >
                                    See More
                                    <FaArrowRight className="w-3.5 h-3.5 ml-2"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Third Card */}
                <div
                    className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full mt-5 lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded-r-full mb-8 lg:mb-0 bg-white  dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div
                            className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 text-center lg:text-left text-black dark:text-gray-200">
                            <div className="max-w-xl mb-6">
                                <h2 data-aos="flip-right" className="max-w-lg mb-6 sm:text-2xl font-bold lg:text-xl text-cyan-500 sm:leading-none">
                                    Private Git Server
                                </h2>
                                <p data-aos="fade-down-left" className="text-base md:text-lg text-gray-800 dark:text-gray-300">
                                    Take full control of your Git repositories. Our Private Git Server empowers you to
                                    securely manage and version control your source code and projects within your own
                                    environment.
                                </p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3">
                                <Button
                                    outline
                                    className={"bg-cyan-300 "}
                                >
                                    See More
                                    <FaArrowRight className="w-3.5 h-3.5 ml-2"/>
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:w-1/2">
                            <svg viewBox="0 0 36 36" id="tanuki-logo" className="is-active">
                                <path id="tanuki-right-ear" className="tanuki-shape" fill="#e24329" d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"></path>
                                <path id="tanuki-left-ear" className="tanuki-shape" fill="#e24329" d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"></path>
                                <path id="tanuki-nose" className="tanuki-shape" fill="#e24329" d="M18,34.38 3,14 33,14 Z"></path>
                                <path id="tanuki-right-eye" className="tanuki-shape" fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z"></path>
                                <path id="tanuki-left-eye" className="tanuki-shape" fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z"></path>
                                <path id="tanuki-right-cheek" className="tanuki-shape" fill="#fca326" d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"></path>
                                <path id="tanuki-left-cheek" class="tanuki-shape" fill="#fca326" d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Feature Section   */}
                <FeatureCardList/>

                <section className="bg-white dark:bg-gray-100">
                    {/*Support languages section */}
                    <main className=" dark:bg-gray-500">
                        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">

                            <h2 className="mb-8 text-center text-3xl font-extrabold text-cool-blue-100 leading-tight tracking-tight dark:text-white md:text-4xl lg:mb-16">
                                Support Languages
                            </h2>
                            <Slider {...settings} >
                                <Link href="#" className="flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="w-48 h-16 hover:text-gray-900 dark:hover:text-white mx-auto"
                                         viewBox="0 0 48 48" width="48px" height="48px">
                                        <path fill="#212121"
                                              d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"/>
                                    </svg>
                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16 hover:text-gray-900 dark:hover:text-white mx-auto"
                                        xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                        preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 230" id="react">
                                        <path fill="#FFF"
                                              d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z"></path>
                                        <path fill="#53C1DE"
                                              d="M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z"></path>
                                        <path fill="#FFF"
                                              d="M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z"></path>
                                        <path fill="#53C1DE"
                                              d="M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16  hover:text-gray-900 dark:hover:text-white mx-auto"
                                        xmlns="http://www.w3.org/2000/svg" width="107.828" height="56.13" id="php">
                                        <ellipse cx="53.914" cy="28.065" fill="#8993be" data-name="Ellipse 31"
                                                 rx="53.914" ry="28.065"></ellipse>
                                        <path fill="#232531" fill-rule="evenodd"
                                              d="m15.14 44.682 5.909-29.911h13.662c5.908.369 8.863 3.323 8.863 8.494 0 8.863-7.016 14.032-13.294 13.663h-6.646l-1.477 7.755Zm9.97-13.294 1.847-11.078h4.8c2.585 0 4.431 1.108 4.431 3.323-.369 6.278-3.323 7.386-6.647 7.755h-4.43Zm17.091 5.539 5.908-29.911h7.016l-1.477 7.754h6.647c5.909.369 8.124 3.323 7.386 7.016l-2.586 15.141h-7.384l2.584-13.663c.369-1.847.369-2.954-2.216-2.954h-5.538l-3.324 16.617Zm22.422 7.755 5.908-29.911h13.664c5.909.369 8.863 3.323 8.863 8.494 0 8.863-7.016 14.032-13.294 13.663h-6.648l-1.477 7.755Zm9.972-13.294 1.847-11.078h4.8c2.585 0 4.431 1.108 4.431 3.323-.369 6.278-3.323 7.386-6.647 7.755h-4.431Z"
                                              data-name="Path 289"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16  hover:text-gray-900 dark:hover:text-white mx-auto"
                                        xmlns="http://www.w3.org/2000/svg" width="2424" height="2500"
                                        preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 264" id="postgresql">
                                        <path
                                            d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351"></path>
                                        <path fill="#336791"
                                              d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002"></path>
                                        <path fill="#FFF"
                                              d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225"></path>
                                        <path fill="#FFF"
                                              d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16  hover:text-gray-900 dark:hover:text-white mx-auto"
                                        xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"
                                        viewBox="0 0 25 24" id="laravel">
                                        <rect width="24" height="24" x=".463" fill="url(#paint0_linear_302_4984)"
                                              rx="8"></rect>
                                        <path fill="#fff" fill-rule="evenodd"
                                              d="M8.61628 4.05631C8.46613 3.98123 8.2894 3.98123 8.13925 4.05631L5.29683 5.47751C5.29006 5.48087 5.28334 5.48437 5.27669 5.48802C5.2228 5.51759 5.1753 5.55575 5.13553 5.60028C5.11472 5.6236 5.09603 5.64866 5.07965 5.67516C5.02854 5.75787 5 5.85454 5 5.95555V16.2666C5 16.4593 5.10393 16.637 5.27186 16.7315L10.9525 19.9268C10.9787 19.9421 11.0061 19.9551 11.0343 19.9657C11.0623 19.9763 11.091 19.9844 11.1201 19.99C11.2401 20.0135 11.3688 19.9961 11.4837 19.9314L17.1725 16.7315C17.3405 16.637 17.4444 16.4593 17.4444 16.2666V13.0407L19.994 11.7659C20.1747 11.6756 20.2888 11.4909 20.2888 11.2889V7.73332C20.2888 7.57189 20.2159 7.42155 20.0945 7.32155C20.0691 7.30064 20.0416 7.28194 20.0121 7.26579C20.0055 7.26214 19.9988 7.25864 19.992 7.25529L17.1496 5.83408C16.9994 5.759 16.8227 5.759 16.6726 5.83408L13.8302 7.25527C13.8234 7.25862 13.8167 7.26213 13.81 7.26579C13.7499 7.29876 13.6978 7.3424 13.6555 7.39366C13.6225 7.43358 13.5954 7.47811 13.5753 7.52583C13.5575 7.56792 13.5451 7.61249 13.5386 7.65852C13.5351 7.68308 13.5333 7.70807 13.5333 7.73332V10.977L11.7555 11.9769V5.95555C11.7555 5.82264 11.7069 5.70109 11.6265 5.60771C11.6057 5.5835 11.5827 5.5611 11.5576 5.54081C11.5248 5.5143 11.4889 5.4916 11.4504 5.47336L8.61628 4.05631ZM14.0813 11.8925L15.7739 12.7388L11.2075 15.3074L9.51489 14.4611L14.0813 11.8925ZM16.3777 11.8481L14.6 10.9593V8.59627L16.3777 9.48515V11.8481ZM17.4444 11.8481L19.2222 10.9593V8.59627L17.4444 9.48515V11.8481ZM10.6889 12.577V6.8185L8.91109 7.70738V13.5769L10.6889 12.577ZM9.97429 15.8834L10.5027 16.1476C10.6233 16.2129 10.6889 16.2569 10.6889 16.2777V18.5547L6.06666 15.9547V6.8185L7.84443 7.70738V14.4886V14.4888C7.84443 14.5015 7.84488 14.514 7.84575 14.5265C7.85896 14.7136 7.96986 14.8812 8.13925 14.9659C8.13925 14.9659 8.93742 15.3858 9.63887 15.7222C9.75945 15.78 9.8716 15.8338 9.97429 15.8834ZM11.7555 16.223L16.3777 13.623V15.9547L11.7555 18.5547V16.223ZM8.37776 6.78148L6.72589 5.95555L8.37776 5.12962L10.0296 5.95555L8.37776 6.78148ZM18.5629 7.73332L16.9111 6.90739L15.2592 7.73332L16.9111 8.55925L18.5629 7.73332Z"
                                              clip-rule="evenodd"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_302_4984" x1=".463" x2="24.463" y1="12"
                                                            y2="12" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#ED6D6B"></stop>
                                                <stop offset="1" stop-color="#F0B076"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16  hover:text-gray-900 dark:hover:text-white mx-auto"
                                        xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                        preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 221" id="vue">
                                        <path fill="#41B883"
                                              d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"></path>
                                        <path fill="#41B883"
                                              d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"></path>
                                        <path fill="#35495E"
                                              d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16  hover:text-gray-900 dark:hover:text-white mx-auto"
                                        xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                        preserveAspectRatio="xMidYMid" viewBox="0 0 256 272" id="angular">
                                        <path fill="#E23237"
                                              d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z"></path>
                                        <path fill="#B52E31"
                                              d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z"></path>
                                        <path fill="#FFF"
                                              d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16  hover:text-gray-900 dark:hover:text-white mx-auto"
                                        xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                        enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="html">
                                        <polygon fill="#E44D26"
                                                 points="3.345 21.601 1.419 0 22.581 0 20.653 21.598 11.987 24 3.345 21.601"></polygon>
                                        <polygon fill="#F16529"
                                                 points="12 22.164 19.002 20.222 20.65 1.766 12 1.766"></polygon>
                                        <path fill="#EBEBEB"
                                              d="M12,9.778H8.495L8.252,7.065H12v-2.65H5.357l0.063,0.711l0.651,7.3H12V9.778L12,9.778z M12,16.658l-0.012,0.003l-2.95-0.797l-0.189-2.113H6.19l0.371,4.16l5.427,1.507L12,19.414V16.658L12,16.658z"></path>
                                        <path fill="#FFF"
                                              d="M11.991,9.778v2.649h3.263l-0.308,3.436l-2.955,0.797v2.756l5.431-1.505l0.04-0.448l0.623-6.974l0.064-0.712h-0.714H11.991L11.991,9.778z M11.991,4.415v2.65h6.399l0.053-0.596l0.121-1.343l0.063-0.711H11.991L11.991,4.415z"></path>
                                        <polygon fill="#DEDEDE" points="12 23.996 11.987 24 12 24 12 23.996"></polygon>
                                        <path fill="#C64321"
                                              d="M12,7.065L12,7.065H8.252l0.242,2.713h3.496H12V7.065L12,7.065z M12,0H1.419l1.926,21.601L11.987,24L12,23.996v-4.582v0l-0.012,0.004l-5.427-1.507l-0.371-4.16h2.659l0.189,2.113l2.95,0.797l0.003-0.001v0L12,16.658v-4.231H6.071l-0.651-7.3L5.357,4.415h6.634H12V0L12,0z"></path>
                                        <path fill="#CDCDCD"
                                              d="M8.849,13.751H6.19l0.371,4.16l5.427,1.507L12,19.414v0l-0.009,0.002v-2.756l-0.003,0.001l-2.95-0.797L8.849,13.751L8.849,13.751z M11.991,4.415H5.357l0.063,0.711l0.651,7.3H12h-0.009V9.778H8.495L8.252,7.065H12h-0.009V4.415L11.991,4.415z"></path>
                                        <path fill="#DEDEDE"
                                              d="M12,16.658l-0.009,0.002v0v2.756L12,19.414V16.658L12,16.658z M12,9.778h-0.009v2.649H12V9.778L12,9.778z M12,4.415h-0.009v2.65H12V4.415L12,4.415z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16  hover:text-gray-900 dark:hover:text-white mx-auto"
                                        xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                        viewBox="0 0 16 16"
                                        id="css">
                                        <path fill="#2196F3" d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0z"></path>
                                        <path fill="#FAFAFA"
                                              d="m12.274 4.709-.161 1.809-.486 5.423L8 12.944l-.003.001-3.625-1.004-.253-2.836h1.776l.132 1.471 1.971.532.001-.001 1.974-.532.269-2.451-6.208.017-.176-1.676 6.533-.077.132-1.794-6.84.019-.115-1.669h8.864z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16  hover:text-gray-900 dark:hover:text-white mx-auto"
                                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                                        viewBox="0 0 48 48">
                                        <path fill="#8bc34a"
                                              d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"></path>
                                        <path fill="#fff"
                                              d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16  hover:text-gray-900 dark:hover:text-white mx-auto"
                                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                                        viewBox="0 0 48 48">
                                        <polygon fill="none" points="26.055,24.519 18.71,37 33.401,37"></polygon>
                                        <path fill="none"
                                              d="M14.279,36.641l9.455-16.065l-4.653-7.907L4.762,37h9.366C14.178,36.88,14.212,36.756,14.279,36.641	C14.279,36.642,14.279,36.642,14.279,36.641z"></path>
                                        <path fill="#1de9b6"
                                              d="M14.262,39.569c-0.453-0.792-0.481-1.74-0.134-2.569H4.762l14.319-24.331l4.653,7.907l2.321-3.943	l-4.358-7.404c-0.551-0.937-1.528-1.496-2.615-1.497c0,0,0,0-0.001,0c-1.086,0-2.064,0.559-2.616,1.496L0.458,36.425	c-0.551,0.936-0.559,2.103-0.02,3.046S1.988,41,3.074,41h13.438C15.58,40.908,14.732,40.392,14.262,39.569z M2.182,37.44h0.01H2.182	z"></path>
                                        <path fill="#00bfa5"
                                              d="M47.65,36.641L33.478,12.562c-0.53-0.9-1.469-1.437-2.513-1.437c-1.044,0-1.984,0.537-2.514,1.437	l-2.396,4.071l2.321,3.943l2.589-4.398L43,37h-5c0.258,0.802,0.151,1.724-0.276,2.471C37.185,40.414,36.086,41,35,41l0,0	c0.001,0.013-0.001-0.013,0,0h10c1.043,0,2.149-0.525,2.667-1.431C48.186,38.664,48.179,37.542,47.65,36.641z"></path>
                                        <path fill="#00838f"
                                              d="M38,37c-0.068-0.21-0.182-0.381-0.296-0.575l-9.328-15.849l-2.321-3.943l-2.321,3.943l-9.455,16.065	c0,0,0,0.001,0,0.001c-0.067,0.113-0.101,0.238-0.151,0.358c-0.347,0.829-0.32,1.778,0.134,2.569c0.47,0.822,1.318,1.338,2.25,1.431	h18.576c1.086,0,2.096-0.586,2.635-1.529C38.151,38.724,38.258,37.802,38,37z M26.055,24.519L33.401,37H18.71L26.055,24.519z"></path>
                                    </svg>
                                </Link>
                            </Slider>
                        </div>
                    </main>
                </section>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container grid grid-cols-1 gap-10 px-6 py-12 mx-auto lg:grid-cols-3">
                        <div className="flex items-center lg:w-2/3">

                            <h1 data-aos="flip-up" className="mt-2 md:text-6xl font-bold text-orange-200 text-3xl dark:text-orange-100 !important">Why
                                Us ?</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-10 lg:col-span-2 sm:grid-cols-2">
                            <div>
                                <h2 data-aos="flip-right" className="font-bold text-3xl text-black dark:text-white mb-10">Expertise</h2>
                                <p data-aos="flip-right" className="mt-2 text-gray-500 text-lg dark:text-gray-400">Our team of experienced experts have the<br/> knowledge and expertise
                                    to deliver innovative IT <br/> solutions
                                    that meet your unique needs.</p>
                            </div>

                            <div>
                                <h2 data-aos="flip-right" className="font-bold text-3xl text-black dark:text-white mb-10">Tech</h2>
                                <p data-aos="flip-right" className="mt-2 text-gray-500 text-lg dark:text-gray-400">We stay up to date with the latest trends <br/> and technologies in the IT industry, so you can get the <br/> most advanced solutions available.</p>
                            </div>

                            <div>
                                <h2 data-aos="flip-right" className="font-bold text-3xl text-black dark:text-white mb-10">Solutions</h2>
                                <p data-aos="flip-right" className="mt-2 text-gray-500 text-lg dark:text-gray-400">We take a personalized approach
                                    to every project,<br/> working closely with you to understand your <br/> business and create specific solutions.</p>
                            </div>

                            <div>
                                <h2 data-aos="flip-right" className="font-bold text-3xl text-black dark:text-white mb-10">Results</h2>
                                <p data-aos="flip-right" className="mt-2 text-gray-500 text-lg dark:text-gray-400">Our track record speaks for itself – we helped <br/> businesses of all sizes and industries achieve <br/> their goals with our IT solutions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Achievement    */}
                <main className="bg-gray-50 dark:bg-gray-800  w-full mt-8">
                    <div
                        className="items-center max-w-screen-xl px-4 py-8 mx-auto grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                        <div className="col-span-2 mb-8">
                            <h1 data-aos="zoom-in" className="mt-2 md:text-5xl font-bold text-black text-3xl dark:text-white !important mb-4">Helping
                                a local Business</h1>
                            <h1 data-aos="zoom-in" className="mt-2 md:text-5xl font-bold text-black text-3xl dark:text-white !important mb-10">reinvent
                                itself</h1>
                            <p data-aos="zoom-in" className="font-medium text-lg text-gray-500 sm:text-lg dark:text-gray-400">We reached here with our
                                hard work hand and dedication</p>

                        </div>
                        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                            <div data-aos="flip-left">
                                <svg className="w-8 h-8 mb-2 text-orange-200 md:w-12 md:h-12 dark:text-text-orange-100"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="user">
                                    <path
                                        d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"
                                        fill="#1d8dd7" className="color000000 svgShape"></path>
                                </svg>
                                <h3 data-aos="flip-left" className="mb-2 text-2xl font-bold dark:text-white">2212</h3>
                                <p data-aos="flip-left"
                                   className="font-light text-lg text-gray-500 dark:text-gray-400">Clients</p>
                            </div>
                            <div data-aos="flip-left">
                                <svg className="w-8 h-8 mb-2 text-orange-200 md:w-12 md:h-12 dark:text-text-orange-100"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="Hand">
                                    <path
                                        d="M17.924 17.315c-.057.174-.193.367-.416.432-.161.047-5.488 1.59-5.652 1.633-.469.125-.795.033-1.009-.156-.326-.287-4.093-2.85-8.845-3.092-.508-.025-.259-1.951 1.193-1.951.995 0 3.904.723 4.255.371.271-.272.394-1.879-.737-4.683L4.438 4.232a1.045 1.045 0 0 1 1.937-.781L8.361 8.37c.193.48.431.662.69.562.231-.088.279-.242.139-.709L7.144 2.195A1.043 1.043 0 0 1 7.796.871a1.042 1.042 0 0 1 1.325.652l1.946 5.732c.172.504.354.768.642.646.173-.073.161-.338.115-.569l-1.366-5.471a1.045 1.045 0 1 1 2.027-.506l1.26 5.042c.184.741.353 1.008.646.935.299-.073.285-.319.244-.522l-.872-4.328a.95.95 0 0 1 1.86-.375l.948 4.711.001.001v.001l.568 2.825c.124.533.266 1.035.45 1.527 1.085 2.889.519 5.564.334 6.143z"
                                        fill="#1d8dd7" className="color000000 svgShape"></path>
                                </svg>

                                <h3 data-aos="flip-left" className="mb-2 text-2xl font-bold dark:text-white">229</h3>
                                <p data-aos="flip-left"
                                   className="font-light text-lg text-gray-500 dark:text-gray-400">Collaboration</p>
                            </div>
                            <div data-aos="flip-left">
                                <svg className="w-8 h-8 mb-2 text-orange-200 md:w-12 md:h-12 dark:text-text-orange-100"
                                     xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512"
                                     viewBox="0 0 512 512" id="service">
                                    <path
                                        d="M505.329 324.301c-12.496-7.39-28.143-8.585-42.107-2.392 0 0-.054.056-.272.109-.054.054-.163.054-.218.109.054 0 0 0-.163.054l-.109.054-.054.054c-.217.054-.435.163-.706.272-5.107 2.281-25.047 11.138-92.852 41.129v-.109c-15.213-21.569-41.998-5.651-78.291-2.5-56.287-28.849-109.423-57.101-167.72-55.309v115.454h9.671l121.05 47.812c19.777 7.823 42.215 5.814 60.362-5.324l191.517-118.17C513.315 340.654 513.37 329.027 505.329 324.301zM100.649 291.555h-9.716v-7.268c0-5.681-4.604-10.285-10.285-10.285H10.932c-5.681 0-10.285 4.604-10.285 10.285v164.742c0 5.681 4.604 10.285 10.285 10.285h69.716c5.681 0 10.285-4.604 10.285-10.285v-7.268h9.716c6.263 0 11.34-5.078 11.34-11.341V302.896C111.99 296.633 106.912 291.555 100.649 291.555zM59.471 443.539c-6.99 0-12.716-5.725-12.716-12.715 0-6.989 5.726-12.715 12.716-12.715 6.989 0 12.715 5.726 12.715 12.715C72.186 437.814 66.46 443.539 59.471 443.539z"
                                        fill="#1d8dd7" className="color000000 svgShape"></path>
                                    <path
                                        d="M193.495,195.43l21.725,2.498c2.607,11.297,7.06,22.16,13.252,31.937l-13.687,17.163c-3.584,4.562-3.15,10.971,0.869,14.99l14.99,14.99c4.019,4.019,10.428,4.454,14.99,0.869l17.163-13.686c9.776,6.192,20.638,10.645,31.936,13.251l2.498,21.726c1.702,15.038,21.441,8.544,32.262,9.993c5.757,0,10.537-4.237,11.189-9.993l2.498-21.726c11.298-2.606,22.16-7.061,31.936-13.253l17.163,13.688c4.562,3.584,10.971,3.15,14.99-0.869l14.99-14.99c4.019-4.019,4.454-10.428,0.87-14.991l-13.687-17.163c6.192-9.776,10.645-20.638,13.252-31.935l21.725-2.499c5.757-0.651,9.993-5.43,9.993-11.189v-21.073c0-5.757-4.236-10.536-9.993-11.189l-21.725-2.499c-2.607-11.296-7.06-22.16-13.252-31.935l13.687-17.163c3.584-4.562,3.15-10.971-0.87-14.99l-14.99-14.99c-4.019-4.019-10.428-4.454-14.99-0.869l-17.163,13.686c-9.776-6.192-20.638-10.645-31.936-13.251l-2.498-21.726c-0.652-5.758-5.431-9.993-11.189-9.993h-21.073c-5.757,0-10.537,4.237-11.189,9.993l-2.498,21.726c-11.298,2.606-22.16,7.059-31.936,13.251l-17.163-13.686c-4.562-3.584-10.971-3.149-14.99,0.87l-14.99,14.99c-4.019,4.019-4.453,10.427-0.869,14.99l13.687,17.162c-6.192,9.777-10.645,20.639-13.252,31.937l-21.725,2.499c-5.757,0.651-9.993,5.432-9.993,11.189v21.073C183.502,190,187.738,194.779,193.495,195.43z M284.001,138.859c19.301-19.301,50.52-19.301,69.821,0c19.171,19.171,19.171,50.519,0,69.691c-19.301,19.301-50.52,19.301-69.821,0C264.7,189.379,264.7,158.03,284.001,138.859z"
                                        fill="#1d8dd7" className="color000000 svgShape"></path>
                                </svg>

                                <h3 data-aos="flip-left" className="mb-2 text-2xl font-bold dark:text-white">828</h3>
                                <p data-aos="flip-left"
                                   className="font-light text-lg text-gray-500 dark:text-gray-400">Deploy Service</p>
                            </div>
                            <div data-aos="flip-left">
                                <svg className="w-8 h-8 mb-2 text-orange-200 md:w-12 md:h-12 dark:text-text-orange-100"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="Feedback">
                                    <path fill-rule="evenodd"
                                          d="M24 0A24 24 0 0 0 0 24a24 24 0 0 0 24 24 24 24 0 0 0 24-24A24 24 0 0 0 24 0zm4.488 11.004a9.764 9.764 0 0 1 5.717 1.629 9.788 9.788 0 0 1 3.576 12.004l1.211 5.76a.5.5 0 0 1-.629.582l-5.134-1.481a9.763 9.763 0 0 1-7.678.508 8.281 8.281 0 0 1-1.276 2.392 8.328 8.328 0 0 1-10.343 2.344L9.64 35.98a.5.5 0 0 1-.63-.584l1.012-4.83a8.323 8.323 0 0 1 3.053-10.18 8.306 8.306 0 0 1 5.576-1.331c.166.019.33.05.494.08a9.771 9.771 0 0 1 9.342-8.13zm.032.992a8.778 8.778 0 0 0-8.399 7.37 8.298 8.298 0 0 1 3.649 2.277c.106.114.201.234.3.353h10.424a.5.5 0 1 1 0 1h-9.707a8.334 8.334 0 0 1 1.035 6.045c2.277.816 4.858.7 7.121-.514a.5.5 0 0 1 .225-.06.5.5 0 0 1 .166.023.5.5 0 0 1 .059.014l4.449 1.285-1.06-5.053a.5.5 0 0 1-.005-.023.5.5 0 0 1 .03-.326 8.782 8.782 0 0 0-3.155-10.922 8.767 8.767 0 0 0-5.132-1.467v-.002zm-5.061 4.002a.5.5 0 0 1 .05 0H34.49a.5.5 0 1 1 0 1H23.51a.5.5 0 0 1-.051-1zm0 3a.5.5 0 0 1 .05 0H34.49a.5.5 0 1 1 0 1H23.51a.5.5 0 0 1-.051-1zm-5.553 1a7.306 7.306 0 0 0-4.277 1.22 7.315 7.315 0 0 0-2.627 9.1.5.5 60.003 0 1 .023.334.5.5 0 0 1 0 .01l-.863 4.127 3.62-1.045a.5.5 0 0 1 .04-.01.5.5 60.003 0 1 .397.036 7.32 7.32 0 0 0 9.263-1.983 7.316 7.316 0 0 0-.445-9.46 7.314 7.314 0 0 0-5.13-2.329zm-4.447 4a.5.5 0 0 1 .05 0h8.985a.5.5 0 1 1 0 1H13.51a.5.5 0 0 1-.051-1zm13.783 1a.5.5 0 0 1 .051 0h2.404a.5.5 0 1 1 0 1h-2.404a.5.5 0 0 1-.05-1zm-13.783 2a.5.5 0 0 1 .05 0h8.985a.5.5 0 1 1 0 1H13.51a.5.5 0 0 1-.051-1zm-.008 3a.5.5 0 0 1 .051 0h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.05-1z"
                                          fill="#1d8dd7" className="color000000 svgShape"></path>
                                </svg>
                                <h3 className="mb-2 text-2xl font-bold dark:text-white">1924</h3>
                                <p className="font-light text-lg text-gray-500 dark:text-gray-400">Feedback</p>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Our Client Sections   */}
                <OurPartner/>
            </section>
            </>
        )

}

export default HeroSection
