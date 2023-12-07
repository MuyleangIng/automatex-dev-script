import React from 'react';
import {Card, Dropdown} from "flowbite-react";
import {ImConnection} from "react-icons/im";
import {
    HiArchive,
    HiCog,
    HiCurrencyDollar,
    HiInbox,
    HiLogout,
    HiOutlineTicket,
    HiShoppingBag,
    HiUserCircle,
    HiUsers,
    HiViewGrid
} from "react-icons/hi";
import {IoGitBranchOutline} from "react-icons/io5";
import {FaGithubAlt, FaLink} from "react-icons/fa";
import Link from "next/link";
import {MdOutlineDateRange} from "react-icons/md";
import {VscGitCommit} from "react-icons/vsc";
import {useDispatch} from "react-redux";
import {addDeploymentApp} from "@/store/features/deploy-app/deployAppSlice";
import {useRouter} from "next/navigation";

function CardDeploymentApp({deployApp , index}) {
    const dispatch = useDispatch();
    const router = useRouter()

    const handleDeployApp = () => {
        dispatch(addDeploymentApp(deployApp))
        router.push(`/app/deploy-apps/${deployApp.uuid}/resource`)
    }

    return (<Card key={index}>
        <div className="flex items-center space-x-4">
            <div className="shrink-0">
                <ImConnection className={"mb-2 text-3xl text-cyan-100"}/>
                {/*<AiOutlineDisconnect className={"mb-2 text-3xl text-red-600"}/>*/}
            </div>
            <h4 onClick={handleDeployApp} className="capitalize truncate font-semibold text-gray-900 dark:text-white hover:cursor-pointer hover:text-cyan-500">
                {deployApp?.uuid}
            </h4>
            <Dropdown
                arrowIcon={false}
                inline
                label={<span className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <span className="sr-only">Apps</span>
          <HiViewGrid className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"/>
        </span>}>
                <div className="grid grid-cols-3 gap-4 p-4">
                    <Link
                        href="#"
                        className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                        <HiShoppingBag className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Sales
                        </div>
                    </Link>
                    <a
                        href="#"
                        className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                        <HiUsers className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Users
                        </div>
                    </a>
                    <a
                        href="#"
                        className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                        <HiInbox className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Inbox
                        </div>
                    </a>
                    <a
                        href="#"
                        className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                        <HiUserCircle className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Profile
                        </div>
                    </a>
                    <a
                        href="#"
                        className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                        <HiCog className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Settings
                        </div>
                    </a>
                    <a
                        href="#"
                        className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                        <HiArchive className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Products
                        </div>
                    </a>
                    <a
                        href="#"
                        className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                        <HiCurrencyDollar className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Pricing
                        </div>
                    </a>
                    <a
                        href="#"
                        className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                        <HiOutlineTicket className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Billing
                        </div>
                    </a>
                    <a
                        href="#"
                        className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                        <HiLogout className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Logout
                        </div>
                    </a>
                </div>
            </Dropdown>
        </div>
        <div className="space-y-4">
            <div
                className="flex items-center text-sm font-medium text-gray-500   dark:text-gray-400 dark:hover:text-white"
            >
                <MdOutlineDateRange className="mr-2 text-lg"/>
                <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    {deployApp?.createdAt ? moment(deployApp.createdAt).format('MMM Do YY, h:mm:ss a') : 'No date available'}
                </p>
            </div>

            <div
                className="flex items-center text-sm font-medium text-gray-500   dark:text-gray-400 dark:hover:text-white"
            >
                <VscGitCommit className="mr-2 text-lg"/>
                <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    This is last commit
                </p>
            </div>
        </div>
        <div className="flex space-x-6 border-y border-gray-200 py-3 dark:border-gray-700">
            <div
                className="flex items-center text-sm font-medium text-gray-500   dark:text-gray-400 dark:hover:text-white"
            >
                <IoGitBranchOutline className="mr-2 text-lg"/>
                {deployApp?.defaultBranch}
            </div>
            <div
                className="flex items-center text-sm font-medium text-gray-500   dark:text-gray-400 dark:hover:text-white"
            >
                <FaGithubAlt className="mx-4 text-lg"/>:
                <span>
                    {deployApp?.sourceType}
                    </span>
            </div>
        </div>
        <div className="flex border-gray-200 dark:border-gray-700">
            <div as={Link}
                 href={"/app/deploy-apps/id/resource"}
                 className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-cyan-500 cursor-pointer dark:hover:text-white">
                <FaLink className=" truncate mr-2 text-sm"/>
                    <span className="truncate">
                        <Link className="font-medium" target="_blank" rel="noopener noreferrer" href={`https://${deployApp?.domains[0]?.fullSubdomain}`} passHref>
                            {deployApp?.domains[0]?.fullSubdomain ?? 'Default Subdomain'}
                        </Link>
                    </span>
            </div>
        </div>
    </Card>);
}

export default CardDeploymentApp;