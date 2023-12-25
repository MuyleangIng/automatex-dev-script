"use client"
import React, {useState} from 'react';
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Alert, Button, Card, Label} from "flowbite-react";
import HandleImage from "@/components/HandleImage";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import AXGoogleButton from "@/components/AXGoogleButton";
import AXGithubButton from "@/components/AXGitHubButton";
import Lottie from "lottie-react";
import Spaces from "@/app/utils/assets/bot.json";
import Bot from "@/app/utils/assets/botai.json";
import {useCreateRequestSendMailMutation} from "@/store/features/user/userApiSlice";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const router = useRouter();
    const [resErr, setResErr] = useState(null);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .test('emailOrUsername', 'Invalid email or username', value => {
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                return emailRegex.test(value) || /^[a-zA-Z0-9_]+$/.test(value);
            })
            .required('Required'),
        password: Yup.string()
            .required('Password is required')
    });

    // forgot password
    const toggleForgotPasswordVisibility = () => {
        setShowForgotPassword((prevState) => !prevState);
    };
    const handleCloseForgotPasswordModal = () => {
        setShowForgotPassword(false);
    };

    // for mail request
    const initialValuesMail = {
        email: "",
    };

    const validationSchemaMail = Yup.object({
        email: Yup.string().email("Invalid email address").required("Required email"),
    });

    const [sendMail]=useCreateRequestSendMailMutation();
    const handleSubmitMail = (values, { setSubmitting }) => {
        sendMail(values)
        setSubmitting(false);
        toast.success("A password reset email has been sent to your email address!", {
            autoClose: 1000,
        });
        // router.push("/auth/new-password");
    };

    return (<section className="bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-20 lg:py-16">
                <div className="w-full place-self-center lg:col-span-6">
                    <div className="mx-auto rounded-lg bg-white p-6 shadow dark:bg-gray-800 sm:max-w-xl sm:p-8">
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
                            Welcome back
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

                        <Formik initialValues={{
                            email: '', password: '',
                        }}
                                validationSchema={validationSchema}
                                onSubmit={ async (values, {setSubmitting}) => {
                                    const res = await signIn('credentials', {
                                        email: values.email,
                                        password:values.password,
                                        redirect: false,
                                    })
                                    router.push("/app/dashboard");

                                    const resp = JSON.parse(res.error)
                                    if (resp.code === 400){
                                        setResErr(resp.errors[0].message)
                                    } else if (resp.code === 401){
                                        setResErr([{message:"Your password is incorrect."}])
                                    } else {
                                        setResErr(resp.errors[0].message)
                                    }
                                    setSubmitting(false);
                                }}
                        >

                            {({isSubmitting}) => (

                                <Form className="mt-4 space-y-6 sm:mt-6" action="#">
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
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                    </div>
                                    <div
                                        type="submit"
                                        className="text-sm cursor-pointer font-medium hover:underline dark:text-primary-500 text-blue-500"
                                        onClick={toggleForgotPasswordVisibility}
                                    >
                                        Forgot password?
                                    </div>
                                </div>
                                <Button type="submit" disabled={isSubmitting}  className="w-full bg-orange-100">
                                    {isSubmitting ? 'Signing In...' : 'Sign In'}
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
                </div>
                <div className="mr-auto place-self-center lg:col-span-6">
                    <Lottie
                        animationData={Spaces}
                        className="mx-auto hidden lg:flex w-full"
                        data-aos="fade-right"
                    />
                </div>
            </div>
            {showForgotPassword && (
                <>
                    <div className="fixed inset-0 bg-gray-500 backdrop-filter backdrop-blur-sm opacity-75"></div>
                    <Formik
                        initialValues={initialValuesMail}
                        validationSchema={validationSchemaMail}
                        onSubmit={handleSubmitMail}
                    >
                        {({ isSubmitting }) => (
                            <Form
                                onClick={handleCloseForgotPasswordModal}
                                className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center"
                            >
                                <Card className="w-full lg:max-w-[640px] lg:[&>*]:w-full lg:[&>*]:p-16" onClick={(event) => {
                                    event.stopPropagation();
                                }}>
                                    <h1 className="text-2xl font-bold dark:text-white md:text-3xl">
                                        Forgot your password?
                                    </h1>
                                    <p className="mb-3 text-gray-500 dark:text-gray-300">
                                        Don&apos;t fret! Just type in your email and we will send you a code to reset your password!
                                    </p>
                                    <div className="mb-6 flex flex-col gap-y-3">
                                        <Label htmlFor="email">Your email</Label>
                                        <Field
                                            id="email"
                                            name="email"
                                            placeholder="name@company.com"
                                            type="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-80 focus:border-orange-80 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-80 dark:focus:border-orange-80"
                                        />
                                        <ErrorMessage name="email" component="div" className="invalid-feedback text-red-600" />
                                    </div>
                                    <div>
                                        <Button type="submit" className="w-full lg:w-auto">
                                            Reset password
                                        </Button>
                                    </div>
                                </Card>
                                <Lottie animationData={Bot} className="w-0 xl:w-64 absolute xl:right-64" data-aos="fade-right" />
                            </Form>
                        )}
                    </Formik>
                </>
            )}
            <ToastContainer />
        </section>
    );
}

export default Login;