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

function HeroSection() {
    // git animation
    const router = useRouter()
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    const grid = {
        responsive: [
            {
                breakpoint: 480,
                
            },
        ] 
    }
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };



        return (<>
                <main className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between lg:flex-row">
                        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                            <div className="max-w-xl mb-6">
                                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl dark:text-white">
                                    <span className="text-orange-50 block mb-8" data-aos="fade-up-right">Say Goodbye </span>
                                    <span className="text-orange-50" data-aos="zoom-in-left">To <span data-aos="fade-down-right" className="text-cool-blue-300">Manual.</span></span>
                                </h1>
                                <p data-aos="zoom-in-left" className=" mb-5 mt-5 text-lg text-gray-600 dark:text-gray-300">We are on a
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
                    <h2 data-aos="zoom-in-up" className="max-w-lg mb-6 text-lg xl:text-3xl font-extrabold text-cool-blue-100 dark:text-orange-100 sm:text-4xl md:mx-auto block whitespace-nowrap relative">
                        Explore The Benefit of The Features
                        <span
                            className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 bg-cyan-300 h-1 w-40 mx-3 rounded"></span>
                    </h2>
                    <p data-aos="zoom-in-left" className=" text-base text-gray-800 dark:text-gray-300 md:text-lg mb-14 mt-14f">
                    Introducing a unique and powerful suite of software designed to efficiently run your entire operations,<br/> brought to you by a company with a long-term vision to revolutionize the way you work
                    </p>
                </span>
                    <div className=" grid gap-4 row-gap-5 sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 " data-aos="zoom-in-up">
                        <article data-aos="fade-up-left" className="rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="relative">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl" >
                                    <svg className="w-6 h-6 absolute top-3 left-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Setting"><path fill="#1d8dd7" d="M6.98 1a.978.978 0 0 0-.98.98v1.231a5.5 5.5 0 0 0-1.176.492l-.873-.873a.978.978 0 0 0-1.387 0l-.734.735a.978.978 0 0 0 0 1.386l.87.87A5.5 5.5 0 0 0 2.214 7H.98A.978.978 0 0 0 0 7.98V9.02c0 .543.437.98.98.98h1.231a5.5 5.5 0 0 0 .49 1.178l-.87.871a.978.978 0 0 0 0 1.387l.733.734a.978.978 0 0 0 1.387 0l.87-.869A5.5 5.5 0 0 0 6 13.785v1.235c0 .543.437.98.98.98h1.04c.543 0 .98-.437.98-.98v-1.23a5.5 5.5 0 0 0 1.176-.493l.873.873a.978.978 0 0 0 1.387 0l.734-.734a.978.978 0 0 0 0-1.387l-.87-.87A5.5 5.5 0 0 0 12.786 10h1.235c.543 0 .98-.437.98-.98V7.98a.978.978 0 0 0-.98-.98h-1.23a5.5 5.5 0 0 0-.493-1.176l.873-.873a.978.978 0 0 0 0-1.386l-.734-.735a.978.978 0 0 0-1.387 0l-.87.87A5.5 5.5 0 0 0 9 3.214V1.981A.978.978 0 0 0 8.02 1H6.98zm.52 5A2.5 2.5 0 0 1 10 8.5 2.5 2.5 0 0 1 7.5 11 2.5 2.5 0 0 1 5 8.5 2.5 2.5 0 0 1 7.5 6z" className="colorf05542 svgShape"></path></svg>
                                </div>
                            </div>
                            <h2 className="mt-5 mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white  ">
                                <a href="#">
                                    Integrated platform
                                </a>
                            </h2>
                            <p className="mb-4 text-lg text-gray-500 font-normal dark:text-gray-300 ">
                                This integration enables seamless communication and interaction between different components have access to the most up-to-date information, promoting
                            </p>

                        </article>
                        <article data-aos="fade-up-left" className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="relative">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl" >
                                    <svg className="w-6 h-6 absolute top-3 left-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="profile"><g data-name="Layer 2" fill="#1d8dd7" className="color000000 svgShape"><circle cx="16" cy="6.96" r="6" fill="#1d8dd7" className="color000000 svgShape"></circle><path d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z" fill="#1d8dd7" className="color000000 svgShape"></path></g></svg>
                                </div>
                            </div>
                            <h2 className="mt-5 mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                <a href="#">
                                    Personal Dashboard
                                </a>
                            </h2>
                            <p className="mb-4 text-lg text-gray-500 font-normal dark:text-gray-300">
                                User dashboards  ensuring that individuals only see information and features relevant to their roles within an organization.
                            </p>

                        </article>
                        <article data-aos="fade-up-left" className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="relative">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl" >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="scan" className="w-6 h-6 absolute top-3 left-3 text-white"><path fill="#1d8dd7" d="M21.1972192,9.23684211 C21.4724456,9.20531344 21.7415728,9.33252106 21.8892455,9.56394031 C22.0369182,9.79535956 22.0369182,10.0899036 21.8892455,10.3213228 C21.7415728,10.5527421 21.4724456,10.6799497 21.1972192,10.6484211 L21.1972192,10.6484211 L20.1798966,10.6484211 L20.1798966,13.3105263 C20.1824453,14.5533801 19.6840627,15.7461917 18.7946562,16.625912 C17.9052498,17.5056323 16.6978739,18 15.4387895,18 L15.4387895,18 L14.6614015,18 C14.2638649,18 13.9415978,17.6818865 13.9415978,17.2894737 C13.9415978,16.8970608 14.2638649,16.5789474 14.6614015,16.5789474 L14.6614015,16.5789474 L15.4387895,16.5789474 C17.2524483,16.5581891 18.7116189,15.1009296 18.711497,13.3105263 L18.711497,13.3105263 L18.711497,10.6484211 L16.0146325,10.6484211 L16.0146325,11.7094737 C16.0146325,12.2999293 15.7770123,12.8662015 15.3540455,13.2837167 C14.9310788,13.7012319 14.3574128,13.9357895 13.7592475,13.9357895 L13.7592475,13.9357895 L8.26954461,13.9357895 C7.0239299,13.9357895 6.01415967,12.9390339 6.01415967,11.7094737 L6.01415967,11.7094737 L6.01415967,10.6484211 L3.35568465,10.6484211 L3.35568465,13.3105263 C3.35568465,15.1156254 4.83811329,16.5789474 6.66678169,16.5789474 L6.66678169,16.5789474 L7.49215661,16.5789474 C7.88969322,16.5789474 8.21196031,16.8970608 8.21196031,17.2894737 C8.21196031,17.6818865 7.88969322,18 7.49215661,18 L7.49215661,18 L6.71476861,18 C4.08315205,18.0001299 1.9423934,15.9080947 1.91607723,13.3105263 L1.91607723,13.3105263 L1.91607723,10.6484211 L0.802780836,10.6484211 C0.527554413,10.6799497 0.258427242,10.5527421 0.110754532,10.3213228 C-0.0369181774,10.0899036 -0.0369181774,9.79535956 0.110754532,9.56394031 C0.258427242,9.33252106 0.527554413,9.20531344 0.802780836,9.23684211 L0.802780836,9.23684211 Z M13.7496502,4.06421053 C14.3478154,4.06421053 14.9214814,4.29876812 15.3444481,4.71628332 C15.7674149,5.13379852 16.0050351,5.70007066 16.0050351,6.29052632 L16.0050351,6.29052632 L16.0050351,7.51263158 C16.0077577,7.58377363 15.9803208,7.65281715 15.9293226,7.70315806 C15.8783244,7.75349896 15.8083793,7.78058225 15.7363084,7.77789474 L15.7363084,7.77789474 L6.28288638,7.77789474 C6.21081542,7.78058225 6.1408704,7.75349896 6.08987219,7.70315806 C6.03887397,7.65281715 6.01143706,7.58377363 6.01415967,7.51263158 L6.01415967,7.51263158 L6.01415967,6.29052632 C6.01415967,5.06096606 7.0239299,4.06421053 8.26954461,4.06421053 L8.26954461,4.06421053 Z M15.4387895,5.68434189e-14 C18.0552408,0.0464966099 20.1515284,2.15369526 20.1511045,4.73684211 L20.1511045,4.73684211 L20.1511045,5.75052632 C20.1511045,6.14293916 19.8288373,6.46105263 19.4313007,6.46105263 C19.0337641,6.46105263 18.711497,6.14293916 18.711497,5.75052632 L18.711497,5.75052632 L18.711497,4.73684211 C18.7243076,3.86835591 18.3863844,3.03055443 17.7723434,2.40843021 C17.1583024,1.78630599 16.3186508,1.43103105 15.4387895,1.42105263 L15.4387895,1.42105263 L14.6614015,1.42105263 C14.2638649,1.42105263 13.9415978,1.10293916 13.9415978,0.710526316 C13.9415978,0.318113467 14.2638649,5.68434189e-14 14.6614015,5.68434189e-14 L14.6614015,5.68434189e-14 Z M7.44416969,5.68434189e-14 C7.83954545,0.0051023485 8.15880443,0.320246466 8.1639734,0.710526316 C8.15880443,1.10080617 7.83954545,1.41595028 7.44416969,1.42105263 L7.44416969,1.42105263 L6.66678169,1.42105263 C5.7802463,1.42096072 4.9307011,1.77180596 4.30835191,2.39503713 C3.68600272,3.01826831 3.3428363,3.86182498 3.35568465,4.73684211 L3.35568465,4.73684211 L3.35568465,5.75052632 C3.35051568,6.14080617 3.0312567,6.45595028 2.63588094,6.46105263 L2.63588094,6.46105263 L2.62628356,6.46105263 L2.5295877,6.45340744 C2.18196026,6.40260168 1.91607723,6.10687381 1.91607723,5.75052632 L1.91607723,5.75052632 L1.91607723,4.73684211 C1.91594565,2.13914387 4.03529672,0.0259769791 6.66678169,5.68434189e-14 L6.66678169,5.68434189e-14 Z" transform="translate(1 3)" class="color200e32 svgShape"></path></svg>
                                </div>
                            </div>
                            <h2 className="mt-5 mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                <a href="#">
                                    Scanning Technology
                                </a>
                            </h2>
                            <p className="mb-4 text-lg text-gray-500 font-normal dark:text-gray-300">
                            Double scanning protocol to entails subjecting your application scanning processes to minimizing the chances of any potential vulnerabilities going undetected. 
                            </p>

                        </article>
                    </div>
                </div>

                {/*Service Section */}
                <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
                    <h2 data-aos="fade-up-right" className="max-w-lg mb-6 text-3xl font-extrabold text-cool-blue-100 dark:text-orange-100 sm:text-4xl md:mx-auto block whitespace-nowrap relative">
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
                                <h2 data-aos="flip-right" className="max-w-lg mb-6 sm:text-2xl font-bold lg:text-xl text-cyan-500 sm:leading-none ">
                                    Full Service Deployment
                                </h2>
                                <p data-aos="fade-down-left" className="text-base md:text-lg text-gray-800 dark:text-gray-300">
                                    Say goodbye to manual and error-prone deployment processes. Our Service automates
                                    the deployment of frontend service, backend service, database, and all other components
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
                                className="w-52 md:w-60 lg:w-60 xl:w-full"
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
                                className="w-40 md:w-60 lg:w-60 xl:w-2/3 mb-6"
                                data-aos="fade-right"
                            />
                        </div>
                        <div
                            className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 text-center lg:text-left text-black dark:text-gray-200">
                            <div className="max-w-xl mb-6">
                                <h2 data-aos="flip-right"  className="max-w-lg mb-6 sm:text-2xl font-bold lg:text-xl text-cyan-500 sm:leading-none">
                                    Personal Cloud Storage
                                </h2>
                                <p data-aos="fade-down-left" className="text-base md:text-lg text-gray-800 dark:text-gray-300">
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
                    className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full mt-5 lg:max-w-screen-xl md:px-0 lg:px-8 lg:py-20 rounded-r-full mb-8 lg:mb-0 bg-white  dark:bg-gray-900">
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
                                <Link href="#" className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="w-48 h-16 hover:text-gray-900 dark:hover:text-white"
                                         viewBox="0 0 48 48" width="48px" height="48px">
                                        <path fill="#212121"
                                              d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"/>
                                    </svg>

                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16 hover:text-gray-900 dark:hover:text-white"
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
                                        className="w-48 h-16 hover:text-gray-900 dark:hover:text-white"
                                        xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                        preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 221" id="vue">
                                        <path fill="#41B883"
                                              d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"></path>
                                        <path fill="#41B883" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"></path>
                                        <path fill="#35495E"
                                              d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16 hover:text-gray-900 dark:hover:text-white"
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
                                        className="w-48 h-16 hover:text-gray-900 dark:hover:text-white"
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
                                        className="w-48 h-16 hover:text-gray-900 dark:hover:text-white"
                                        xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 16 16"
                                        id="css">
                                        <path fill="#2196F3" d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0z"></path>
                                        <path fill="#FAFAFA"
                                              d="m12.274 4.709-.161 1.809-.486 5.423L8 12.944l-.003.001-3.625-1.004-.253-2.836h1.776l.132 1.471 1.971.532.001-.001 1.974-.532.269-2.451-6.208.017-.176-1.676 6.533-.077.132-1.794-6.84.019-.115-1.669h8.864z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="flex items-center justify-center">
                                    <svg
                                        className="w-48 h-16 hover:text-gray-900 dark:hover:text-white"
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
                                        className="w-48 h-16 hover:text-gray-900 dark:hover:text-white"
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
                        className="items-center max-w-screen-xl px-4 py-8 mx-auto grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6 sm:grid sm:grid-cols-4 sm:gap-16">
                        <div className="col-span-2 mb-8">
                            <h1 data-aos="zoom-in" className="mt-2 md:text-5xl font-bold text-black text-3xl dark:text-white !important mb-4">Helping
                                a local Business</h1>
                            <h1 data-aos="zoom-in" className="mt-2 md:text-5xl font-bold text-black text-3xl dark:text-white !important mb-10">reinvent
                                itself</h1>
                            <p data-aos="zoom-in" className="font-medium text-lg text-gray-500 sm:text-lg dark:text-gray-400">We reached here with our
                                hard work hand and dedication</p>

                        </div>
                        <div className="col-span-2 space-y-8 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0  ">
                            <div data-aos="flip-left">
                                <svg className="w-8 h-8 mb-2 text-orange-200 md:w-12 md:h-12 dark:text-text-orange-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="user"><path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" fill="#1d8dd7" className="color000000 svgShape"></path></svg>
                                <h3  data-aos="flip-left" className="mb-2 text-2xl font-bold dark:text-white">2212</h3>
                                <p  data-aos="flip-left" className="font-light text-lg text-gray-500 dark:text-gray-400">Clients</p>
                            </div>
                            <div data-aos="flip-left">
                                <svg className="w-8 h-8 mb-2 text-orange-200 md:w-12 md:h-12 dark:text-text-orange-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="Hand"><path d="M17.924 17.315c-.057.174-.193.367-.416.432-.161.047-5.488 1.59-5.652 1.633-.469.125-.795.033-1.009-.156-.326-.287-4.093-2.85-8.845-3.092-.508-.025-.259-1.951 1.193-1.951.995 0 3.904.723 4.255.371.271-.272.394-1.879-.737-4.683L4.438 4.232a1.045 1.045 0 0 1 1.937-.781L8.361 8.37c.193.48.431.662.69.562.231-.088.279-.242.139-.709L7.144 2.195A1.043 1.043 0 0 1 7.796.871a1.042 1.042 0 0 1 1.325.652l1.946 5.732c.172.504.354.768.642.646.173-.073.161-.338.115-.569l-1.366-5.471a1.045 1.045 0 1 1 2.027-.506l1.26 5.042c.184.741.353 1.008.646.935.299-.073.285-.319.244-.522l-.872-4.328a.95.95 0 0 1 1.86-.375l.948 4.711.001.001v.001l.568 2.825c.124.533.266 1.035.45 1.527 1.085 2.889.519 5.564.334 6.143z" fill="#1d8dd7" className="color000000 svgShape"></path>
                                </svg>

                                <h3  data-aos="flip-left" className="mb-2 text-2xl font-bold dark:text-white">229</h3>
                                <p  data-aos="flip-left" className="font-light text-lg text-gray-500 dark:text-gray-400">Collaboration</p>
                            </div>
                            <div data-aos="flip-left">
                                <svg className="w-8 h-8 mb-2 text-orange-200 md:w-12 md:h-12 dark:text-text-orange-100" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="service"><path d="M505.329 324.301c-12.496-7.39-28.143-8.585-42.107-2.392 0 0-.054.056-.272.109-.054.054-.163.054-.218.109.054 0 0 0-.163.054l-.109.054-.054.054c-.217.054-.435.163-.706.272-5.107 2.281-25.047 11.138-92.852 41.129v-.109c-15.213-21.569-41.998-5.651-78.291-2.5-56.287-28.849-109.423-57.101-167.72-55.309v115.454h9.671l121.05 47.812c19.777 7.823 42.215 5.814 60.362-5.324l191.517-118.17C513.315 340.654 513.37 329.027 505.329 324.301zM100.649 291.555h-9.716v-7.268c0-5.681-4.604-10.285-10.285-10.285H10.932c-5.681 0-10.285 4.604-10.285 10.285v164.742c0 5.681 4.604 10.285 10.285 10.285h69.716c5.681 0 10.285-4.604 10.285-10.285v-7.268h9.716c6.263 0 11.34-5.078 11.34-11.341V302.896C111.99 296.633 106.912 291.555 100.649 291.555zM59.471 443.539c-6.99 0-12.716-5.725-12.716-12.715 0-6.989 5.726-12.715 12.716-12.715 6.989 0 12.715 5.726 12.715 12.715C72.186 437.814 66.46 443.539 59.471 443.539z" fill="#1d8dd7" className="color000000 svgShape"></path><path d="M193.495,195.43l21.725,2.498c2.607,11.297,7.06,22.16,13.252,31.937l-13.687,17.163c-3.584,4.562-3.15,10.971,0.869,14.99l14.99,14.99c4.019,4.019,10.428,4.454,14.99,0.869l17.163-13.686c9.776,6.192,20.638,10.645,31.936,13.251l2.498,21.726c1.702,15.038,21.441,8.544,32.262,9.993c5.757,0,10.537-4.237,11.189-9.993l2.498-21.726c11.298-2.606,22.16-7.061,31.936-13.253l17.163,13.688c4.562,3.584,10.971,3.15,14.99-0.869l14.99-14.99c4.019-4.019,4.454-10.428,0.87-14.991l-13.687-17.163c6.192-9.776,10.645-20.638,13.252-31.935l21.725-2.499c5.757-0.651,9.993-5.43,9.993-11.189v-21.073c0-5.757-4.236-10.536-9.993-11.189l-21.725-2.499c-2.607-11.296-7.06-22.16-13.252-31.935l13.687-17.163c3.584-4.562,3.15-10.971-0.87-14.99l-14.99-14.99c-4.019-4.019-10.428-4.454-14.99-0.869l-17.163,13.686c-9.776-6.192-20.638-10.645-31.936-13.251l-2.498-21.726c-0.652-5.758-5.431-9.993-11.189-9.993h-21.073c-5.757,0-10.537,4.237-11.189,9.993l-2.498,21.726c-11.298,2.606-22.16,7.059-31.936,13.251l-17.163-13.686c-4.562-3.584-10.971-3.149-14.99,0.87l-14.99,14.99c-4.019,4.019-4.453,10.427-0.869,14.99l13.687,17.162c-6.192,9.777-10.645,20.639-13.252,31.937l-21.725,2.499c-5.757,0.651-9.993,5.432-9.993,11.189v21.073C183.502,190,187.738,194.779,193.495,195.43z M284.001,138.859c19.301-19.301,50.52-19.301,69.821,0c19.171,19.171,19.171,50.519,0,69.691c-19.301,19.301-50.52,19.301-69.821,0C264.7,189.379,264.7,158.03,284.001,138.859z" fill="#1d8dd7" className="color000000 svgShape"></path></svg>

                                <h3 data-aos="flip-left" className="mb-2 text-2xl font-bold dark:text-white">828</h3>
                                <p data-aos="flip-left" className="font-light text-lg text-gray-500 dark:text-gray-400">Deploy Service</p>
                            </div>
                            <div data-aos="flip-left">
                                <svg className="w-8 h-8 mb-2 text-orange-200 md:w-12 md:h-12 dark:text-text-orange-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="Feedback">
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
