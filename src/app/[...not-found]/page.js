"use client"

import Lottie from "lottie-react";
import Aim from "../../app/utils/assets/404.json";
import {Button} from "flowbite-react";
import Link from "next/link";

export default function NotFoundPage(){
    return(
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto max-w-screen-sm text-center">
                    <Lottie
                        animationData={Aim}
                        className="w-100"
                    />
                    <h1 className="mb-4 text-2xl font-extrabold text-primary-600 dark:text-primary-500">
                        404 Not Found
                    </h1>
                    <p className="mb-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                        Whoops! That page doesn’t exist.
                    </p>
                    <div className="flex justify-center">
                        <Button as={Link} href={"/"} color="info" type="submit" className="w-1/2">
                            Back Home
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}