"use client"
import React from 'react';
import Link from "next/link";
import {FaClipboardList} from "react-icons/fa";
import {BsFillChatRightDotsFill, BsFillFileEarmarkBarGraphFill, BsPatchCheckFill} from "react-icons/bs";
import {VscLayersActive, VscSettings, VscSourceControl} from "react-icons/vsc";
import {usePathname} from "next/navigation";
import {MdDashboard, MdViewInAr} from "react-icons/md";
import {GrAction, GrDeploy, GrResources} from "react-icons/gr";
import {AiOutlineDeploymentUnit} from "react-icons/ai";
import {TbLockAccess, TbSettingsBolt} from "react-icons/tb";

function NavTab(props) {
    const pathname = usePathname()
    const active = "text-cyan-600  border-b-2 border-blue-400"
    const paths = pathname.split("/").filter(el => el)
    return (
        <>
            <div className={"bg-opacity-75 dark:bg-opacity-75 bg-white dark:bg-gray-900 dark:text-white flex justify-center sticky top-[55px] left-0 z-40"}>
                <div className="border-b border-gray-200 dark:border-gray-700 ">
                    <ul className="flex lg:justify-center  text-sm font-medium text-center text-gray-500 dark:text-gray-400 overflow-x-auto ">
                        <li>
                            <Link href={"/app/deploy-apps/id/overview"}
                                  className={" inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("overview") ? active : "")}
                                  aria-current="page">
                                <MdViewInAr className="w-5 h-5 mr-2"/>
                                <span className={"hidden md:inline"}>Overview</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/app/deploy-apps/id/resource"}
                                  className={"inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("resource") ? active : "")
                                  }>
                                <VscSourceControl   className="w-5 h-5 mr-2"/>
                                <span className={"hidden md:inline"}>Resource</span>
                            </Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link href={"/app/deploy-apps/id/deployment"}*/}
                        {/*          className={"inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("deployment") ? active : "")}>*/}
                        {/*        <AiOutlineDeploymentUnit   className="w-5 h-5 mr-2"/>*/}
                        {/*        <span className={"hidden md:inline"}>Deployment</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li>
                            <Link href={"/app/deploy-apps/id/activities"}
                                  className={"inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("activities") ? active : "")}>
                                <VscLayersActive   className="w-5 h-5 mr-2"/>
                                <span className={"hidden md:inline"}>Activities</span>

                            </Link>
                        </li>
                        <li>
                            <Link href={"/app/deploy-apps/id/access"}
                                  className={"inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("access") ? active : "")}>
                                <TbLockAccess  className="w-5 h-5 mr-2"/>
                                <span className={"hidden md:inline"}>Access</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/app/deploy-apps/id/setting"}
                                  className={"inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("setting") ? active : "")}>
                                <TbSettingsBolt  className="w-5 h-5 mr-2"/>
                                <span className={"hidden md:inline"}>Settings</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavTab;