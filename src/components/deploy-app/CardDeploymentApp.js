import React, {useState} from 'react';
import {Button, Card, Dropdown, Modal, Tooltip} from "flowbite-react";
import {ImConnection} from "react-icons/im";
import {
    HiArchive,
    HiCog,
    HiCurrencyDollar,
    HiInbox,
    HiLogout,
    HiOutlineExclamationCircle,
    HiOutlineTicket,
    HiShoppingBag,
    HiUserCircle,
    HiUsers,
    HiViewGrid
} from "react-icons/hi";
import {IoGitBranchOutline} from "react-icons/io5";
import {FaGithubAlt, FaLink} from "react-icons/fa";
import Link from "next/link";
import moment from "moment";
import {MdOutlineDateRange, MdViewInAr} from "react-icons/md";
import {VscGitCommit, VscLayersActive, VscSourceControl} from "react-icons/vsc";
import {useDispatch} from "react-redux";
import {addDeploymentApp} from "@/store/features/deploy-app/deployAppSlice";
import {useRouter} from "next/navigation";
import {RiDeleteBin3Fill} from "react-icons/ri";
import {useDeleteDeploymentAppMutation} from "@/store/features/deploy-app/deployAppApiSlice";
import {toast} from "react-toastify";
import {TbLockAccess, TbReport, TbSettingsBolt} from "react-icons/tb";

function CardDeploymentApp({deployApp, index, refetch}) {
    const dispatch = useDispatch();
    const router = useRouter()
    const [isDeleting, setIsDeleting] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [deleteDeploymentApp, {isLoading: isError}] = useDeleteDeploymentAppMutation();

    console.log("log",deployApp)
    //delete function
    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await deleteDeploymentApp(deployApp.uuid); // Pass the id of the deployment app to delete
            console.log("Deleted Successfully"); // Show success message
            refetch({page: page, limit: perPage || 12});// Fetch the latest data after deletion
        } catch (error) {
            toast.error("An error occurred while deleting the deployment app"); // Show error message
        }
        setIsDeleting(false);
        setShowConfirmationModal(false); // Hide the confirmation modal
    };

    const handleDeployApp = () => {
        dispatch(addDeploymentApp(deployApp))
        router.push(`/app/deploy-apps/${deployApp.uuid}/resource`)
    }
    console.log(deployApp?.buildNumber);
    console.log("domain", deployApp?.domains[0]);

    return (<>
        <Modal show={showConfirmationModal}
               size="sm"
               popup
               onClose={() => setShowConfirmationModal(false)}
        >
            <Modal.Header>
                <h2 className="text-lg font-medium">Confirmation</h2>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <HiOutlineExclamationCircle
                        className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"/>
                    <p className="mb-5 text-gray-600">Are you sure you want to delete this app?</p>
                    <div className="flex justify-center gap-4">
                        <Button color="failure" onClick={handleDelete} disabled={isDeleting}>
                            {isDeleting ? 'Deleting...' : 'Yes'}
                        </Button>
                        <Button color="gray" onClick={() => setShowConfirmationModal(false)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

        <Card key={index}>
            <div className="flex justify-between items-center space-x-4">
                <div className="flex items-center">
                    <div className="shrink-0 mr-4">
                        <ImConnection className={"mb-2 text-3xl text-cyan-100"}/>
                        {/*<AiOutlineDisconnect className={"mb-2 text-3xl text-red-600"}/>*/}
                    </div>
                    <Tooltip content={deployApp?.name}>
                    <h4 onClick={handleDeployApp}
                        className="text-center capitalize truncate font-semibold text-gray-900 dark:text-white hover:cursor-pointer hover:text-cyan-500">
                        {deployApp?.name.length > 15 ? deployApp?.name.substring(0, 20) + '...' : deployApp?.name}
                    </h4>
                    </Tooltip>
                </div>
                <div className={"border-gray-200 dark:border-gray-700"}>
                    <DropdownMenu deployApp={deployApp} setShowConfirmationModal={setShowConfirmationModal}/>
                </div>
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
                        {deployApp?.appType}
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
                    className="flex items-center font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white"
                >
                    <FaGithubAlt className="mx-4 text-md"/> {deployApp?.sourceType}
                </div>
            </div>
            <div className="flex border-gray-200 dark:border-gray-700">
                <div as={Link}
                     href={"/app/deploy-apps/id/resource"}
                     className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-cyan-500 cursor-pointer dark:hover:text-white">
                    <FaLink className=" truncate mr-2 text-sm"/>
                    <span className="truncate">
                        <Link className="font-medium" target="_blank" rel="noopener noreferrer"
                              href={`https://${deployApp?.domains[0]?.subdomain}.automatex.dev`} passHref>
                            {deployApp?.domains[0]?.subdomain}
                        </Link>
                    </span>
                </div>
            </div>
        </Card>
    </>);
}

export default CardDeploymentApp;

const DropdownMenu = ({deployApp, setShowConfirmationModal}) => {
    return (<Dropdown
            arrowIcon={false}
            inline
            label={<span className=" rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                          <span className="sr-only">Apps</span>
                              <HiViewGrid
                                  className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"/>
                            </span>}>
            <div className="grid grid-cols-3 gap-4 p-4">
                <Link
                    href={`/app/deploy-apps/${deployApp.uuid}/overview`}
                    className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                    <MdViewInAr className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Overview
                    </div>
                </Link>
                <Link
                    href={`/app/deploy-apps/${deployApp.uuid}/resource`}
                    className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                    <VscSourceControl className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Resources
                    </div>
                </Link>
                <Link
                    href={`/app/deploy-apps/${deployApp.uuid}/activities`}
                    className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                    <VscLayersActive className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Activities
                    </div>
                </Link>
                <Link
                    href={`/app/deploy-apps/${deployApp.uuid}/access`}
                    className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                    <TbLockAccess className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Access
                    </div>
                </Link>
                <Link
                    href={`/app/deploy-apps/${deployApp.uuid}/report`}
                    className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                    <TbReport className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Reports
                    </div>
                </Link>
                <Link
                    href={`/app/deploy-apps/${deployApp.uuid}/setting`}
                    className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                    <TbSettingsBolt className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Settings
                    </div>
                </Link>
                <Link
                    href="#"
                    onClick={() => setShowConfirmationModal(true)}
                    className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                    <RiDeleteBin3Fill className="mx-auto mb-1 h-7 w-7 text-red-600 dark:text-white"/>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Delete
                    </div>
                </Link>
            </div>
        </Dropdown>)
}