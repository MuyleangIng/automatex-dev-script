'use client'
import React, {useEffect, useState} from 'react';
import SectionAppDeploy from "@/components/SectionAppDeploy";
import AfterCreateFrontendDeployment from "@/components/deploy-app/AfterCreateFrontendDeployment";
import {useLazyGetAllDeploymentAppsQuery} from "@/store/features/deploy-app/deployAppApiSlice";
import HandleContent from "@/components/deploy-app/HandleContent";
import DeploymentAppLoadingIndicator from "@/components/deploy-app/deploymentLoading/DeploymentAppLoadingIndicator";
import HandlePagination from "@/components/deploy-app/HandlePagination";
import {Button, Select} from "flowbite-react";
import {DeploymentTypes} from "@/lib/enumTypes";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";

function Page() {
    const [fetchAllDeployment,{ data, error, isError, isLoading, isFetching}] = useLazyGetAllDeploymentAppsQuery({ preferCacheValue: true});
    const [search, setSearch] = useState("")
    const [filters, setFilters] = useState({page: 1, limit: 12, name: search})

    useEffect(()=>{
        console.log("filter",filters)
        fetchAllDeployment({filters})
    },[fetchAllDeployment, filters])
    const onPageChange = ({page, perPage}) => {
        setFilters({...filters, page, limit: perPage})
    }

    const appTypeSearch = (e) => {
        setFilters({...filters,page: 1, appType: e.target.value})
    }
    const onSearchChange = (e) => {
        setSearch(e.target.value.trim())
        setFilters({...filters, page: 1, name: e.target.value.trim()})
    }
    return (
        <HandleContent
            error={error}
            isLoading={isLoading}
            customLoadingContent={<DeploymentAppLoadingIndicator/>}
        >
            <div className={"m-14 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"}>
                {data?.total === 0 && filters.name === '' ? <SectionAppDeploy/> : (
                    <>
                        {/* Start Search */}
                        <div className="grid grid-cols-6 gap-2">
                            <div className={"col-span-4"}>
                                <div className={"grid grid-cols-4 gap-2"}>
                                    <div class="col-span-3">
                                        <div
                                            className="relative text-gray-600 focus-within:text-gray-400 w-full sm:w-auto sm:col-span-4 lg:col-span-3">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                 strokeWidth="2"
                                                 viewBox="0 0 24 24" className="w-6 h-6">
                                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </button>
                                    </span>
                                            <input
                                                id="searchInput"
                                                type="text"
                                                autoComplete="off"
                                                value={search}
                                                className="py-2 w-full text-sm text-white dark:text-gray-100 dark:bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 "
                                                placeholder="Search 3 chars..."
                                                onChange={onSearchChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-span-1">
                                        <Select
                                            id="appType"
                                            name="appType"
                                            value={filters?.appType}
                                            onChange={appTypeSearch}
                                        >
                                            <option value={""}>All AppType</option>
                                            <option value={DeploymentTypes.fe}>{DeploymentTypes.fe}</option>
                                            <option value={DeploymentTypes.be}>{DeploymentTypes.be}</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-span-2 justify-self-end"}>
                                <Button size={"xs"} type={"button"} as={Link} href={"/app/deploy-apps"}>
                                    <FaPlus className={"m-2"}/> <strong>New Deploy App</strong>
                                </Button>
                            </div>
                        </div>
                        {/* End Search */}
                        {isLoading || isFetching ? <DeploymentAppLoadingIndicator/> : <AfterCreateFrontendDeployment data={data}/>}
                    </>
                    )}
            </div>
            <div className="my-5">
                <HandlePagination
                    data={data}
                    isLoading={isLoading}
                    onPageChange={onPageChange}
                    defaultPerPage={12}
                    selectBg={"dark:bg-gray-900"}
                />
            </div>
        </HandleContent>
    );
}

export default Page;