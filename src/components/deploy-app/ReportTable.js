'use client';

import {Table} from 'flowbite-react';
import {useGetTrivyReportByBuildNumberQuery} from "@/store/features/deploy-app/deployAppApiSlice";
import ResourceLoadingIndicator from "@/components/deploy-app/deploymentLoading/resourceLoadingIndicator";
import React from "react";
import HandleContent from "@/components/deploy-app/HandleContent";

export default function ReportTable({params}) {
    const {uuid, number = 8} = params;
    const {data: trivyReport, error, isLoading} = useGetTrivyReportByBuildNumberQuery({uuid, number});
    const trivy = trivyReport?.results[0]?.Vulnerabilities[0]
    console.log("Report:", trivyReport)

    console.log("tryvy:", trivy)

    //
    // console.log("tryvy:",trivyReport)


    return (<HandleContent
        error={error}
        isLoading={isLoading}
        customLoadingContent={<ResourceLoadingIndicator/>}
    >
        <div
            className={'mt-10 w-full rounded-xl border-dashed border-2 border-gray-300 dark:border-gray-700 bg-white pt-4 mb-5 shadow dark:bg-gray-800 overflow-hidden'}>
            <h1 className="mb-10 text-xl font-bold text-cyan-500 text-center underline dark:text-white">Trivy Report</h1>
            <div className="overflow-x-auto m-5">
                <Table hoverable className={"font-bold text-sm text-center"}>
                    <Table.Head>
                        <Table.HeadCell>Package</Table.HeadCell>
                        <Table.HeadCell>Vulnerability ID</Table.HeadCell>
                        <Table.HeadCell>Severity</Table.HeadCell>
                        <Table.HeadCell>Installed Version</Table.HeadCell>
                        <Table.HeadCell>Fixed Version </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {trivyReport?.results[0]?.Vulnerabilities.map((vulnerability, index) => {
                            let severityColor;
                            let rowColor;
                            switch (vulnerability.Severity) {
                                case 'LOW':
                                    severityColor = '#c3e5b1';
                                    break;
                                case 'MEDIUM':
                                    severityColor = '#f7ea9f';
                                    break;
                                case 'HIGH':
                                    severityColor = '#ffd29f';
                                    break;
                                case 'CRITICAL':
                                    severityColor = '#f59f9f';
                                    break;
                                default:
                                    rowColor = 'bg-white';
                            }

                            switch (vulnerability.Severity) {
                                case 'LOW':
                                    rowColor = '#5fbb31';
                                    break;
                                case 'MEDIUM':
                                    rowColor = '#e9c600';
                                    break;
                                case 'HIGH':
                                    rowColor = '#ff8800';
                                    break;
                                case 'CRITICAL':
                                    rowColor = '#e40000';
                                    break;
                                default:
                                    rowColor = 'bg-white';
                            }


                            return (<Table.Row key={index} className="border-amber-400 dark:border-gray-700 ">
                                <Table.Cell style={{backgroundColor: severityColor}}
                                            className="whitespace-nowrap font-bold text-sm text-black">
                                    {vulnerability.PkgName}
                                </Table.Cell>
                                <Table.Cell
                                    style={{backgroundColor: severityColor}}
                                    className={"text-black font-medium"}>{vulnerability.VulnerabilityID}</Table.Cell>
                                <Table.Cell className={"text-center"} style={{backgroundColor: rowColor}}>
                                <span
                                    className={" me-2 px-2.5 py-0.5 rounded font-bold text-sm text-white"}> {vulnerability.Severity}
                                </span>
                                </Table.Cell>
                                <Table.Cell
                                    style={{backgroundColor: severityColor}}
                                    className={"text-black font-medium"}>{vulnerability.InstalledVersion}</Table.Cell>
                                <Table.Cell style={{backgroundColor: severityColor}}
                                            className={"text-blue-500 font-medium"}>
                                    <a href={vulnerability.PrimaryURL} target="_blank" rel="noopener noreferrer">
                                        {vulnerability.PrimaryURL}
                                    </a>
                                </Table.Cell></Table.Row>)
                        })}
                    </Table.Body>
                </Table>
            </div>
        </div>
    </HandleContent>)

}