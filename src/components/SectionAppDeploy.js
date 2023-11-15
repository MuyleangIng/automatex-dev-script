
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

                <div className="mt-6">
                    <a href="#" className="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900  rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">

                        <span className="mx-2">
                    Frontend
                </span>
                    </a>

                    <a href="#"
                       className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 dark:hover:bg-gray-700 focus:ring focus:ring-blue-300 focus:ring-opacity-80">

                        <span class="mx-2">
                    Backend
                </span>
                    </a>
                    <a href="#"
                       className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 dark:hover:bg-gray-700 focus:ring focus:ring-blue-300 focus:ring-opacity-80">

                        <span className="mx-2">
                    Database
                </span>
                    </a>
                </div>
            </div>
        </section>
    )
}