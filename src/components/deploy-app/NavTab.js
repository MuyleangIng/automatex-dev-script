"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {VscLayersActive, VscSourceControl} from "react-icons/vsc";
import {usePathname} from "next/navigation";
import {MdViewInAr} from "react-icons/md";
import {TbLockAccess, TbSettingsBolt, TbReport} from "react-icons/tb";
import {useDispatch, useSelector} from "react-redux";
import {
    addDeploymentApp,
    selectDeploymentApp,
    setError,
    setIsLoading
} from "@/store/features/deploy-app/deployAppSlice";
import {useLazyGetSingleDeploymentQuery} from "@/store/features/deploy-app/deployAppApiSlice";


function NavTab(props) {
    const dispatch = useDispatch()
    const deploy = useSelector(selectDeploymentApp)
    const pathname = usePathname()
    const active = "text-cyan-600  border-b-2 border-blue-400"
    const paths = pathname.split("/").filter(el => el)
    const [uuid, setUuid] = useState(deploy?.uuid || props.uuid)
    const [fetchDeployment, {data, isLoading,isFetching,error}] = useLazyGetSingleDeploymentQuery(uuid);
    useEffect(() => {
        fetchDeployment(props.uuid)
        setUuid(props.uuid)
        dispatch(addDeploymentApp(data))
        dispatch(setIsLoading(isLoading))
        dispatch(setError(error))
    }, [fetchDeployment,data])

    return (
        <>
            <div className={"bg-opacity-75 dark:bg-opacity-75 bg-white dark:bg-gray-900 dark:text-white flex justify-center sticky top-[55px] left-0 z-40"}>
                <div className="border-b border-gray-200 dark:border-gray-700 ">
                    <ul className="flex lg:justify-center  text-sm font-medium text-center text-gray-500 dark:text-gray-400 overflow-x-auto ">
                        <li>
                            <Link href={`/app/deploy-apps/${uuid}/overview`}
                                  className={" inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("overview") ? active : "")}
                                  aria-current="page">
                                <MdViewInAr className="w-5 h-5 mr-2"/>
                                <span className={"hidden md:inline"}>Overview</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/app/deploy-apps/${uuid}/resource`}
                                  className={"inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("resource") ? active : "")
                                  }>
                                <VscSourceControl   className="w-5 h-5 mr-2"/>
                                <span className={"hidden md:inline"}>Resource</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/app/deploy-apps/${uuid}/activities`}
                                  className={"inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("activities") ? active : "")}>
                                <VscLayersActive   className="w-5 h-5 mr-2"/>
                                <span className={"hidden md:inline"}>Activities</span>

                            </Link>
                        </li>
                        <li>
                            <Link href={`/app/deploy-apps/${uuid}/access`}
                                  className={"inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("access") ? active : "")}>
                                <TbLockAccess  className="w-5 h-5 mr-2"/>
                                <span className={"hidden md:inline"}>Access</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/app/deploy-apps/${uuid}/report`}
                                  className={"inline-flex p-4 rounded-t-lg group text-base " + (paths.includes("report") ? active : "")}>
                                <TbReport  className="w-5 h-5 mr-2"/>
                                <span className={"hidden md:inline"}>Report</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/app/deploy-apps/${uuid}/setting`}
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