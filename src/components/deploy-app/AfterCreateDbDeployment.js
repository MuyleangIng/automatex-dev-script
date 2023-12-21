import React from 'react';
import {Badge, Button, Card, Dropdown} from "flowbite-react";
import {
    HiArchive,
    HiCog,
    HiCurrencyDollar,
    HiDotsVertical,
    HiHeart,
    HiInbox,
    HiLogout,
    HiOutlineDotsHorizontal,
    HiOutlineTicket,
    HiShoppingBag,
    HiUserCircle,
    HiUsers,
    HiViewGrid
} from "react-icons/hi";
import Link from "next/link";
import {useGetAllDeploymentAppsQuery} from "@/store/features/deploy-app/deployAppApiSlice";
import Image from "next/image";
import {FaGithubAlt, FaLink, FaPlus} from "react-icons/fa";
import {MdComment} from "react-icons/md";
import {IoGitBranchOutline, IoRocketOutline} from "react-icons/io5";
import {ImConnection} from "react-icons/im";
import {AiOutlineDisconnect} from "react-icons/ai";
import CardDeploymentApp from "@/components/deploy-app/CardDeploymentApp";
import CardDeploymentDb from './CardDeploymentDb';

function AfterCreateDbDeployment({data }) {
    const { refetch } = useGetAllDeploymentAppsQuery(); // Destructure refetch from the hook result
    return (<>
        {/* Start Search */}
        <div className="grid grid-cols-6 gap-2">
            <div className={"col-span-5"}>
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
                        className="py-2 text-sm text-white dark:text-gray-100 dark:bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-full"
                        placeholder="Search..."
                    />
                </div>
            </div>
            <div className={"col-span-1"}>
                <Button size={"xs"} type={"button"} as={Link} href={"/app/deploy-apps"}>
                    <FaPlus className={"m-2"}/> <strong>New Deploy App</strong>
                </Button>
            </div>
        </div>
        {/* End Search */}

        {/*loop the card component*/}
        <div className=" container grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-14">

            {data?.list.map((item, index) => (
                <CardDeploymentDb key={index} deployApp={item} refetch={refetch}/>
            ))}
        </div>
    </>);
}

export default AfterCreateDbDeployment;