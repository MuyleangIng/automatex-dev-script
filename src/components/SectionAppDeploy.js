import Link from "next/link";

export default function SectionAppDeploy(){
    return(
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 xl:text-3xl dark:text-white pb-8">
                    You Haven't added any apps yet
                </h2>

                <p className="block text-lg font-medium max-w-4xl mt-4 text-gray-500 dark:text-gray-300 pb-5">
                    This section displays all the application that you, as an individual user ,
                    <br/> have personally create .
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative inline-flex  group">
                        <div
                            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <Link href="/user/createDeployment" title="Get quote now"
                           className="relative inline-flex items-center justify-center px-8 py-4 text-md font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                           role="button">Frontend
                        </Link>
                    </div>

                    <div className="relative inline-flex  group">
                        <div
                            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <a href="#" title="Get quote now"
                           className="relative inline-flex items-center justify-center px-8 py-4 text-md font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                           role="button">Backend
                        </a>
                    </div>
                    <div className="relative inline-flex  group">
                        <div
                            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <a href="#" title="Get quote now"
                           className="relative inline-flex items-center justify-center px-8 py-4 text-md font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                           role="button">Database
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}