"use client"
import React from 'react';
import Link from "next/link";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, Checkbox, Label, TextInput} from "flowbite-react";
import Image from "next/image";
import HandleImage from "@/components/HandleImage";
import SocialLogin from "@/components/SocialLogin";

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

                                <SocialLogin />

                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <Checkbox id="remember-illustration" />
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
                    <Image width={100} height={100} unoptimized="true"  
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