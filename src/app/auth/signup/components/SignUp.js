"use client"
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Alert, Button, Label} from "flowbite-react";
import * as Yup from "yup";
import HandleImage from "@/components/HandleImage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useRouter} from "next/navigation";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import AXGoogleButton from "@/components/AXGoogleButton";
import AXGithubButton from "@/components/AXGitHubButton";
import Lottie from "lottie-react";
import Spaces from "@/app/utils/assets/bot.json";
import Link from "next/link";
import {setEmail} from "@/store/features/personalInfo/personalInfoSlice";
import {useDispatch} from "react-redux";
import {setUser} from "@/store/features/user/userSlice";
import ReCAPTCHA from "react-google-recaptcha";



const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is Required'),
    email: Yup.string().email('Invalid email').required('Gmail is Required'),
    password: Yup.string()
        .required('Password is required')
        .matches(passwordRegex, 'Password must be at least 6 characters, a number, an Uppercase, and a Lowercase'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password must match").required("Required"),
    captcha: Yup.string().required('Please complete the reCAPTCHA verification.'),
});


function SignUp(props) {

    const [resErr, setResErr] = useState(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const [captcha, setCaptcha]= useState()
    const onSubmit = () => {

    }
    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };
    return (
        <section  className="bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-20 lg:py-16">
                <div
                    className="mx-auto w-full rounded-lg bg-white p-6 shadow dark:bg-gray-800 sm:max-w-xl sm:p-8 lg:col-span-6">
                    <Link
                        href="#"
                        className="mb-4 inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white"
                    >
                        <HandleImage src={"/mainlogo.png"} w={10} h={10}/>
                        <span className="self-center text-xl font-bold whitespace-nowrap">
                          <span className="text-orange-100">Automate</span>
                          <span className="text-cool-blue-100">X</span>
                        </span>
                    </Link>
                    <h1 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                        Create your Account
                    </h1>
                    {resErr ? (
                        <Alert color="failure" className={"w-full"}>
                            {typeof resErr === 'string' ? resErr  : (
                                <ul>
                                    {resErr.map((err, index) => (
                                        <li key={index}>{err.message}</li>
                                    ))}
                                </ul>
                            )}
                        </Alert>
                    ) : null}
                    <Formik
                        initialValues={{
                            username: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            captcha: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            try {
                                const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/auth/register", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(values),
                                });
                                const data = await res.json();
                                if (data.code === 400) {
                                    setResErr(data.errors[0].message);
                                } else if (data.code === 401) {
                                    setResErr([{ message: "Your password is incorrect." }]);
                                } else {
                                    dispatch(setEmail(values.email));
                                    dispatch(setUser(values));
                                    resetForm({
                                        values: { username: '', email: '', password: '', confirmPassword: '' ,captcha: '',},
                                    });
                                    router.push("/auth/sign-up-success");
                                }
                            } catch (error) {
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({isSubmitting,setFieldValue}) => (
                            <Form className="mt-4 space-y-6 sm:mt-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="grid grid-cols-1 gap-2">
                                        <div>
                                            <Label htmlFor="username" className="dark:text-white">Full Name</Label>
                                            <Field
                                                type="text"
                                                name="username"
                                                className="my-2 form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-100 focus:border-orange-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-100 dark:focus:border-orange-100"
                                                placeholder="Enter your fullname"
                                            />
                                            <ErrorMessage name={"username"} component={"div"}
                                                          className={"text-red-500 text-sm mt-1"}/>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        <div>

                                            <Label htmlFor="email" className="dark:text-white">Your email</Label>
                                            <Field
                                                type="email"
                                                name="email"
                                                className="my-2 form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-100 focus:border-orange-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-100 dark:focus:border-orange-100"
                                                placeholder="Enter your email"
                                            />
                                            <ErrorMessage name={"email"} component={"div"}
                                                          className={"text-red-500 text-sm mt-1"}/>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        <div>
                                            <Label htmlFor="password" className="dark:text-white">Password</Label>
                                            <div className={"relative"}>
                                                <Field
                                                    name="password"
                                                    id="password"
                                                    placeholder="••••••••"
                                                    className="my-2 form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-100 focus:border-orange-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-100 dark:focus:border-orange-100"
                                                    type={passwordVisible ? "password" : "text"}
                                                />
                                                {passwordVisible ? (
                                                    <FaEyeSlash
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
                                                        onClick={togglePasswordVisibility}
                                                    />
                                                ) : (
                                                    <FaEye
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
                                                        onClick={togglePasswordVisibility}
                                                    />
                                                )}
                                            </div>
                                            <ErrorMessage name={"password"} component={"div"}
                                                          className={"text-red-500 text-sm mt-1"}/>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        <div>
                                            <Label htmlFor="confirmPassword" className="dark:text-white">Confirm
                                                Password
                                            </Label>
                                            <div className={"relative"}>
                                                <Field
                                                    name="confirmPassword"
                                                    id="confirmPassword"
                                                    placeholder="••••••••"
                                                    className="my-2 form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-100 focus:border-orange-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-100 dark:focus:border-orange-100"
                                                    type={passwordVisible ? "password" : "text"}
                                                />
                                                {passwordVisible ? (
                                                    <FaEyeSlash
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
                                                        onClick={togglePasswordVisibility}
                                                    />
                                                ) : (
                                                    <FaEye
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
                                                        onClick={togglePasswordVisibility}
                                                    />
                                                )}
                                            </div>

                                            <ErrorMessage name={"confirmPassword"} component={"div"}
                                                          className={"text-red-500 text-sm mt-1"}/>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        <ReCAPTCHA
                                            size="normal"
                                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                            onChange={(value) => {
                                                setFieldValue('captcha', value);
                                                setCaptcha(value);
                                            }}
                                            className="mx-auto"
                                        />
                                        <ErrorMessage name="captcha" component="div"
                                                      className="text-red-500 text-sm mt-1"/>
                                    </div>
                                </div>
                                <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-100">
                                    {isSubmitting ? "Creating..." : " Create an account"}
                                </Button>
                                <div className="flex items-center">
                                    <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                                        or
                                    </div>
                                    <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
                                </div>
                                <AXGoogleButton/>
                                <AXGithubButton/>
                            </Form>)}
                    </Formik>
                </div>
                <div className="mr-auto place-self-center lg:col-span-6">
                    <Lottie
                        animationData={Spaces}
                        className="mx-auto hidden lg:flex w-full"
                        data-aos="fade-right"
                    />
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}
export default SignUp;