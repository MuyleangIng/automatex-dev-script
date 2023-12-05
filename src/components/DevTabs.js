"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {MdOutlineDashboardCustomize, MdViewInAr} from "react-icons/md";
import {GrDeploy} from "react-icons/gr";
import {BsPersonCircle} from "react-icons/bs";

export default function DevTabs() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("/app/dashboard");
    const active = "text-cyan-600  border-b-2 border-blue-400"
    const paths = pathname.split("/").filter(el => el)

    const handleTabClick = (tabPath) => {
        setActiveTab(tabPath);
    };

    return (
        <>
            <ul className="max-w-xl mx-auto text-sm flex font-medium text-center text-gray-500 rounded-lg shadow dark:shadow-lg dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full">
                    <Link href={"/app/dashboard"}
                          className={" inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("dashboard") ? active : "")}
                          aria-current="page">
                        <MdOutlineDashboardCustomize  className="w-5 h-5 mr-2"/>
                        <span className={"hidden md:inline"}>Dashboard</span>
                    </Link>
                </li>
                <li className="w-full">
                    <Link href={"/app/deploy-apps"}
                          className={" inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("deploy-apps") ? active : "")}
                          aria-current="page">
                        <GrDeploy   className="w-5 h-5 mr-2"/>
                        <span className={"hidden md:inline"}>Deployment</span>
                    </Link>
                </li>
                <li className="w-full">
                    <Link href={"/app/useraccount"}
                          className={" inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("useraccount") ? active : "")}
                          aria-current="page">
                        <BsPersonCircle    className="w-5 h-5 mr-2"/>
                        <span className={"hidden md:inline"}>Account Setting</span>
                    </Link>
                </li>
            </ul>
        </>
    );
}
