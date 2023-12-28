import React, { createElement } from 'react';
import { Card, Tooltip } from "flowbite-react";
import { FaLink, FaLock, FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BsFillDatabaseFill } from 'react-icons/bs';
import { useCopyToClipboard } from 'usehooks-ts';
import { GrProjects } from 'react-icons/gr';
import { IoIosOptions } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addDeploymentDatabase } from '@/store/features/deploy-db/deployDbSlice';



function CardDeploymentDb({ deployDb, index}) {

    const dispatch = useDispatch();
    const router = useRouter()

    const handleDeployDatabase = () => {
        dispatch(addDeploymentDatabase(deployDb))
    }

    return (<>
        <Card key={index}>
            <div className="flex items-center space-x-4">
                <div className="shrink-0">
                    <GrProjects className={"mb-2 text-2xl text-cyan-100"} />
                </div>
                <Tooltip content={deployDb?.name}>
                    <h4 onClick={handleDeployDatabase}
                        className="text-center capitalize truncate font-semibold text-gray-900 dark:text-white hover:cursor-pointer hover:text-cyan-500">
                        {deployDb?.name.length > 15 ? deployDb?.name.substring(0, 20) + '...' : deployDb?.name}
                    </h4>
                </Tooltip>
            </div>

            <div className="space-y-4 overflow-hidden ">
                <DbInfo data={deployDb.dbUsername} icon={FaRegUser} />
                <DbInfo data={deployDb.dbPassword} icon={FaLock} hidden={true} />
                <DbInfo data={deployDb.dbName} icon={BsFillDatabaseFill} />
                <DbInfo data={deployDb.dbType} icon={IoIosOptions} />
                <DbInfo data={deployDb?.domain.fullSubdomain} icon={FaLink}/>
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