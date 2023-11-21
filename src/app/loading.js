"use client"

import Lottie from "lottie-react";
import GithubAim from "@/app/utils/assets/loading.json";
import React, from "react";


export default function Loading(){


    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <Lottie
                animationData={GithubAim}
                className="w-64 md:w-72 lg:w-64 xl:w-96"
            />
        </div>
    )
}