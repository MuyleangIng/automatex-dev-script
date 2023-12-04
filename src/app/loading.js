"use client"
import React from 'react';
import Lottie from "lottie-react";
import Aim from "@/app/utils/assets/loading.json";

function Loading() {
    return (
        <div className="grid place-items-center min-h-screen">
            <Lottie
                animationData={Aim}
                className="w-60"
            />
        </div>
    );
}

export default Loading;