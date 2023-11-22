"use client"
import React from 'react';
import Image from "next/image";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, Label, TextInput} from "flowbite-react";
import * as Yup from "yup";
import HandleImage from "@/components/HandleImage";
import SocialLogin from "@/components/SocialLogin";

function SignUp(props) {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .required('Password is required')
            .matches(passwordRegex, 'Password must be at least 6 characters, a number, an Uppercase, and a Lowercase'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password must match").required("Required"),
    });

    return (<div>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-20 lg:py-16">
                <div
                    className="mx-auto w-full rounded-lg bg-white p-6 shadow dark:bg-gray-800 sm:max-w-xl sm:p-8 lg:col-span-6">
                    <a
                        href="#"
                        className="mb-4 inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white"
                    >
                        <HandleImage src={"/mainlogo.png"} w={10} h={10}/>
                        <span className="self-center text-xl font-bold whitespace-nowrap">
                          <span className="text-orange-100">Automate</span>
                          <span className="text-cool-blue-100">X</span>
                        </span>
                    </a>
                    <h1 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                        Create your Account
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        Start your website in seconds. Already have an account?&nbsp;
                        <a
                            href="#"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                            Login here
                        </a>
                        .
                    </p>
                    <Formik initialValues={{
                        username: '', email: '', password: '', confirmPassword: '',
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
                        {({isSubmitting}) => (
                            <Form className="mt-4 space-y-6 sm:mt-6" action="#">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="grid grid-cols-1 gap-2">
                                    <div>
                                        <Label htmlFor="username" className="dark:text-white">Full Name</Label>
                                        <Field
                                            type="text"
                                            name="username"
                                            className="my-2 form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-100 focus:border-orange-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-100 dark:focus:border-orange-100"
                                            placeholder="Enter your username"
                                        />
                                        <ErrorMessage name={"username"} component={"div"}
                                                      className={"invalid-feedback text-red-600"}/>
                                    </div>
                                </div>
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
                                <div className="grid grid-cols-1 gap-2">
                                    <div>
                                        <Label htmlFor="confirmPassword" className="dark:text-white">Confirm
                                            Password</Label>
                                        <Field
                                            name="confirmPassword"
                                            placeholder="••••••••"
                                            className="my-2 form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-100 focus:border-orange-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-100 dark:focus:border-orange-100"
                                            type="password"
                                        />
                                        <ErrorMessage name={"confirmPassword"} component={"div"}
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

                            <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-100">
                                Create an account
                            </Button>
                        </Form>)}
                    </Formik>
                </div>
                <div className="mr-auto place-self-center lg:col-span-6">
                    <Image width={100} height={100} unoptimized
                        alt=""
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
                        className="mx-auto hidden lg:flex w-full"
                    />
                </div>
            </div>
        </section>

    </div>);
}

export default SignUp;