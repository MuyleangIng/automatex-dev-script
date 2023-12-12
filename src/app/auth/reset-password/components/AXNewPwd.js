
"use client"

import React,{useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {useUpdateRequestForgotPasswordMutation} from "@/store/features/user/userApiSlice";
import * as Yup from "yup";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, Card, Label, Spinner} from "flowbite-react";
import Lottie from "lottie-react";
import Bot from "@/app/utils/assets/botai.json";


export default function NewPassword(){
    const [ setResErr] = useState(null);
    const queries = useSearchParams();
    const router = useRouter();
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
    const [newPassword, { isLoading }] = useUpdateRequestForgotPasswordMutation();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .matches(
                passwordRegex,
                'Password must be at least 6 characters, a number, an Uppercase, and a Lowercase'
            ),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match.')
            .required('Confirm password is required.')
            .matches(
                passwordRegex,
                'Password must be at least 6 characters, a number, an Uppercase, and a Lowercase'
            ),
    });

    const handleNewPassword = async (values) => {
        const urlParams = new URLSearchParams(window.location.search);
        const verificationCode = urlParams.get('verifyCode');
        const email = urlParams.get('email');

        const { password, confirmPassword } = values;

        try {
            const { data } = await newPassword({ email, password, confirmPassword, verificationCode });
            // Handle successful password reset
            toast.success("Successfully Password reset!", {
                theme: "colored",
                icon: "🚀",
                autoClose: 3000,
                position: "top-right",
            }); // Display success toast
            router.push('/auth/login');
        } catch (error) {
            // Handle password reset error
            if (error.status === 500) {
                toast.error('Server error. Please try again later.'); // Display server error toast
            } else {
                toast.error("Filed to Reset Password", {
                    theme: "colored",
                    icon: "❌",
                    autoClose: 3000,
                    position: "top-right",
                }) // Display generic error toast
            }
            setResErr(error);
        }
    };
    return(
        <>
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword:'',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                        await handleNewPassword(values);
                        setSubmitting(false);
                        resetForm();
                    } catch (error) {
                        if (error.status === 500) {
                            toast.error('Server error. Please try again later.');
                        } else {
                            toast.error('Failed to reset password.');
                        }
                        setResErr(error);
                    }
                }}
            >
                {({ isSubmitting, handleSubmit }) => (
                    <Form
                        onSubmit={handleSubmit}
                        className=" flex items-center justify-center"
                    >
                        <Card className="w-full lg:max-w-[640px] lg:[&>*]:w-full lg:[&>*]:p-16">
                            <h1 className="text-2xl font-bold dark:text-white md:text-3xl">
                                New Password
                            </h1>
                            <div className="mb-6 flex flex-col gap-y-3">
                                <Label htmlFor="password">Password</Label>
                                <div className={"relative"}>
                                    <Field
                                        id="password"
                                        name="password"
                                        placeholder="................"
                                        type={passwordVisible ? "text" : "password"}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-80 focus:border-orange-80 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-80 dark:focus:border-orange-80"
                                    />
                                    {passwordVisible ? (
                                        <FaEye
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
                                            onClick={togglePasswordVisibility}
                                        />
                                    ) : (
                                        <FaEyeSlash
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
                                            onClick={togglePasswordVisibility}
                                        />
                                    )}
                                </div>

                                <ErrorMessage name="password" component="div" className="invalid-feedback text-red-600" />
                            </div>
                            <div className="mb-6 flex flex-col gap-y-3">
                                <Label htmlFor="email">Comfirm Password</Label>
                                <div className={"relative"}>
                                    <Field
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder=".................."
                                        type={passwordVisible ? "text" : "password"}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-80 focus:border-orange-80 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-80 dark:focus:border-orange-80"
                                    />
                                    {passwordVisible ? (
                                        <FaEye
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
                                            onClick={togglePasswordVisibility}
                                        />
                                    ) : (
                                        <FaEyeSlash
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
                                            onClick={togglePasswordVisibility}
                                        />
                                    )}
                                </div>
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback text-red-600" />
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    className="w-full">
                                    <span>
                                <Spinner size={'md'} className={isLoading || isSubmitting ? 'block' : 'hidden'} />
                                <span className={'pl-3'}>
                                    Save  <i className="bi bi-check-all"></i>
                                </span>
                                </span>
                                </Button>
                            </div>
                        </Card>
                        <Lottie animationData={Bot} className="w-0 xl:w-64 absolute xl:right-64" data-aos="fade-right" />
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </>
    )
}