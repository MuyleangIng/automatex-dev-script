'use client'
import React from 'react';
import {Button, Card, Table} from "flowbite-react";
import {FaUserPlus} from "react-icons/fa";

function Page() {
    return (
        <Card className={"mt-14"}>
        <div className="overflow-x-auto mt-14">
            <div className={"mb-5"}>
                <Button color="gray"> <FaUserPlus className={"mr-2"}/>Add User</Button>
            </div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>List All User</Table.HeadCell>
                    <Table.HeadCell>E-mail</Table.HeadCell>
                    <Table.HeadCell className={"text-center"}>Permission</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {'John Doe'}
                        </Table.Cell>
                        <Table.Cell>nunsompoothy094@gmail.com</Table.Cell>
                        <Table.Cell className={"text-center font-bold"}>Owner</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {'John Doe'}
                        </Table.Cell>
                        <Table.Cell>nunsompoothy094@gmail.com</Table.Cell>
                        <Table.Cell className={"text-center"}>Member</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {'Jonny dang'}
                        </Table.Cell>
                        <Table.Cell>nunsompoothy094@gmail.com</Table.Cell>
                        <Table.Cell className={"text-center"}>Member</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
        </Card>
    );
}

export default Page;