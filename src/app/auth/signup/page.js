'use client'

import React, {useEffect} from 'react';
import SignUpForm from "@/app/auth/signup/components/SignUp";
import {redirect} from "next/navigation";
import {useSession} from "next-auth/react";

function SignUpPage() {
    const {data: session,status } = useSession()

    useEffect(() => {
        if (session) {
            redirect("/")
        }
    }, [session, status]);
    return (
        <div className="">
            <SignUpForm/>
        </div>
    );
}

export default SignUpPage;