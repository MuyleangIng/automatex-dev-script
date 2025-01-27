'use client'
import React, {useCallback, useEffect, useState} from 'react';
import SectionAppDeploy from "@/components/SectionAppDeploy";
import AfterCreateFrontendDeployment from "@/components/deploy-app/AfterCreateFrontendDeployment";
import {useLazyGetAllDeploymentAppsQuery} from "@/store/features/deploy-app/deployAppApiSlice";
import HandleContent from "@/components/deploy-app/HandleContent";
import DeploymentAppLoadingIndicator from "@/components/deploy-app/deploymentLoading/DeploymentAppLoadingIndicator";
import HandlePagination from "@/components/deploy-app/HandlePagination";
import {Button, Dropdown, Select} from "flowbite-react";
import {DeploymentTypes} from "@/lib/enumTypes";
import Link from "next/link";
import {FaPlus, FaUser} from "react-icons/fa";
import AfterCreateDbDeployment from '@/components/deploy-app/AfterCreateDbDeployment';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ToastConfig from "@/components/deploy-app/deploymentLoading/ToastConfig";


function Page() {
    const [fetchAllDeployment,{ data, error, isError, isLoading, isFetching}] = useLazyGetAllDeploymentAppsQuery({ preferCacheValue: true});
    const [search, setSearch] = useState("")
    const [filters, setFilters] = useState({page: 1, limit: 12, name: search})
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name, value) => {
          const params = new URLSearchParams(searchParams)
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )
      useEffect(()=>{
        if(searchParams.has("appType")){
            setFilters({...filters,appType: searchParams.get("appType")})
            
        }
    },[searchParams])

    useEffect(()=>{
        fetchAllDeployment({filters})
    },[fetchAllDeployment, filters])
    
    const onPageChange = ({page, perPage}) => {
        setFilters({...filters, page, limit: perPage})
    }

    const appTypeSearch = (e) => {
        router.push(pathname + '?' + createQueryString('appType', e.target.value))
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
            <ToastConfig/>

            <div className={"m-4 md:m-8 lg:m-12 xl:m-16 2xl:m-20 p-2 md:p-4 lg:p-6 xl:p-8 2xl:p-10 border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700"}>
                {data?.total === 0 && filters.name === '' ?( filters.appType == DeploymentTypes.db ? (<AfterCreateDbDeployment/>) :<SectionAppDeploy/> ): (
                    <>
                        {/* Start Search */}
                        <div className="grid grid-cols-2 xl:grid-cols-6 gap-2">
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
                                            <option value={DeploymentTypes.db}>{DeploymentTypes.db}</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-span-2 justify-self-end"}>
                                <Dropdown className="hover-icon" label={<><FaPlus className="mr-2"/> New App</>}>
                                    <Dropdown.Item as={Link} href={"/app/deploy-apps"}>Frontend</Dropdown.Item>
                                    <Dropdown.Item as={Link} href={"/app/deploy-apps"}>Backend</Dropdown.Item>
                                    <Dropdown.Item as={Link} href={"/app/deploy-db/create-db"}>Database</Dropdown.Item>
                                </Dropdown>
                            </div>

                        </div>
                        {/* End Search */}
                        {isLoading || isFetching ? <DeploymentAppLoadingIndicator/> : <AfterCreateFrontendDeployment data={data} isLoading={isLoading} isFetching={isFetching}/>}
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