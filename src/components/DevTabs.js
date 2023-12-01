"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DevTabs() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("/app/dashboard");

    const handleTabClick = (tabPath) => {
        setActiveTab(tabPath);
    };

    return (
        <>
            <ul className="max-w-xl mx-auto text-sm flex font-medium text-center text-gray-500 rounded-lg shadow dark:shadow-lg dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full">
                    <Link
                        href={"/app/dashboard"}
                        onClick={() => handleTabClick("/app/dashboard")}
                        className={`inline-flex items-center justify-center p-4 text-cyan-600 border-b-2 ${
                            activeTab === "/app/dashboard"
                                ? "border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500"
                                : "border-transparent"
                        } rounded-t-lg`}
                        aria-current={activeTab === "/app/dashboard" ? "page" : undefined}
                    >
                        <svg
                            className="w-4 h-4 me-2 text-cyan-600 dark:text-cyan-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 18"
                        >
                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                        </svg>
                        Dashboard
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        href={"/app/deploy-apps"}
                        onClick={() => handleTabClick("/app/deploy-apps")}
                        className={`inline-flex items-center justify-center p-4 text-gray-400 border-b-2 ${
                            activeTab === "/app/deploy-apps"
                                ? "border-cyan-600 text-cyan-500 active dark:text-cyan-500 dark:border-cyan-500"
                                : "border-transparent"
                        } rounded-t-lg`}
                        aria-current={
                            activeTab === "/app/deploy-apps" ? "page" : undefined
                        }
                    >
                        <svg
                            className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                            <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                            <circle cx="15" cy="9" r="1" />
                        </svg>
                        Deployment
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        href={"/app/useraccount"}
                        onClick={() => handleTabClick("/app/useraccount")}
                        className={`inline-flex items-center justify-center p-4 text-gray-400 border-b-2 ${
                            activeTab === "/app/useraccount"
                                ? "border-cyan-600 text-cyan-500  active dark:text-cyan-500 dark:border-cyan-500"
                                : "border-transparent"
                        } rounded-t-lg`}
                        aria-current={
                            activeTab === "/app/useraccount" ? "page" : undefined
                        }
                    >
                        <svg
                            className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>{" "}
                        Account Setting
                    </Link>
                </li>
            </ul>
        </>
    );
}
