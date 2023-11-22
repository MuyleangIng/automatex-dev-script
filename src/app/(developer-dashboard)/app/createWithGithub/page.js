"use client"

import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { HiSearch } from 'react-icons/hi'; // Assuming you're using React Icons for search icon
import GithubAim from '../../../utils/assets/github.json';
import { ToggleSwitch } from 'flowbite-react';
import axios from 'axios'; // Import axios library


const SourceCodeDisplay = ({ sourceCode }) => {
    return (
        <div>
            <h2>Source Code</h2>
            <pre>{sourceCode}</pre>
        </div>
    );
};

export default function CreateWithGithubSection() {
    const [repositories, setRepositories] = useState([]);
    const [selectedRepo, setSelectedRepo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sourceCode, setSourceCode] = useState('');
    const [accessToken, setAccessToken] = useState(''); // Added state for access token
    const [switch1, setSwitch1] = useState(false);


    fetch('http://localhost:3002/api/github/token', {
        method: 'POST',
        // ... other options ...
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the data (e.g., store it in state or perform other actions)
            console.log('Received data:', data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
        });


// ... rest of your code ...

    const fetchGitHubRepositories = async (code) => {
        try {
            console.log('Code:', code);

            // Step 1: Get Access Token
            const authResponse = await axios.post('http://localhost:3002/api/github/token', { code });
            const newAccessToken = authResponse.data.access_token;
            console.log('Access Token:', newAccessToken);

            // Set the access token in state
            setAccessToken(newAccessToken);

            // Step 2: Fetch Repositories using the Access Token
            const repoResponse = await axios.get('https://api.github.com/user/repos', {
                headers: {
                    Authorization: `Bearer ${newAccessToken || accessToken}`, // Use `newAccessToken` if defined, otherwise fallback to `accessToken`
                },
            });

            // Log the Repo Response
            console.log('Repo Response:', repoResponse.data);

            // Set Repositories in your state or perform other actions with the data
            setRepositories(repoResponse.data);
        } catch (error) {
            // Handle Errors
            console.error('GitHub API Error:', error.message);

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Status Code:', error.response.status);
                console.error('Response Data:', error.response.data);
                setError(error.response.data.message || 'Failed to fetch repositories from GitHub');
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received from GitHub API:', error.request);
                setError('No response received from GitHub API');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up the GitHub API request:', error.message);
                setError('Failed to make the GitHub API request');
            }
        } finally {
            // Set Loading to false, whether the request succeeds or fails
            setLoading(false);
        }
    };

    const fetchRepoSourceCode = async (repo) => {
        try {
            // Fetch repository contents
            const response = await axios.get(`https://api.github.com/repos/${repo.full_name}/contents`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.status === 200) {
                const contents = response.data;

                // Log all file names for debugging
                console.log('File Names:', contents.map(file => file.name));

                // Find the first JavaScript file, you can modify this based on your needs
                const sourceFile = contents.find((file) => file.type === 'file' && file.name.endsWith('.js'));

                if (sourceFile) {
                    const sourceCodeResponse = await axios.get(sourceFile.download_url, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });

                    const code = sourceCodeResponse.data;
                    setSourceCode(code);
                } else {
                    setSourceCode('No JavaScript file found in the repository.');
                }
            } else {
                setError(`Failed to fetch repository contents. Status code: ${response.status}`);
            }
        } catch (error) {
            console.error('Error fetching repository contents or source code:', error);
            setError(`Error fetching repository contents or source code: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            fetchGitHubRepositories(code);
        }
    }, []);

    useEffect(() => {
        if (selectedRepo) {
            fetchRepoSourceCode(selectedRepo);
        }
    }, [selectedRepo, accessToken]);

    const handleImportClick = () => {
        if (selectedRepo) {
            console.log(`Importing repository: ${selectedRepo.full_name}`);
        }
    };



    return (
        <>
            <section className="flex items-center flex-1 w-full mb-2">
                <div className="flex flex-col w-full">
                    <h1 className="text-5xl font-extrabold text-center lg:text-5xl 2xl:text-3xl">
                    <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-orange-200 dark:via-indigo-300 dark:to-sky-500 animate-gradient ">
                        Choose to connect with
                    </span>
                        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                        Github
                    </span>
                    </h1>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 mb-20">
                <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-20 lg:py-16">
                    <div className="mx-auto w-full rounded-lg bg-slate-50 p-6 shadow dark:bg-gray-800 sm:max-w-xl sm:p-8 lg:col-span-6">
                        <h1 className="mb-2 text-2xl font-extrabold text-black dark:text-white">
                            Import Git Repository
                        </h1>
                        <form className="mt-4 space-y-6 sm:mt-6" action="#">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="grid grid-cols-1 gap-2">
                                    <Select
                                        id="repositories"
                                        defaultValue="Select a Repository"
                                        onChange={(e) => {
                                            const selected = repositories.find((repo) => repo.full_name === e.target.value);
                                            setSelectedRepo(selected);
                                        }}
                                    >
                                        <option disabled>Select a Repository</option>
                                        {repositories.map((repo) => (
                                            <option key={repo.id} value={repo.full_name}>
                                                {repo.full_name}
                                            </option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                    <Label htmlFor="search-bar" className="sr-only">
                                        Search
                                    </Label>
                                    <TextInput
                                        icon={HiSearch}
                                        id="search-bar"
                                        placeholder="Search"
                                        type="search"
                                        className="[&_input]:py-2 [&_input]:!pl-10 mr-2 block"
                                    />
                                    <HiSearch className="h-5 w-5 md:hidden dark:text-gray-400 mr-3" />
                                </div>
                            </div>
                            {selectedRepo && (
                                <>
                                    <SourceCodeDisplay sourceCode={sourceCode} />
                                    <Button
                                        type="button"
                                        onClick={handleImportClick}
                                        className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                    >
                                        Import
                                    </Button>
                                </>
                            )}

                            {repositories.map((repo) => (
                                <div
                                    key={repo.id}
                                    className="min-w-full bg-white dark:bg-gray-600 divide-y rounded-lg divide-gray-200 dark:divide-gray-600"
                                >
                                    <div className="flex items-center justify-between space-x-6 p-4 lg:mr-0">
                                        <div className="flex items-center space-x-6 whitespace-nowrap">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={repo.owner.avatar_url}
                                                alt={`${repo.owner.login} avatar`}
                                            />
                                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                <div className="text-base font-semibold text-gray-900 dark:text-white">
                                                    {repo.full_name}
                                                </div>
                                                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                                {repo.private ? 'private' : 'public'}
                                            </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                type="button"
                                                className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                            >
                                                Import
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </form>
                    </div>
                    <div className="mr-auto place-self-center lg:col-span-6">
                        <Lottie
                            animationData={GithubAim}
                            className="w-44 md:w-48 lg:w-44 xl:w-72 relative left-24 md:left-20 lg:left-40 "
                        />
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 pb-20">
                <div className="grid lg:h-full ">
                    <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
                        <form
                            className="w-full space-y-4 md:space-y-6 xl:max-w-5xl"
                            action="#"
                        >    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            AutomateX Deploys
                        </h2>
                            <div className="flex items-center">
                                <p className="font-medium text-gray-500 sm:text-lg dark:text-gray-300">We reached here with our hard work hand and dedication</p>
                            </div>
                            <div className="flex items-center">
                                <p className="font-bold text-black sm:text-lg dark:text-gray-300">Enable Automate deploy from automateX trigger </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 ">
                                <button
                                    className="w-full group xl:h-28 px-2 border-2 border-cool-blue-80 rounded-xl transition duration-300 hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-orange-50 active:dark:bg-gray-800">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <svg className="w-28  xl:w-10" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 25 25" viewBox="0 0 25 25" id="git"><g fill="#583689"><path d="M4.711 13.689c-2.327 0-4.22-1.894-4.22-4.223s1.893-4.223 4.22-4.223 4.22 1.895 4.22 4.223-1.893 4.223-4.22 4.223zm0-6.446c-1.224 0-2.22.997-2.22 2.223s.996 2.223 2.22 2.223 2.22-.997 2.22-2.223-.996-2.223-2.22-2.223zM5.247 24.432c-2.767 0-4.935-1.54-4.935-3.506s2.168-3.507 4.935-3.507c2.768 0 4.936 1.541 4.936 3.507s-2.168 3.506-4.936 3.506zm0-5.013c-1.68 0-2.935.795-2.935 1.507 0 .711 1.255 1.506 2.935 1.506s2.936-.795 2.936-1.506c0-.712-1.256-1.507-2.936-1.507z"></path><path d="m5.217 19.353c-1.73-.734-2.728-1.775-2.964-3.094-.392-2.189 1.551-4.088 1.773-4.298l1.369 1.457-.685-.729.688.727c-.36.343-1.351 1.539-1.176 2.495.111.61.708 1.149 1.775 1.601z"></path><path d="m7.092 5.896h2.295v2h-2.295z" transform="rotate(-34.699 8.239 6.896)"></path><path d="m12.296 6.959h2v9.311h-2z"></path></g><path fill="#de002a" d="m13.296 4.781c-.945 0-1.715-.77-1.715-1.716s.77-1.716 1.715-1.716c.946 0 1.716.77 1.716 1.716s-.77 1.716-1.716 1.716zm0-2c-.156 0-.284.127-.284.284s.128.284.284.284c.157 0 .285-.127.285-.284 0-.156-.128-.284-.285-.284z"></path><path fill="#583689" d="m23.312 17.27h-1.333c-2.184 0-3.96-1.777-3.96-3.962v-9.168h2v9.168c0 1.082.879 1.962 1.96 1.962h1.333z"></path><path fill="#583689" d="m17.231 6.3h5.007v2h-5.007z"></path></svg>
                                        <div className="flex flex-col ml-2 leading-4 text-left md:ml-3 p-2">
                                            <span className="text-sm font-light text-black dark:text-gray-300">"Every Time you push to this branch, a new version of the app is automatically destroy. Ensure the branch is always <br/> in a deployable state and tests have passed before pusing"</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="flex items-center">
                                <p className="font-bold text-black sm:text-lg dark:text-gray-300">Choose Branch to deploy  </p>
                            </div>
                            <div className="flex items-center">
                                <div className="grid grid-cols-1 gap-2">
                                    <Select id="countries" defaultValue="Repository name">
                                        <option disabled>Repository Name</option>
                                        <option value="US">Repository Name</option>
                                        <option value="CA">Master</option>
                                        <option value="FR">Main</option>
                                        <option value="DE">Germany</option>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className="font-bold text-gray-900 sm:text-lg dark:text-gray-300">Only enable this option if you have a CI service configuration on your repo</p>
                            </div>
                            <div className="flex max-w-md flex-col gap-4">
                                <ToggleSwitch checked={switch1} label="Enable Automate Deploy" onChange={setSwitch1} />
                            </div>
                            <div className="flex items-center my-5">
                                <Button color="dark">Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );

}