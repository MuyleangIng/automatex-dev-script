
'use client';

import {Badge, Table} from 'flowbite-react';

export default function ReportTable(){
    return(
        <>

            <h1 className="mb-10 text-xl font-bold text-cyan-500 dark:text-white">Trivy Report</h1>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Vulnerability ID</Table.HeadCell>
                        <Table.HeadCell>Severity</Table.HeadCell>
                        <Table.HeadCell>Installed Version</Table.HeadCell>
                        <Table.HeadCell>Package</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                CVE-2011-3374
                            </Table.Cell>
                            <Table.Cell>
                                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Low</span>
                            </Table.Cell>
                            <Table.Cell>2.2.4</Table.Cell>
                            <Table.Cell>apt</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                CVE-2022-3715
                            </Table.Cell>
                            <Table.Cell><span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">High</span></Table.Cell>
                            <Table.Cell>5.1-2+deb11u1</Table.Cell>
                            <Table.Cell>bash</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">TEMP-0841856-B18BAF</Table.Cell>
                            <Table.Cell>
                                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Low</span>
                            </Table.Cell>
                            <Table.Cell>5.1-2+deb11u1</Table.Cell>
                            <Table.Cell>bash</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </>
    )

}