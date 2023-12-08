'use client'
import React, { useEffect } from 'react';
import { Button } from 'flowbite-react';
import {useRouter, useSearchParams} from "next/navigation";
import {useVerifyEmailMutation} from "@/store/features/auth/authApiSlice";
import Lottie from "lottie-react";
import Spaces from "@/app/utils/assets/mail.json";


const AXVerify = () => {
    const router = useRouter();
    const queries = useSearchParams();
    const email = queries.get('email');
    const verifyCode = queries.get('verifyCode');
    const [verifyEmail, { data, error }] = useVerifyEmailMutation();

    useEffect(() => {

        verifyEmail({ email, verifyCode: verifyCode });
    }, [email, verifyCode, verifyEmail]);



    return (
        <section className="max-w-screen-xl mx-auto px-5 xl:px-0">
            <div className="flex flex-col h-screen gap-y-2 items-center justify-center">
                <Lottie
                    animationData={Spaces}
                    className="w-80"
                    data-aos="fade-right"
                />
                <h1 className="text-2xl font-bold tracking-tight text-blue-700 text-center dark:text-blue-100 capitalize">
                    Verified successfully
                </h1>
                <p className="tracking-tight text-gray-500 text-center dark:text-blue-300">
                    Welcome to AutomateX, please click the button below to fill in your Information
                </p>
                <Button type="submit" className="w-20 my-4" pill onClick={() => router.push('/auth/login')}>
                    Next
                </Button>
            </div>
        </section>
    );
};
export default AXVerify;