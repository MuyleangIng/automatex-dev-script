import React from 'react';

function DeployMethod(props) {
    return (<>
            <h2 className="text-xl py-8 font-bold text-cyan-500 dark:text-white">
                Deployment Method:
            </h2>
            <div className="grid grid-cols-2 p-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                <button
                    className="w-full group h-20 px-2 border-2 border-gray-200 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800">
                    <div className="relative flex items-center space-x-4 justify-center">
                        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 25 25"
                             viewBox="0 0 25 25" id="git">
                            <g fill="#583689">
                                <path
                                    d="M4.711 13.689c-2.327 0-4.22-1.894-4.22-4.223s1.893-4.223 4.22-4.223 4.22 1.895 4.22 4.223-1.893 4.223-4.22 4.223zm0-6.446c-1.224 0-2.22.997-2.22 2.223s.996 2.223 2.22 2.223 2.22-.997 2.22-2.223-.996-2.223-2.22-2.223zM5.247 24.432c-2.767 0-4.935-1.54-4.935-3.506s2.168-3.507 4.935-3.507c2.768 0 4.936 1.541 4.936 3.507s-2.168 3.506-4.936 3.506zm0-5.013c-1.68 0-2.935.795-2.935 1.507 0 .711 1.255 1.506 2.935 1.506s2.936-.795 2.936-1.506c0-.712-1.256-1.507-2.936-1.507z"></path>
                                <path
                                    d="m5.217 19.353c-1.73-.734-2.728-1.775-2.964-3.094-.392-2.189 1.551-4.088 1.773-4.298l1.369 1.457-.685-.729.688.727c-.36.343-1.351 1.539-1.176 2.495.111.61.708 1.149 1.775 1.601z"></path>
                                <path d="m7.092 5.896h2.295v2h-2.295z" transform="rotate(-34.699 8.239 6.896)"></path>
                                <path d="m12.296 6.959h2v9.311h-2z"></path>
                            </g>
                            <path fill="#de002a"
                                  d="m13.296 4.781c-.945 0-1.715-.77-1.715-1.716s.77-1.716 1.715-1.716c.946 0 1.716.77 1.716 1.716s-.77 1.716-1.716 1.716zm0-2c-.156 0-.284.127-.284.284s.128.284.284.284c.157 0 .285-.127.285-.284 0-.156-.128-.284-.285-.284z"></path>
                            <path fill="#583689"
                                  d="m23.312 17.27h-1.333c-2.184 0-3.96-1.777-3.96-3.962v-9.168h2v9.168c0 1.082.879 1.962 1.96 1.962h1.333z"></path>
                            <path fill="#583689" d="m17.231 6.3h5.007v2h-5.007z"></path>
                        </svg>
                        <div className="flex flex-col ml-2 leading-4 text-left md:ml-3 p-2">
                            <span className="text-base font-semibold text-black dark:text-gray-300">AutomateX git</span>
                            <span className=" font-light text-black dark:text-gray-300">
                                            use AutomateX cli
                                        </span>
                        </div>
                    </div>
                </button>
                <button
                    className="w-full group h-20 px-2 border-2 border-gray-200 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800">
                    <div className="relative flex items-center space-x-4 justify-center">
                        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="zip-file">
                            <path fill="#5aaae7"
                                  d="M13 51H43v6a4 4 0 0 0 8 0V43H13zM55 3H17.11A4.11 4.11 0 0 0 13 7.11V21H51V7A4 4 0 0 1 55 3z"></path>
                            <path fill="#78b9eb" d="M43,57V51H5v6a4,4,0,0,0,4,4H47a3.995,3.995,0,0,1-4-4Z"></path>
                            <path fill="#1e81ce" d="M55,3a4,4,0,0,0-4,4v6h8V7a3.995,3.995,0,0,0-4-4Z"></path>
                            <polygon fill="#ff9478"
                                     points="51 21 13 21 9 21 9 43 13 43 51 43 55 43 55 21 51 21"></polygon>
                            <path fill="#fff"
                                  d="M40,26H36a1,1,0,0,0-1,1V38h2V33h3a3,3,0,0,0,3-3V29A3,3,0,0,0,40,26Zm1,4a1,1,0,0,1-1,1H37V28h3a1,1,0,0,1,1,1Z"></path>
                            <rect width="2" height="12" x="31" y="26" fill="#fff"></rect>
                            <path fill="#fff"
                                  d="M28.9,27.447A1,1,0,0,0,28,26H22v2h4.382l-4.277,8.553A1,1,0,0,0,23,38h6V36H24.618Z"></path>
                        </svg>
                        <div className="flex flex-col ml-2 leading-4 text-left md:ml-3 p-2">
                            <span className="text-base font-semibold text-black dark:text-gray-300">Source Code</span>
                            <span className=" font-light text-black dark:text-gray-300">
                                           drops your zip file
                                        </span>
                        </div>
                    </div>
                </button>
                <button
                    className="w-full group h-20 px-2 border-2 border-gray-200 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800">
                    <div className="relative flex items-center space-x-4 justify-center">
                        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github">
                            <path
                                d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                        </svg>
                        <div className="flex flex-col ml-2 leading-4 text-left md:ml-3 p-2">
                            <span className="text-base font-semibold text-black dark:text-gray-300">GitHub</span>
                            <span className=" font-light text-black dark:text-gray-300">
                                            connect to github
                                        </span>
                        </div>
                    </div>
                </button>
                <button
                    className="w-full group h-20 px-2 border-2 border-gray-200 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800">
                    <div className="relative flex items-center space-x-4 justify-center">
                        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                             viewBox="0 0 24 24" id="gitlab">
                            <polygon fill="#E24329" points="12 23.054 16.419 9.453 7.581 9.453 12 23.054"></polygon>
                            <polygon fill="#C53A24" points="12 9.453 7.581 9.453 12 23.054 12 9.453"></polygon>
                            <polygon fill="#FC6D26" points="12 23.054 7.581 9.453 1.388 9.453 12 23.054"></polygon>
                            <path fill="#FCA326"
                                  d="M1.388,9.453l-1.343,4.133c-0.123,0.377,0.012,0.79,0.332,1.023L12,23.054L1.388,9.453L1.388,9.453z"></path>
                            <path fill="#E24329"
                                  d="M1.388,9.453h6.193L4.919,1.262c-0.136-0.421-0.732-0.421-0.87,0L1.388,9.453L1.388,9.453z"></path>
                            <polygon fill="#DB5F21" points="4.484 9.453 1.388 9.453 4.484 13.422 4.484 9.453"></polygon>
                            <path fill="#DB8E21"
                                  d="M1.388,9.453l-1.343,4.133c-0.123,0.377,0.012,0.79,0.332,1.023l4.107,2.984v-4.171L1.388,9.453L1.388,9.453z"></path>
                            <path fill="#C53A24"
                                  d="M4.484,0.946c-0.183,0-0.367,0.105-0.436,0.316L1.388,9.453h3.097L4.484,0.946L4.484,0.946L4.484,0.946z"></path>
                            <polygon fill="#FC6D26" points="12 23.053 16.419 9.453 22.612 9.453 12 23.053"></polygon>
                            <path fill="#FCA326"
                                  d="M22.612,9.453l1.343,4.133c0.123,0.377-0.012,0.79-0.332,1.023L12,23.054L22.612,9.453L22.612,9.453z"></path>
                            <path fill="#E24329"
                                  d="M22.612,9.453h-6.193l2.662-8.191c0.137-0.421,0.733-0.421,0.87,0L22.612,9.453L22.612,9.453z"></path>
                            <polygon fill="#DB5F21"
                                     points="19.581 9.453 16.419 9.453 12 23.053 19.581 13.338 19.581 9.453"></polygon>
                            <polygon fill="#DB8E21"
                                     points="19.581 13.339 12 23.054 19.581 17.546 19.581 13.339"></polygon>
                            <path fill="#C53A24"
                                  d="M19.516,0.946c-0.183,0-0.366,0.105-0.435,0.316l-2.662,8.191h3.162V0.951C19.559,0.948,19.537,0.946,19.516,0.946L19.516,0.946z"></path>
                        </svg>
                        <div className="flex flex-col ml-2 leading-4 text-left md:ml-3 p-2">
                            <span className="text-base font-semibold text-black dark:text-gray-300">Gitlab</span>
                            <span className=" font-light text-black dark:text-gray-300">
                                            connect to gitlab
                                        </span>
                        </div>
                    </div>
                </button>
            </div>
        </>);
}

export default DeployMethod;