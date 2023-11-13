import React from "react";


export default function StartBuildingSection(){
    return(
        <>
            {/*Hero Section with text*/}
            <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center mt-40">
                <h1 className="mb-8 text-4xl font-extrabold  text-gray-900 md:text-6xl md:tracking-tight">
                    <span>Start</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Automate X</span> <span>Build the better Runtime Product</span>
                </h1>
                <p className="px-0 text-lg text-gray-600 md:text-xl lg:px-24 mb-20">
                    Start gaining the traction you've always wanted with our next-level templates and designs. Crafted to help you tell your story.
                </p>
            </div>



            {/*Grid of card list*/}
            <h2 className="max-w-lg mb-6 text-center text-3xl font-extrabold text-orange-100 sm:text-4xl md:mx-auto block whitespace-nowrap">
                PROJECT KICKSTARTS
            </h2>
            <div className="container relative z-40 mx-auto mt-20 mb-20">
                <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">

                    <a href="#" className="block w-1/2 py-10 text-center border-0 bg-gray-50 lg:w-96">
                        <div className="flex items-center justify-center">
                            <img src="/images/mongodb.png" className="block mx-auto" alt="Portfolio" />
                        </div>
                    </a>

                    <a href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
                        <div>
                            <img src="https://redpixelthemes.com/assets/images/icon-blog-green.svg" className="block mx-auto" alt="Blog" />

                        </div>
                    </a>

                    <a href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
                        <div>
                            <img src="https://redpixelthemes.com/assets/images/icon-ecommerce-green.svg" className="block mx-auto" alt="Ecommerce" />

                        </div>
                    </a>

                    <a href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
                        <div>
                            <img src="https://redpixelthemes.com/assets/images/icon-startup-green.svg" className="block mx-auto" alt="Startup" />

                        </div>
                    </a>


                </div>
            </div>
        </>

    )
}