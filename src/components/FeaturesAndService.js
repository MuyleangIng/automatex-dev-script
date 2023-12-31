"use client"

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OurPartner from "@/components/OurPartner";
import Lottie from "lottie-react";
import Space from "@/app/utils/assets/space.json";
import Spaces from "@/app/utils/assets/planes.json";
import Spacees from "@/app/utils/assets/cloud.json";
import Link from "next/link";

function FeaturesAndServices() {
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
    return (
        // Hero section
        <section>
            <section className="bg-emerald dark:bg-gray-900 relative">
                <div className="  px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb- md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold md:text-xl xl:text-6xl dark:text-white" data-aos="fade-left">
                            <span className="text-orange-50  block mb-8">Learn How <span className="text-cool-blue-300">AutomateX</span></span>
                            <span className="text-orange-50 text-xl xl:text-5xl whitespace-nowrap" >Can Build Your Product <span className="text-cool-blue-300">Fast</span></span>
                        </h1>
                        <p data-aos="fade-up-right" className="max-w-2xl mb-6 font-normal  text-gray-500 lg:mb-8 md:text-lg  lg:text-lg  dark:text-gray-300 mt-10">
                            Unlock the incredible power of AutomateX, revolutionizing product development speed. Accelerate your process, embrace rapid innovation, and experience a swift and efficient journey. Discover AutomateX is potential today.
                        </p>
                        <Lottie
                            animationData={Space}
                            className="w-0 md:w-0 lg:w-0  xl:w-[200px] absolute top-10 left-[250px]"
                            data-aos="fade-right"
                        />
                        <button data-aos="fade-right" type="button" className="text-white bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center mt-5 rainbow-5 ">
                            Get Started Now
                        </button>

                    </div>
                    <Lottie
                        animationData={Spaces}
                        className="w-0 md:w-0 lg:w-0  xl:w-[200px] absolute top-10 right-[180px]"
                        data-aos="fade-right"
                    />
                </div>
                <div className="flex justify-center items-center mx-auto max-w-screen-md">
                    <Image width={100} height={100} className={"w-8/12 h-full"} unoptimized="true" src="images/features.png" />
                </div>


                <div className="mt-10 mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                    <div className="mb-16 grid gap-8 lg:grid-cols-3 ">
                        <article >
                            <div className="">
                                <div className="relative">
                                    <div className="w-20 h-20 bg-slate-100 dark:bg-amber-400 rounded-full" >
                                        <div className="w-16 h-16 absolute left-2 top-2 bg-amber-400 dark:bg-white rounded-full" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 absolute top-2 left-2  text-cool-blue-300 dark:text-orange-100">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <h1 data-aos="fade-right" className=" mt-3 font-bold text-xl mb-2 text-orange-50 ">Improve your product</h1>
                                <h1 data-aos="fade-right" className=" font-extrabold text-xl mb-5 text-orange-50 ">deploy fast.</h1>

                                <p data-aos="fade-right" className="mb-7 text-lg font-normal text-gray-800 dark:text-gray-300">
                                    One of the best ways to improve your product deployment speed is to automate as much of the process as possible.
                                </p>
                            </div>
                        </article>
                        <div className="space-y-8 lg:pl-8">
                            <article data-aos="fade-up-left" className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-orange-50 rounded-xl">
                                        <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 absolute top-3 left-3 text-white"><path d="m553 1399-50 50q-10 10-23 10t-23-10L-9 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L160 960l393 393q10 10 10 23t-10 23zm591-1067L771 1623q-4 13-15.5 19.5T732 1645l-62-17q-13-4-19.5-15.5T648 1588l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" fill="#1d8dd7" className="fill-000000"></path></svg>
                                    </div>
                                </div>
                                <h2 className="mt-5 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                    <Link href="#">Build Deploy Backend App</Link>
                                </h2>
                                <p className="mb-4 text-gray-500 font-normal dark:text-gray-300">
                                    Choose a programming language such as popular backend programming languages include Java, PHP and C#(.NET).
                                </p>

                            </article>
                            <article data-aos="fade-up-left" className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-orange-50 rounded-xl" >
                                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 absolute top-3 left-3 text-white"><path d="M385 224a64 64 0 0 0-55.33 31.89c-42.23-1.21-85.19-12.72-116.21-31.33-32.2-19.32-49.71-44-52.15-73.35a64 64 0 1 0-64.31.18v209.22a64 64 0 1 0 64 0v-94.46c44.76 34 107.28 52.38 168.56 53.76A64 64 0 1 0 385 224ZM129 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32Zm0 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm256-128a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" fill="#1d8dd7" className="fill-000000"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="mt-5 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                                    <Link href="#">
                                        Manage source with git server
                                    </Link>
                                </h2>
                                <p className="mb-4 text-gray-500 font-normal dark:text-gray-300">
                                    Set up a Git server is no difference than git such as github, gitlab ...etc. AutomateX got a git just for you.
                                </p>

                            </article>
                        </div>
                        <div className="space-y-8 lg:pl-8">
                            <article data-aos="fade-up-left" className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-orange-50 rounded-xl" >
                                        <svg viewBox="0 0 1792 1792" className="w-6 h-6 absolute top-3 left-3 text-white" xmlns="http://www.w3.org/2000/svg"><path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28H224q-40 0-68-28t-28-68V96q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528V640h-416q-40 0-68-28t-28-68V128H256v1536h1280zM608 768q8-11 21-12.5t24 6.5l51 38q11 8 12.5 21t-6.5 24l-182 243 182 243q8 11 6.5 24t-12.5 21l-51 38q-11 8-24 6.5t-21-12.5l-226-301q-14-19 0-38zm802 301q14 19 0 38l-226 301q-8 11-21 12.5t-24-6.5l-51-38q-11-8-12.5-21t6.5-24l182-243-182-243q-8-11-6.5-24t12.5-21l51-38q11-8 24-6.5t21 12.5zm-620 461q-13-2-20.5-13t-5.5-24l138-831q2-13 13-20.5t24-5.5l63 10q13 2 20.5 13t5.5 24l-138 831q-2 13-13 20.5t-24 5.5z" fill="#1d8dd7" className="fill-000000"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="mt-5 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                    <Link href="#">Build Deploy Frontend App</Link>
                                </h2>
                                <p className="mb-4 text-gray-500 font-normal dark:text-gray-300">
                                    Support popular front-end frameworks include React, Angular, Vue.js, Nextjs, Nuxtjs and static website.
                                </p>

                            </article>

                            <article data-aos="fade-up-left" className="rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-orange-50 text-white rounded-xl" >

                                        <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 absolute top-3 left-3 text-white"><path d="M896 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5T231 896 128 768V598q119 84 325 127t443 43zm0 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0-384q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128V982q119 84 325 127t443 43zM896 0q208 0 385 34.5t280 93.5 103 128v128q0 69-103 128t-280 93.5T896 640t-385-34.5T231 512 128 384V256q0-69 103-128t280-93.5T896 0z" fill="#1d8dd7" className="fill-000000"></path>
                                        </svg>

                                    </div>
                                </div>
                                <h2 className="mt-5 mb-2 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                                    <Link href="#">Database hosting</Link>
                                </h2>
                                <p className="mb-4 text-gray-500 font-normal dark:text-gray-300">
                                    Benefits of using a managed database hosting service such as Scalability, Reliability, Security, and Backup to cloud.

                                </p>

                            </article>
                        </div>
                    </div>
                </div>

                {/*How to deploy section */}

                <section className="bg-slate-50 dark:bg-gray-800">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10">

                        <span className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 data-aos="zoom-in-up"
                        className="max-w-lg mb-6 text-3xl font-extrabold text-cool-blue-100 dark:text-orange-100 sm:text-4xl md:mx-auto block whitespace-nowrap relative">
                        How it works
                    </h2>
                </span>

                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-4">

                            <div  className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl dark:bg-gray-800">
                                <a
                                    href="#"
                                    className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700"
                                >
                                    <div
                                        className="bg-purple-100 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                                        <div className="relative">
                                            <div className="w-16 h-16 bg-amber-400 rounded-full" >

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="white" className="w-8 h-8 absolute top-4 left-4 text-white">
                                                    <path d="m24,12c0,4.411-3.589,8-8,8s-8-3.589-8-8h1c0,3.859,3.14,7,7,7s7-3.141,7-7c0-1.377-.266-2.691-.73-3.907l.777-.777c.613,1.44.953,3.023.953,4.684Zm-23,0C1,5.935,5.935,1,12,1c1.377,0,2.691.266,3.907.73l.777-.777c-1.44-.613-3.023-.953-4.684-.953C5.383,0,0,5.383,0,12c0,4.981,2.688,9.333,7.376,11.938l.485-.875c-4.361-2.423-6.862-6.455-6.862-11.062Zm11-3.535L19.732.732c.943-.945,2.592-.945,3.535,0,.975.975.975,2.561,0,3.535l-7.732,7.732h-3.536v-3.535Zm1,2.535h2.122l7.439-7.439c.585-.585.585-1.536,0-2.121-.566-.566-1.555-.566-2.121,0l-7.439,7.439v2.121Z" />
                                                </svg>


                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="text-lg font-bold text-gray-900 dark:text-white">Create account</h1>

                                    <p className="text-gray-500 dark:text-gray-300 font-normal">
                                        Your can register acccount with Google, github, and Gitlab.
                                    </p>
                                </a>
                            </div>

                            <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl dark:bg-gray-800">
                                <a
                                    href="#"
                                    className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700"
                                >
                                    <div
                                        className="bg-purple-100 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">

                                        <div className="relative">
                                            <div className="w-16 h-16 bg-amber-400 rounded-full" >

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="white" className="w-8 h-8 absolute top-4 left-4 text-white"><path d="M19.5,3h-7.028c-.231,0-.464-.055-.671-.158l-3.156-1.578c-.345-.173-.732-.264-1.118-.264h-3.028C2.019,1,0,3.019,0,5.5v13c0,2.481,2.019,4.5,4.5,4.5h4c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V8H23v10.5c0,1.93-1.57,3.5-3.5,3.5h-4c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h4c2.481,0,4.5-2.019,4.5-4.5V7.5c0-2.481-2.019-4.5-4.5-4.5ZM1,5.5c0-1.93,1.57-3.5,3.5-3.5h3.028c.231,0,.464,.055,.671,.158l3.156,1.578c.345,.173,.732,.264,1.118,.264h7.028c1.76,0,3.221,1.306,3.464,3H1v-1.5Zm11.683,7.78c-.056-.056-.117-.103-.183-.142v9.363c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V13.139c-.066,.04-.129,.088-.187,.146l-2.511,2.566c-.193,.198-.509,.201-.707,.008-.197-.193-.201-.51-.008-.707l2.515-2.57c.384-.384,.886-.577,1.388-.58h.018c.502,.002,1.003,.194,1.384,.576l2.519,2.574c.193,.197,.189,.514-.008,.707-.097,.095-.224,.143-.35,.143-.13,0-.259-.05-.357-.15l-2.515-2.57Z" /></svg>

                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="text-lg font-bold text-gray-900  dark:text-white"> Upload  Source Code</h1>
                                    <p className="text-gray-500 dark:text-gray-300 font-normal">
                                        Upload your source with two option within git url or a zip file.
                                    </p>
                                </a>

                            </div>


                            <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl dark:bg-gray-800">
                                <a
                                    href="#"
                                    className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700"
                                >
                                    <div
                                        className="bg-purple-100 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">

                                        <div className="relative">
                                            <div className="w-16 h-16 bg-amber-400 rounded-full" >

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="white" className="w-8 h-8 absolute top-4 left-4 text-white"><path d="M23,6V14h-7.003c-.066-5.979-1.314-14-3.997-14s-3.931,8.021-3.997,14H1V6H0v15H1v-2.854l6.304,5.854h1.696v-2h6v2h1.749l6.251-5.847v2.847h1V6h-1ZM12,1c.733,0,1.547,1.751,2.143,4.538-.656-.358-1.373-.538-2.143-.538s-1.487,.18-2.143,.538c.595-2.787,1.41-4.538,2.143-4.538Zm-4,22h-.304L1,16.782v-1.782h7v8Zm1-2v-6.5c0-2.801,.23-5.397,.59-7.549,.701-.631,1.511-.951,2.41-.951s1.709,.32,2.41,.951c.359,2.152,.59,4.749,.59,7.549v6.5h-6Zm7.354,2h-.354V15h7v1.783l-6.646,6.217Z" /></svg>

                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="text-lg font-bold text-gray-900  dark:text-white">Build Test Deploy</h1>
                                    <p className="text-gray-500 dark:text-gray-300 font-normal">
                                        Just one click your project will automatically build, test and deploy.
                                    </p>
                                </a>
                            </div>

                            <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl dark:bg-gray-800">
                                <a
                                    href="#"
                                    className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700"
                                >
                                    <div
                                        className="bg-purple-100 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">

                                        <div className="relative">
                                            <div className="w-16 h-16 bg-amber-400 rounded-full" >

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="white" className="w-8 h-8 absolute top-4 left-4 text-white"><path d="M1.753,13.765L7.781,7.754c2.336-2.335,6.135-2.335,8.47,0,.769,.769,1.259,1.702,1.522,2.684l-.838,.838c-.148-1.03-.6-2.024-1.39-2.815-1.945-1.945-5.11-1.945-7.056,0L2.46,14.473c-.942,.942-1.461,2.198-1.461,3.536s.519,2.594,1.461,3.536c1.945,1.947,5.11,1.945,7.056,0l.003,.003,1.595-1.595c.288,.031,.579,.05,.873,.05,.173,0,.344-.014,.515-.025l-2.278,2.278c-.012,.012-.028,.017-.041,.027-1.163,1.144-2.678,1.72-4.197,1.72-1.533,0-3.067-.584-4.234-1.751C.622,21.121,0,19.614,0,18.009c0-1.605,.623-3.112,1.754-4.244Zm10.235,4.232c1.534,0,3.067-.583,4.234-1.751l6.028-6.011c2.34-2.34,2.34-6.147,0-8.486-2.322-2.322-6.09-2.331-8.429-.033-.014,.011-.031,.016-.044,.029l-2.277,2.278c.171-.011,.342-.025,.515-.025,.294,0,.585,.019,.873,.05l1.595-1.595,.004,.004c1.944-1.944,5.109-1.945,7.055,0,1.95,1.95,1.95,5.122,0,7.072l-6.028,6.011c-1.946,1.945-5.11,1.945-7.055,0h0c-.791-.791-1.243-1.785-1.39-2.815l-.838,.838c.263,.982,.753,1.915,1.522,2.684h0c1.167,1.168,2.701,1.751,4.235,1.751Z" /></svg>

                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="text-lg font-bold text-gray-900  dark:text-white">Get App URL</h1>

                                    <p className="text-gray-500 dark:text-gray-300 font-normal">
                                        After a few minutes it your website will be up on air with a url.
                                    </p>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                <main className="bg-transparent dark:bg-gray-500">
                    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">

                        <h2 className="mb-8 text-center text-3xl font-extrabold text-cool-blue-100 leading-tight tracking-tight dark:text-white md:text-4xl lg:mb-16">
                            Our Teach Stack
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
                                    className="w-48 h-16 hover:text-gray-900 dark:hover:text-white"
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
                                    className="w-48 h-16 hover:text-gray-900 dark:hover:text-white"
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
                                    className="w-48 h-16 hover:text-gray-900 dark:hover:text-white"
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
                    {/*</div>*/}
                </main>

                {/* Cloud Section   */}
                <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-20">
                        <h2 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-black dark:text-white md:text-4xl lg:mb-16">
                            Our Cloud Storage

                        </h2>
                    </div>
                    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
                        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                            <div className="col-span-6 hidden lg:flex">
                                <Lottie
                                    animationData={Spacees}
                                    className="w-2/3"
                                    data-aos="fade-right"
                                />
                            </div>
                            <div className="col-span-6  text-center sm:mb-6 lg:mb-0 lg:text-left">
                                <h1 className="mb-9 text font-bold leading-none tracking-tight text-orange-50 dark:text-white md:text-4xl xl:text-4xl">
                                    Cloud Storage Delivers Cost-effective, Scalable Storage
                                </h1>
                                <p className="mx-auto max-w-xl text-gray-500 dark:text-gray-300 md:text-lg lg:mx-0 xl:mb-8 font-normal xl:text-lg">
                                    Cloud Storage enables organizations to store, access, and maintain data so that they do not need to own and operate their own data centers, moving expenses from a capital expenditure model to operational.
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-amber-400 rounded-full" >

                                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" fill="none"  strokeWidth="1" stroke="white"  class="w-6 h-6 absolute top-3 left-3 text-white"><path d="M17,0c-3.925,0-7,1.757-7,4v4.378c-.906-.24-1.919-.378-3-.378-3.925,0-7,1.757-7,4v8c0,2.243,3.075,4,7,4s7-1.757,7-4v-.385c.933,.248,1.955,.385,3,.385,3.925,0,7-1.757,7-4V4c0-2.243-3.075-4-7-4Zm6,12c0,1.626-2.748,3-6,3-1.061,0-2.086-.151-3-.424v-2.576c0-.131-.013-.26-.033-.387,.938,.253,1.968,.387,3.033,.387,2.581,0,4.787-.762,6-1.92v1.92ZM1,14.08c1.213,1.158,3.419,1.92,6,1.92s4.787-.762,6-1.92v1.92c0,1.626-2.748,3-6,3s-6-1.374-6-3v-1.92ZM17,1c3.252,0,6,1.374,6,3s-2.748,3-6,3-6-1.374-6-3,2.748-3,6-3Zm-6,5.08c1.213,1.158,3.419,1.92,6,1.92s4.787-.762,6-1.92v1.92c0,1.626-2.748,3-6,3-1.297,0-2.531-.213-3.576-.613-.518-.688-1.36-1.27-2.424-1.688v-2.619Zm-4,2.92c3.252,0,6,1.374,6,3s-2.748,3-6,3-6-1.374-6-3,2.748-3,6-3Zm0,14c-3.252,0-6-1.374-6-3v-1.92c1.213,1.158,3.419,1.92,6,1.92s4.787-.762,6-1.92v1.92c0,1.626-2.748,3-6,3Zm10-4c-1.057,0-2.086-.149-3-.422v-2.962c.932,.248,1.953,.383,3,.383,2.581,0,4.787-.762,6-1.92v1.92c0,1.626-2.748,3-6,3Z" /></svg>

                                        </div>
                                    </div>
                                    <span className="font-normal text-gray-500 dark:text-gray-300">
                                        Database Backup
                                    </span>
                                </div>
                                <div className="flex items-center space-x-4 mt-3">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-amber-400 rounded-full" >

                                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="white"  class="w-6 h-6 absolute top-3 left-3 text-white"><path d="M21,17.5s0,0,0,.01c0,.5-.19,1-.58,1.38l-2.05,1.99c-.1,.09-.22,.14-.35,.14s-.26-.05-.36-.15c-.19-.2-.19-.51,0-.71l2.04-1.99c.06-.06,.1-.12,.14-.18h-5.36c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5.36c-.04-.07-.09-.13-.15-.19l-2.04-1.98c-.2-.19-.2-.51,0-.71,.19-.2,.51-.2,.71,0l2.04,1.99c.38,.38,.58,.88,.58,1.38,0,0,0,0,0,.01Zm3,0c0,3.58-2.92,6.5-6.5,6.5s-6.5-2.92-6.5-6.5,2.92-6.5,6.5-6.5,6.5,2.92,6.5,6.5Zm-1,0c0-3.03-2.47-5.5-5.5-5.5s-5.5,2.47-5.5,5.5,2.47,5.5,5.5,5.5,5.5-2.47,5.5-5.5Zm-14,3c0,.28-.22,.5-.5,.5H4.5c-2.48,0-4.5-2.02-4.5-4.5V4.5C0,2.02,2.02,0,4.5,0c0,0,11.13-.02,11.19,0,.51,.09,.98,.37,1.35,.74l3.24,3.27c.47,.47,.72,1.1,.72,1.76v2.73c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-2.73c0-.4-.15-.77-.43-1.06l-3.24-3.27c-.1-.1-.21-.18-.33-.25V5.5c0,.83-.67,1.5-1.5,1.5H6.5c-.83,0-1.5-.67-1.5-1.5V1h-.5c-1.93,0-3.5,1.57-3.5,3.5v12c0,1.93,1.57,3.5,3.5,3.5h4c.28,0,.5,.22,.5,.5ZM15,5.5V1H6V5.5c0,.28,.22,.5,.5,.5H14.5c.28,0,.5-.22,.5-.5Zm-3.03,5.34c.09-.26-.04-.55-.3-.64-.37-.13-.77-.2-1.17-.2-1.93,0-3.5,1.57-3.5,3.5,0,.99,.42,1.95,1.17,2.61,.09,.09,.21,.13,.33,.13,.14,0,.27-.06,.37-.17,.18-.21,.17-.52-.04-.71-.53-.47-.83-1.15-.83-1.86,0-1.38,1.12-2.5,2.5-2.5,.29,0,.57,.05,.83,.14,.26,.09,.55-.04,.64-.3Z" /></svg>

                                        </div>
                                    </div>
                                    <span className="font-normal text-gray-500 dark:text-gray-300">
                                        Backend volume backup
                                    </span>
                                </div>
                                <div className="flex items-center space-x-4 mt-3">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-amber-400 rounded-full" >

                                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="white"  class="w-6 h-6 absolute top-3 left-3 text-white"><path d="M21.5,0H10.5c-1.379,0-2.5,1.122-2.5,2.5V14h6.05c.039-.347,.112-.681,.226-1h-5.013l6.712-5.818,2.024,2.024,5-5v6.07c.353,.126,.693,.28,1,.485V2.5c0-1.378-1.121-2.5-2.5-2.5Zm-3.5,7.793l-1.976-1.976-7.024,6.088V2.5c0-.827,.673-1.5,1.5-1.5h11c.827,0,1.5,.673,1.5,1.5v.293l-5,5Zm-5-3.793c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm8.5,8h-3c-1.379,0-2.5,1.122-2.5,2.5v5.013c-.419-.317-.935-.513-1.5-.513-1.379,0-2.5,1.122-2.5,2.5s1.121,2.5,2.5,2.5,2.5-1.122,2.5-2.5v-7c0-.827,.673-1.5,1.5-1.5h3c.827,0,1.5,.673,1.5,1.5v5.013c-.419-.317-.935-.513-1.5-.513-1.379,0-2.5,1.122-2.5,2.5s1.121,2.5,2.5,2.5,2.5-1.122,2.5-2.5v-7c0-1.378-1.121-2.5-2.5-2.5Zm-7,11c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5Zm7,0c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5Zm-16.5,0V10h1v-1h-2v3H1v-3H0v15H1v-3h3v3h6.76c-.205-.306-.359-.646-.484-1H5Zm-1-10v3H1v-3h3Zm-3,7v-3h3v3H1Z" /></svg>

                                        </div>
                                    </div>
                                    <span className="font-normal text-gray-500 dark:text-gray-300">
                                        Store media
                                    </span>
                                </div>
                            </div>

                        </div>
                        {/* <div className="mx-auto mt-10 max-w-screen-sm text-center lg:mb-16">
                            <button type="button" class="text-black shadow bg-white hover:bg-cool-blue-300 hover:text-white focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6 text-orange-50">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                We Gurantee Your Comfort
                            </button>
                        </div> */}
                    </div>
                </section>




                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-0">
                    <h2 className="max-w-lg mb-6 text-4xl font-bold text-gray-900 dark:text-white sm:text-4xl md:mx-auto block text-center whitespace-nowrap">
                        Our Deployment approach
                    </h2>
                    <h2 className="max-w-lg mb-6 text-4xl font-bold text-blue-900 sm:text-4xl md:mx-auto block whitespace-nowrap">

                    </h2>


                </div>
                <div className="mb-8 grid max-w-screen-xl mx-auto row-gap-6 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">



                    <div className="flex flex-col justify-between p-5 bg-slate-100 dark:bg-gray-800 rounded-md shadow-0">

                        <div className="flex items-center space-x-4 space-y-9">

                            <div >

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth="0.5" stroke="orange" className="w-12 h-12 text-orange-100" ><path d="M12,2a10.032,10.032,0,0,1,7.122,3H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.981,11.981,0,0,0,.05,10.9a1.007,1.007,0,0,0,1,1.1h0a.982.982,0,0,0,.989-.878A10.014,10.014,0,0,1,12,2Z" /><path d="M22.951,12a.982.982,0,0,0-.989.878A9.986,9.986,0,0,1,4.878,19H8a1,1,0,0,0,1-1H9a1,1,0,0,0-1-1H3.857A1.856,1.856,0,0,0,2,18.857V23a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V20.922A11.981,11.981,0,0,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1Z" /></svg>

                            </div>

                            <div>
                                <h6 className="font-bold text-lg text-gray-900 dark:text-white">Automate your deployment process
                                    <p className="mt-5 text-sm text-gray-900 dark:text-white font-normal">
                                        CI/CD pipeline is a set of automated steps that build, test, and deploy your product code.
                                    </p>
                                </h6>
                            </div>

                        </div>


                    </div>

                    <div className="flex flex-col justify-between p-5 bg-slate-100 dark:bg-gray-800 rounded-md shadow-0">

                        <div className="flex items-center space-x-4 space-y-9">

                            <div >

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth="0.5" stroke="orange" className="w-12 h-12 text-orange-100" ><path d="M24,11V4.5c0-1.379-1.122-2.5-2.5-2.5h-3.293l-2-2h-3.707c-1.378,0-2.5,1.121-2.5,2.5v2.5H1V0H0V16.5c0,1.379,1.122,2.5,2.5,2.5h7.5v5h14v-6.5c0-1.379-1.122-2.5-2.5-2.5h-3.293l-2-2h-3.707c-1.378,0-2.5,1.121-2.5,2.5v2.5H2.5c-.827,0-1.5-.673-1.5-1.5V6H10v5h14ZM11,2.5c0-.827,.673-1.5,1.5-1.5h3.293l2,2h3.707c.827,0,1.5,.673,1.5,1.5v5.5H11V2.5Zm0,13c0-.827,.673-1.5,1.5-1.5h3.293l2,2h3.707c.827,0,1.5,.673,1.5,1.5v5.5H11v-7.5Z" /></svg>

                            </div>

                            <div>
                                <h6 className="font-bold text-lg text-gray-900 dark:text-white">Infrastructure as code (IaC)
                                    <p className="mt-5 text-sm text-gray-900 dark:text-white font-normal">
                                        We use IaC to provision and manage all of our infrastructure. This allows us to automate the deployment and configuration of our infrastructure in a repeatable and consistent way.
                                    </p>
                                </h6>
                            </div>

                        </div>


                    </div>

                    <div className="flex flex-col justify-between p-5 bg-slate-100 dark:bg-gray-800 rounded-md shadow-0">

                        <div className="flex items-center space-x-4 space-y-9">

                            <div >
                                {/* <?xml version="1.0" encoding="UTF-8"?> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth="0.5" stroke="orange" className="w-12 h-12 text-orange-100" ><path d="m22,6h-8c-1.103,0-2,.897-2,2v16h12V8c0-1.103-.897-2-2-2Zm1,17h-10v-15c0-.551.448-1,1-1h8c.552,0,1,.449,1,1v15Zm-5-8c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Zm0,5c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Zm-1.5-8.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5ZM1,16h9v5h-5v-1h4v-3H0V2.5C0,1.122,1.121,0,2.5,0h16c1.379,0,2.5,1.122,2.5,2.5v1.5h-1v-1.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v13.5Z" /></svg>


                            </div>

                            <div>
                                <h6 className="font-bold text-lg text-gray-900 dark:text-white">Monitoring your deployment
                                    <p className="mt-5 text-sm text-gray-900 dark:text-white  font-normal">
                                        It is important to monitor your deployments to ensure that they are successful and that your product is running as expected. You should monitor your application metrics, logs, and errors.
                                    </p>
                                </h6>
                            </div>

                        </div>


                    </div>

                    <div className="flex flex-col justify-between p-5 bg-slate-100 dark:bg-gray-800 rounded-md shadow-0">

                        <div className="flex items-center space-x-4 space-y-9">

                            <div >
                                {/* <?xml version="1.0" encoding="UTF-8"?> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth="0.5" stroke="orange" className="w-12 h-12 text-orange-100" >
                                    <path d="m24,4v-1H0v1h1v16H0v1h24v-1h-1V4h1Zm-2,16H2V4h20v16Zm-8-2h-1V6h1v12Zm3,0h-1V6h1v12Zm3,0h-1V6h1v12Zm-9,0h-1V6h1v12Zm-3,0h-1V6h1v12Zm-4,0V6h1v12h-1Z" />
                                </svg>


                            </div>

                            <div>
                                <h6 className="font-bold text-lg text-gray-900 dark:text-white">Containerization
                                    <p className="mt-5 text-sm text-gray-900 dark:text-white  font-normal">
                                        This allows us to isolate our applications from each other and from the underlying infrastructure, making them more portable and scalable.
                                    </p>
                                </h6>
                            </div>

                        </div>


                    </div>
                    <div className="flex flex-col justify-between p-5 bg-slate-100 dark:bg-gray-800 rounded-md shadow-0">

                        <div className="flex items-center space-x-4 space-y-9">

                            <div >

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth="0.5" stroke="orange" className="w-12 h-12 text-orange-100" ><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v13c0,1.93,1.57,3.5,3.5,3.5h3.605l3.898,3.284c.285.253.645.379,1.001.379.352,0,.702-.123.978-.368l3.985-3.295h3.532c1.93,0,3.5-1.57,3.5-3.5V3.5c0-1.93-1.57-3.5-3.5-3.5Zm2.5,16.5c0,1.378-1.121,2.5-2.5,2.5h-3.712c-.116,0-.229.041-.318.115l-4.138,3.421c-.189.168-.474.169-.674-.008l-4.048-3.41c-.09-.076-.204-.118-.322-.118h-3.788c-1.379,0-2.5-1.122-2.5-2.5V3.5c0-1.378,1.121-2.5,2.5-2.5h17c1.379,0,2.5,1.122,2.5,2.5v13ZM13.732,4.732l-6.707,6.707c-.651.651-1.025,1.554-1.025,2.475v1.586c0,.276.224.5.5.5h1.586c.936,0,1.814-.364,2.475-1.025l6.707-6.707c.473-.472.732-1.1.732-1.768s-.26-1.296-.732-1.768c-.975-.975-2.561-.975-3.535,0Zm2.828,2.828l-6.707,6.707c-.472.472-1.1.732-1.768.732h-1.086v-1.086c0-.658.267-1.302.732-1.768l6.707-6.707c.584-.585,1.537-.585,2.121,0,.283.283.439.66.439,1.061s-.156.777-.439,1.061Z" /></svg>


                            </div>

                            <div>
                                <h6 className="font-bold text-lg text-gray-900 dark:text-white">Code Reviews
                                    <p className="mt-5 text-sm text-gray-900 dark:text-white  font-normal">
                                        Code reviews are a process in which software developers review each other is code. This is done to identify and fix bugs, improve code quality, and share knowledge.
                                    </p>
                                </h6>
                            </div>

                        </div>


                    </div>

                    <div className="flex flex-col justify-between p-5 bg-slate-100 dark:bg-gray-800 rounded-md shadow-0">

                        <div className="flex items-center space-x-4 space-y-9">

                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth="0.5" stroke="orange" className="w-12 h-12 text-orange-100" ><path d="M5,19h3v1h-3v-1Zm0,5H14v-1H5v1ZM14,15H5v1H14v-1Zm3.003-9.978C15.87,2.004,12.999,0,9.75,0,5.477,0,2,3.477,2,7.75c0,.763,.116,1.523,.345,2.267-1.476,1.032-2.345,2.681-2.345,4.483,0,2.132,1.222,3.98,3,4.893v-1.154c-1.205-.808-2-2.182-2-3.738,0-1.582,.822-3.021,2.199-3.847l.354-.212-.141-.388c-.273-.752-.412-1.527-.412-2.304,0-3.722,3.028-6.75,6.75-6.75,2.931,0,5.51,1.873,6.417,4.661l.11,.339,.355,.007c3.511,.071,6.367,2.984,6.367,6.493,0,1.826-.788,3.528-2,4.732v1.315c1.787-1.386,3-3.623,3-6.047,0-3.933-3.107-7.216-6.997-7.478Zm-1.003,10.978h3v-1h-3v1Zm-6,4h9v-1H10v1Zm6,4h3v-1h-3v1Z" /></svg>

                            </div>

                            <div>
                                <h6 className="font-bold text-lg text-gray-900 dark:text-white">Use a cloud platform
                                    <p className="mt-5 text-sm text-gray-900 dark:text-white font-normal">
                                        Cloud platforms offer a number of benefits for product deployment, including scalability, elasticity, and reliability.
                                    </p>
                                </h6>
                            </div>

                        </div>


                    </div>

                </div>

            </section>

            {/* <main className="bg-white dark:bg-gray-900 xl:mb-24"> */}
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
                <OurPartner/>
            </div>
            {/* </main> */}
        </section>
    )

}
export default FeaturesAndServices
