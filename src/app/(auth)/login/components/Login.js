"use client"
import React from 'react';
import Link from "next/link";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, Checkbox, Label, TextInput} from "flowbite-react";
import Image from "next/image";
import HandleImage from "@/components/HandleImage";

function Login(props) {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'), password: Yup.string()
            .required('Password is required')
            .matches(passwordRegex, 'Password must be at least 6 '),
    });
    return (<section className="bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-20 lg:py-16">
                <div className="w-full place-self-center lg:col-span-6">
                    <div className="mx-auto rounded-lg bg-white p-6 shadow dark:bg-gray-800 sm:max-w-xl sm:p-8">
                        <a
                            href="#"
                            className="mb-4 inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white"
                        >
                            {/*<Image height={50} width={50}*/}
                            {/*       alt="logo"*/}
                            {/*       src="/mainlogo.png"*/}
                            {/*/>*/}
                            <HandleImage src={"/mainlogo.png"} w={10} h={10}/>
                            <span className="self-center text-xl font-bold whitespace-nowrap">
                          <span className="text-orange-100">Automate</span>
                          <span className="text-cool-blue-100">X</span>
                        </span>
                        </a>
                        <h1 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                            Welcome back
                        </h1>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Start your website in seconds. Don’t have an account?&nbsp;
                            <a
                                href="#"
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                Sign up
                            </a>
                            .
                        </p>
                        <Formik initialValues={{
                            email: '', password: '',
                        }}
                                validationSchema={validationSchema}
                                onSubmit={(values, {setSubmitting}) => {
                                    setTimeout(() => {
                                        // console.log(values)
                                        alert(JSON.stringify(values, null, 2))
                                        setSubmitting(false);
                                    }, 500);
                                }}
                        >
                            {({isSubmitting}) => (<Form className="mt-4 space-y-6 sm:mt-6" action="#">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="grid grid-cols-1 gap-2">
                                        <div className="grid grid-cols-1 gap-2">
                                            <div>
                                                <Label htmlFor="email" className="dark:text-white">Your email</Label>
                                                <Field
                                                    type="text"
                                                    name="email"
                                                    className="my-2 form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-100 focus:border-orange-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-100 dark:focus:border-orange-100"
                                                    placeholder="Enter your email"
                                                />
                                                <ErrorMessage name={"email"} component={"div"}
                                                              className={"invalid-feedback text-red-600"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        <div>
                                            <Label htmlFor="password" className="dark:text-white">Password</Label>
                                            <Field
                                                name="password"
                                                placeholder="••••••••"
                                                className="my-2 form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-100 focus:border-orange-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-100 dark:focus:border-orange-100"
                                                type="password"
                                            />
                                            <ErrorMessage name={"password"} component={"div"}
                                                          className={"invalid-feedback text-red-600"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                                        or
                                    </div>
                                    <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
                                </div>
                                <div className="space-y-3">
                                    <button
                                        className="w-full group h-12 px-6 border-2 border-gray-200 rounded-lg transition duration-300 hover:border-yellow-300 focus:bg-yellow-50 active:bg-yellow-100">
                                        <div className="relative flex items-center space-x-4 justify-center">
                                            <Image width={100} height={100} src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                                                 className="absolute left-0 w-5" alt="google logo"/>
                                            <span
                                                className="block w-max font-semibold tracking-wide text-gray-700 dark:text-gray-400 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                                        </div>
                                    </button>
                                    <button
                                        className="w-full group h-12 px-6 border-2 border-gray-200 rounded-lg transition duration-300 hover:border-yellow-300 focus:bg-yellow-50 active:bg-yellow-100">
                                        <div className="relative flex items-center space-x-4 justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 className="absolute left-0 w-5 text-gray-700 dark:text-gray-400"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                            <span
                                                className="block w-max dark:text-gray-400 font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                                        </div>
                                    </button>
                                    <button
                                        className="w-full group h-12 px-6 border-2 border-gray-200 rounded-lg transition duration-300 hover:border-yellow-300 focus:bg-yellow-50 active:bg-yellow-100">
                                        <div className="relative flex items-center space-x-4 justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="gitlab"
                                                 className="absolute left-0 w-5 text-gray-700">
                                                <path fill="#E24329" d="m12 23.054 4.419-13.6H7.581L12 23.054z"></path>
                                                <path fill="#FC6D26" d="m12 23.054-4.419-13.6H1.388L12 23.054z"></path>
                                                <path fill="#FCA326"
                                                      d="M1.388 9.453.045 13.586a.917.917 0 0 0 .332 1.023L12 23.054 1.388 9.453z"></path>
                                                <path fill="#E24329"
                                                      d="M1.388 9.454h6.193L4.919 1.262a.457.457 0 0 0-.87 0L1.388 9.454z"></path>
                                                <path fill="#FC6D26" d="m12 23.054 4.419-13.6h6.193L12 23.054z"></path>
                                                <path fill="#FCA326"
                                                      d="m22.612 9.453 1.343 4.133a.917.917 0 0 1-.332 1.023L12 23.054 22.612 9.453z"></path>
                                                <path fill="#E24329"
                                                      d="M22.612 9.454h-6.193l2.662-8.191a.457.457 0 0 1 .87 0l2.661 8.191z"></path>
                                            </svg>
                                            <span
                                                className="block w-max dark:text-gray-400 font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Gitlab</span>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <Checkbox id="remember-illustration" required/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <Label htmlFor="remember-illustration"
                                                   className="text-gray-500 dark:text-gray-300">Remember me</Label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-100">
                                    Sign In
                                </Button>
                            </Form>)}
                        </Formik>
                    </div>
                </div>
                <div className="mr-auto place-self-center lg:col-span-6">
                    <Image width={100} height={100} unoptimized
                        className="mx-auto hidden lg:flex w-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
                        alt="illustration"
                    />
                </div>
            </div>
        </section>

    );
}

export default Login;