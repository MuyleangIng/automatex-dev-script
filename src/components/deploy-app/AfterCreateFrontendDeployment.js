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
import {useGetAllDeploymentAppsQuery} from "@/store/features/deploy-app/deploySlice";
import Image from "next/image";
import {FaGithubAlt, FaLink, FaPlus} from "react-icons/fa";
import {MdComment} from "react-icons/md";
import {IoGitBranchOutline, IoRocketOutline} from "react-icons/io5";
import {ImConnection} from "react-icons/im";
import {AiOutlineDisconnect} from "react-icons/ai";
import CardDeploymentApp from "@/components/deploy-app/CardDeploymentApp";

function AfterCreateFrontendDeployment(props) {
    const {data, isLoading} = useGetAllDeploymentAppsQuery({page: 1, limit: 15});
    console.log("data list", data?.list[0]);

    return (<>
        {/* Start Search */}
        <div className="flex flex-col-reverse sm:grid sm:grid-cols-6 items-center justify-between gap-3">
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
            <div className={"flex space-x-2 sm:col-span-2 lg:col-span-3 justify-end"}>

                <Button type={"button"} as={Link} href={"/app/deploy-apps"}>
                    <FaPlus className={"m-2"}/> New Deployment
                </Button>
            </div>
        </div>
        {/* End Search */}

        {/*loop the card component*/}
        <div className=" container grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-14">

             {data?.list?.map((item, index) => (
                <CardDeploymentApp key={index} deployApp={item}/>
             ))}


            {/*//     <Card as={Link} key={index} href={`/app/deploy-apps/${item.uuid}/resource/`}>*/}
            {/*//         <span>*/}
            {/*//          <div className={"float-right"}>*/}
            {/*//         <HiOutlineDotsHorizontal />*/}
            {/*//     </div>*/}
            {/*//         <div className="flex items-center space-x-4">*/}
            {/*//             <Image width={100} height={100} unoptimized={true}*/}
            {/*//                 className="h-10 w-10 rounded-full"*/}
            {/*//                 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"*/}
            {/*//                 alt="Jese Leos avatar"*/}
            {/*//             />*/}
            {/*//             <div className="font-medium dark:text-white">*/}
            {/*//                 <Badge color="purple" className="!inline">{item?.name}</Badge>*/}
            {/*//                 <div className="text-sm font-normal text-gray-500 dark:text-gray-400">*/}
            {/*//                     reactjs.kuberthy.me*/}
            {/*//                 </div>*/}
            {/*//             </div>*/}
            {/*//         </div>*/}
            {/*// </span>*/}
            {/*//         <p className="flex">*/}
            {/*//             Branch: <span className={"font-bold"}>master</span>*/}
            {/*//         </p>*/}
            {/*//     </Card>*/}
            {/*// ))}*/}
        </div>
    </>);
}

export default AfterCreateFrontendDeployment;