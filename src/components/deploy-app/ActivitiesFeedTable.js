import React from 'react';
import {Checkbox, Table} from "flowbite-react";

function ActivitiesFeedTable() {
    const tableBodyData = [
        {
            id: 1,
            checkbox: <Checkbox />,
            projectName: {
                main: 'Education Dashboard',
                sub: 'Html templates',
            },
            branch: 'Angular',
            status: '#194556',
            owner: '$149',
            option: 'Hi',
        },
        {
            id: 2,
            checkbox: <Checkbox />,
            projectName: {
                main: 'Reactjs',
                sub: 'Html templates',
            },
            branch: 'Angular',
            status: '#194556',
            owner: '$149',
            option: 'Hue hue',
        },
        {
            id: 1,
            checkbox: <Checkbox />,
            projectName: {
                main: 'Education Dashboard',
                sub: 'Html templates',
            },
            branch: 'Angular',
            status: '#194556',
            owner: '$149',
            option: 'Hi',
        },
        {
            id: 2,
            checkbox: <Checkbox />,
            projectName: {
                main: 'Reactjs',
                sub: 'Html templates',
            },
            branch: 'Angular',
            status: '#194556',
            owner: '$149',
            option: 'Hue hue',
        }]


    return (<>
            <div className={"mt-10"}>
                <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600  ">
                    <Table.Head className="bg-gray-100 dark:bg-gray-700">
                        <Table.HeadCell>
                            <span className="sr-only">Toggle selected</span>
                        </Table.HeadCell>
                        <Table.HeadCell>Project Name</Table.HeadCell>
                        <Table.HeadCell>Branch</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>Owner</Table.HeadCell>
                        <Table.HeadCell>Option</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                        {tableBodyData?.map((rowData,i) => (
                            <Table.Row  key={i} rowData={rowData} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                                        {rowData.projectName.main}
                                    </div>
                                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        {rowData.projectName.sub}
                                    </div>
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                    {rowData.branch}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                    {rowData.status}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                    {rowData.owner}
                                </Table.Cell>
                                <Table.Cell className="space-x-2 whitespace-nowrap p-4">
                                    <div className="flex items-center gap-x-3">{rowData.option}</div>
                                </Table.Cell>
                            </Table.Row>
                        ))}

                    </Table.Body>
                </Table>
            </div>
        </>);
}

export default ActivitiesFeedTable;