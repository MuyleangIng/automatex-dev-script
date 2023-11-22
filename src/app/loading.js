"use client"
import React from 'react';
import Lottie from "lottie-react";

function Loading(props) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <Lottie
                animationData={"GithubAim"}
                className={"w-64 md:w-72 lg:w-64 xl:w-96"}
            />
        </div>
    );
}

export default Loading;