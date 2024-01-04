import React, { createElement, useState } from 'react';
import {Button, Card, Dropdown, Modal, Spinner, Tooltip} from "flowbite-react";
import { FaLink, FaLock, FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BsEthernet, BsFillDatabaseFill, BsThreeDots } from 'react-icons/bs';
import { useCopyToClipboard } from 'usehooks-ts';
import { IoIosOptions } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addDeploymentDatabase } from '@/store/features/deploy-db/deployDbSlice';
import { useDeleteDeploymentDatabaseMutation } from '@/store/features/deploy-db/deployDbApiSlice';
import { HiOutlineExclamationCircle, HiViewGrid } from 'react-icons/hi';
import Link from 'next/link';
import { RiDeleteBin3Fill } from 'react-icons/ri';
import { TbSettingsBolt } from 'react-icons/tb';
import {toast} from "react-toastify";
import { GoProjectRoadmap } from 'react-icons/go';
import ToastConfig from "@/components/deploy-app/deploymentLoading/ToastConfig";



function CardDeploymentDb({ deployDb, index, fetchDb }) {

    const dispatch = useDispatch();
    const router = useRouter()

    const handleDeployDatabase = () => {
        dispatch(addDeploymentDatabase(deployDb))
         router.push(`/app/dashboard?appType=DATABASE`)
    }

    const [isDeleting, setIsDeleting] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [deleteDb, { isLoading: isError }] = useDeleteDeploymentDatabaseMutation();

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await deleteDb(deployDb.uuid); // Pass the id of the deployment app to delete
            fetchDb({ filters: { page: 1, limit: 12 }});
            toast.success("Deleted Successfully")
        } catch (error) {
            toast.error("An error occurred while deleting the deployment app"); // Show error message
        }
        setIsDeleting(false);
        setShowConfirmationModal(false); // Hide the confirmation modal
    };

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
                        className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <p className="mb-5 text-gray-600">Are you sure you want to delete this app?</p>
                    <div className="flex justify-center gap-4">
                        <Button color="failure" onClick={handleDelete} disabled={isDeleting}>
                            {isDeleting ?
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Spinner color="warning" aria-label="Info Spinner" />
                                    <span style={{ marginLeft: '10px' }}>Deleting</span>
                                </div>
                                : 'Yes'}
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
                <div className="flex items-center shrink-0">
                    <GoProjectRoadmap className={"mb-2 text-2xl text-cyan-100"} />
                
                <Tooltip content={deployDb?.name}>
                    <h4 onClick={handleDeployDatabase}
                        className="ml-5 text-center capitalize truncate font-semibold text-gray-900 dark:text-white hover:cursor-pointer hover:text-cyan-500">
                        {deployDb?.name.length > 15 ? deployDb?.name.substring(0, 20) + '...' : deployDb?.name}
                    </h4>
                </Tooltip>
                </div>
                <div className={"border-gray-200 dark:border-gray-700"}>
                    <DropdownMenu deployDb={deployDb} setShowConfirmationModal={setShowConfirmationModal}/>
                </div>
            </div>

            

            <div className="space-y-4 overflow-hidden ">
                <DbInfo data={deployDb.dbUsername} icon={FaRegUser} />
                <DbInfo data={deployDb.dbPassword} icon={FaLock} hidden={true} />
                <DbInfo data={deployDb.dbName} icon={BsFillDatabaseFill} />
                <DbInfo data={deployDb.dbPort} icon={BsEthernet} />
                <DbInfo data={deployDb.dbType} icon={IoIosOptions} />
                <DbInfo data={deployDb?.domain.fullSubdomain} icon={FaLink} />
            </div>

        </Card>
    </>);
}

export default CardDeploymentDb;

const DbInfo = ({ data, hidden = false, icon }) => {
    const [value, copy] = useCopyToClipboard()

    const Icon = () => {
        return createElement(
            icon,
            { className: 'mr-2 text-lg' }
        );
    }
    return (
        <Tooltip content="Copied" trigger="click">
            <div
                className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white hover:cursor-pointer"
                onClick={() => copy(data)}
            >
                <Icon />
                <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    {hidden ? "*".repeat(8) : data}
                </p>
            </div>
        </Tooltip>
    )
}
const DropdownMenu = ({deployDb, setShowConfirmationModal}) => {
    return (<Dropdown
            arrowIcon={false}
            inline
            label={<span className=" rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                          <span className="sr-only">Apps</span>
                              <BsThreeDots
                                  className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"/>
                            </span>}>
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
        </Dropdown>)
}