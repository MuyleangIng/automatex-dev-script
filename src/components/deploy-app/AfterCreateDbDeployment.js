import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Button, Dropdown, Select } from "flowbite-react";
import {HiInformationCircle,} from "react-icons/hi";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import CardDeploymentDb from './CardDeploymentDb';
import { DeploymentTypes } from '@/lib/enumTypes';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useLazyGetAllDeploymentDatabasesQuery } from '@/store/features/deploy-db/deployDbApiSlice';
import DeploymentAppLoadingIndicator from './deploymentLoading/DeploymentAppLoadingIndicator';
import HandlePagination from './HandlePagination';
import HandleContent from './HandleContent';
import SectionAppDeploy from '../SectionAppDeploy';

function AfterCreateDbDeployment() {
    const [fetchDb, { data,error, isLoading, isFetching}] = useLazyGetAllDeploymentDatabasesQuery({ skip: true })

    const [search, setSearch] = useState("")
    const [filters, setFilters] = useState({ page: 1, limit: 12, name: search })
    
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
        fetchDb({filters})
    },[fetchDb, filters])

    useEffect(() => {
        if (searchParams.has("appType")) {
            setFilters({ ...filters, appType: searchParams.get("appType") })
            if (searchParams.get("appType") === DeploymentTypes.db) {
                fetchDb({ skip: true })
            }
        }
    }, [searchParams])

    const onSearchChange = (e) => {
        setSearch(e.target.value.trim())
        setFilters({ ...filters, page: 1, name: e.target.value.trim() })
    }
    const onPageChange = ({ page, perPage }) => {
        setFilters({ ...filters, page, limit: perPage })
    }

    const appTypeSearch = (e) => {
        router.push(pathname + '?' + createQueryString('appType', e.target.value))
        setFilters({ ...filters, page: 1, appType: e.target.value })
    }
    return (
    
        <HandleContent 
            error={error}
            isLoading={isLoading}
            customLoadingContent={<DeploymentAppLoadingIndicator/>}> 
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

        {/* <CardDeploymentDb/> */}
        {isLoading || isFetching ? <DeploymentAppLoadingIndicator/> : (
            <div className=" container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-14">
                {data?.total === 0 && (
                    <div className="col-span-1 sm:col-span-2 lg:col-span-4 ">
                    <Alert color="gray" icon={HiInformationCircle}>
                        <span className="font-medium">No Database.</span> 
                        </Alert>
                    </div>
                )}
                
            {data?.list?.map((item, index) => (<CardDeploymentDb key={index} deployDb={item} fetchDb={fetchDb} />))}
        </div>
        )}

        {/* <div className="my-5">
                <HandlePagination
                    data={data}
                    isLoading={isLoading}
                    onPageChange={onPageChange}
                    defaultPerPage={12}
                    selectBg={"dark:bg-gray-900"}
                />
            </div> */}
        </HandleContent>
    
    );
    
}

export default AfterCreateDbDeployment;