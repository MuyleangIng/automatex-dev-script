"use client";
import React, { useState, useEffect } from "react";
import DeleteBtn from "./DeleteBtn";
import { useFindDatabasesQuery } from "@/store/features/admin/database/databaseApiSlice";
import { convertDateFormat } from "@/lib/dateConverter";
import { Pagination } from "flowbite-react";
import Error from "./Error";
import ViewBtn from "./ViewBtn";
import styles from "./../css/styles.module.css";
import DbTableSkeleton from "./DbTableSkeleton";

export default function AppTable() {
  const { data, isLoading, error } =
    useFindDatabasesQuery("?page=1&limit=1000");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!isLoading && !error) {
      setApps(data.list);
    }
  }, [data, isLoading, error]);

  const handleSelectChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  if (isLoading) {
    return <DbTableSkeleton />;
  }

  if (error) {
    return <Error />;
  }

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginationTheme = {
    pages: {
      selector: {
        active: "bg-gray-100 dark:bg-[#374151]",
      },
    },
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setApps(
      data.list.filter((app) =>
        app.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    );
  };

  const totalRows = apps.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const displayApps = apps.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-4">
        <div className="flex items-center justify-center md:justify-start">
          <span class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-[#50AAE7] from-[#FFA500]">
            Database Services
          </span>
        </div>
        <div>
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-[#FFA500] focus:border-[#FFA500] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FFA500] dark:focus:border-[#FFA500]"
              placeholder="Search for apps"
              autocomplete="off"
            />
          </div>
        </div>
      </div>
      <div className={"relative overflow-x-auto " + styles.customScrollbar}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-500 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                NO
              </th>
              <th scope="col" className="px-6 py-3">
                App Name
              </th>
              <th scope="col" className="px-6 py-3">
                Domain Name
              </th>
              <th scope="col" className="px-6 py-3">
                DB Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {displayApps.length === 0 ? (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-center"
                  colspan="7"
                >
                  No data found
                </th>
              </tr>
            ) : (
              displayApps.map((app, index) => (
                <DbTableRow
                  key={app.uuid}
                  no={index + (currentPage - 1) * rowsPerPage}
                  app={app}
                  apps={apps}
                  setApps={setApps}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {totalPages > 1 ? (
        <div
          className={
            "grid grid-cols-1 lg:grid-cols-2 mt-2 gap-2 overflow-x-auto " +
            styles.customScrollbar
          }
        >
          <div className="text-gray-500 dark:text-gray-400 flex justify-center lg:justify-start items-center gap-4 order-2 lg:order-1 mt-2">
            <div>Rows per page</div>
            <select
              className="text-gray-500 dark:text-gray-400 h-[37.33px] w-fit rounded-lg border-gray-200 dark:border-[#374151] focus:border-gray-200 focus:ring-0 dark:bg-gray-700 dark:placeholder-gray-400 focus:outline-none"
              onChange={handleSelectChange}
              value={rowsPerPage}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <div>
              {currentPage * rowsPerPage - rowsPerPage + 1} -{" "}
              {Math.min(currentPage * rowsPerPage, apps.length)} of{" "}
              {apps.length}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <Pagination
              theme={paginationTheme}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </>
  );
}

function DbTableRow({ no, app, apps, setApps }) {
  let domainName;

  if (!app.domain.subdomain) {
    domainName = "unknown";
  } else {
    domainName = app.domain.subdomain + ".automatex.dev";
  }

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {no + 1}
      </th>
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {app.name || "unknown"}
      </th>
      <td className="px-6 py-4 whitespace-nowrap">{domainName}</td>
      <td className="px-6 py-4">{app.dbType || "unknown"}</td>
      <td className="px-6 py-4">
        {domainName !== "unknown" ? (
          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            Active
          </span>
        ) : (
          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            Inactive
          </span>
        )}
      </td>
      <td className="px-6 py-4">
        {convertDateFormat(app.createdAt) || "unknown"}
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-3 items-center">
          <ViewBtn data={app} />
          <DeleteBtn
            uuid={app.uuid}
            name={app.name}
            removeType="database"
            data={apps}
            setData={setApps}
          />
        </div>
      </td>
    </tr>
  );
}
