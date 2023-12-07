"use client"

import React, {useState} from 'react';
import Lottie from "lottie-react";
import Spaces from "@/app/utils/assets/mail.json";


function Page() {
    const [email, setEmail] = useState("");
    return (
        <>
            <section className="max-w-screen-xl mx-auto px-5 xl:px-0">
                <div className="flex flex-col h-screen gap-y-2 items-center justify-center">
                    <Lottie
                        animationData={Spaces}
                        className="mx-auto hidden lg:flex w-80"
                        data-aos="fade-right"
                    />
                    <h1 className="text-2xl capitalize font-bold tracking-tight text-orange-80 text-center dark:text-orange-80">
                        You successfully registered
                    </h1>
                    <p className="tracking-tight text-lg text-gray-600 text-center dark:text-blue-300 mx-72">
                        Welcome to AutomateX A confirmation email has been sent to {email.email},
                        please click on the confirmation link in the email to activate your account.
                    </p>
                </div>
            </section>

        </>
    );
}

export default Page;