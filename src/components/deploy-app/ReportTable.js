'use client';

import {Table} from 'flowbite-react';
import {useGetTrivyReportByBuildNumberQuery} from "@/store/features/deploy-app/deployAppApiSlice";
import ResourceLoadingIndicator from "@/components/deploy-app/deploymentLoading/resourceLoadingIndicator";
import React from "react";
import HandleContent from "@/components/deploy-app/HandleContent";
import {useSelector} from "react-redux";
import {selectDeploymentApp} from "@/store/features/deploy-app/deployAppSlice";
import Link from "next/link";
export default function ReportTable({params}) {
    const deployment = useSelector(selectDeploymentApp);
    const {uuid} = params;
    const number = deployment?.jobInfo?.lastSuccessfulBuild?.number;
    const {data, error, isLoading} = useGetTrivyReportByBuildNumberQuery({uuid, number});
    return (<HandleContent
        // error={error}
        isLoading={isLoading}
        customLoadingContent={<ResourceLoadingIndicator/>}
    >
        <div
            className={'mt-10 w-full rounded-xl border-dashed border-2 border-gray-300 dark:border-white bg-white pt-4 mb-5 shadow dark:bg-gray-800 overflow-hidden'}>
            <h1 className="mb-10 text-xl font-bold text-cyan-500 text-center underline dark:text-cyan-500 ">Trivy Report
                BuildSuccess {deployment?.jobInfo?.lastSuccessfulBuild?.number}</h1>
            <div className="overflow-x-auto m-5">
                {data && <MainTableBody trivy={data}/>}
            </div>
        </div>
    </HandleContent>)

}
const MainTableBody = ({trivy}) => {
    // const {
    //     data, handleResultsNumber, total
    // } = HandlePagenation({initData: trivy?.results.flatMap(result => result?.Vulnerabilities)});
    const Vulnerabilities = trivy?.results.flatMap(result => result?.Vulnerabilities);
    return (<>

        <Table hoverable className={"w-full font-bold text-sm text-center"}>
            <Table.Head>
                <Table.HeadCell>Package</Table.HeadCell>
                <Table.HeadCell>Vulnerability ID</Table.HeadCell>
                <Table.HeadCell>Severity</Table.HeadCell>
                <Table.HeadCell>Installed Version</Table.HeadCell>
                <Table.HeadCell>Fixed Version </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {Vulnerabilities.map((vulnerability, index) => {
                    return (<Table.Row key={index}
                                       className={`border-amber-400 dark:border-gray-700 row-${vulnerability?.Severity.toLowerCase()}`}>
                        <Table.Cell
                            className="whitespace-nowrap font-bold text-sm text-black">
                            {vulnerability?.PkgName}
                        </Table.Cell>
                        <Table.Cell

                            className={"text-black font-medium"}>{vulnerability?.VulnerabilityID}</Table.Cell>
                        <Table.Cell
                            className={` me-2 px-2.5 py-0.5 font-bold text-sm text-white cell-${vulnerability?.Severity.toLowerCase()} `}>
                            {vulnerability?.Severity}
                        </Table.Cell>
                        <Table.Cell

                            className={"text-black font-medium"}>{vulnerability?.InstalledVersion}</Table.Cell>
                        <Table.Cell
                            className={"text-blue-500 font-medium"}>
                            <Link href={vulnerability?.PrimaryURL} target="_blank" rel="noopener noreferrer">
                                {vulnerability?.PrimaryURL}
                            </Link>
                        </Table.Cell>
                    </Table.Row>)
                })}
            </Table.Body>
        </Table>
        {/*<div*/}
        {/*    className={" w-full flex justify-end gap-2 items-center text-gray-900  dark:bg-gray-800 dark:text-white border-gray-400"}>*/}
        {/*    <select*/}
        {/*        className={"dark:bg-gray-800 bg-white border-0 text-gray-900 text-sm rounded-lg focus:ring-0 block dark:border-gray-800 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-0"}*/}
        {/*        onChange={e => handleResultsNumber(e.target.value)}*/}
        {/*    >*/}
        {/*        <option value="10">10</option>*/}
        {/*        <option value="20">20</option>*/}
        {/*        <option value="40">40</option>*/}
        {/*        <option value={total}>All</option>*/}
        {/*    </select>*/}
        {/*</div>*/}
    </>)
}