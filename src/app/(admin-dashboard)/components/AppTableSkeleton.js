import React from "react";
import styles from "./../css/styles.module.css";

export default function AppTableSkeleton({appType}) {
  return (
    <>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-4">
        <div className="flex items-center justify-center md:justify-start">
          <span class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-[#50AAE7] from-[#FFA500]">
            {appType === "FRONTEND" ? "Frontend" : "Backend"} Services
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
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-[#FFA500] focus:border-[#FFA500] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FFA500] dark:focus:border-[#FFA500]"
              placeholder="Search for apps"
              autocomplete="off"
              disabled
            />
          </div>
        </div>
      </div>
      <div className={"w-full overflow-x-auto " + styles.customScrollbar}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                Technology
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
          <tbody className="shadow animate-pulse">
            {Array.from({ length: 5 }).map((index) => (
              <AppTableRowSkeleton key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function AppTableRowSkeleton() {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="h-[54.33px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8"></div>
      </th>
      <th
        scope="row"
        className="h-[54.33px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
      </th>
      <td className="h-[54.33px] px-6 py-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
      </td>
      <td className="h-[54.33px] px-6 py-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
      </td>
      <td className="h-[54.33px] px-6 py-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
      </td>
      <td className="h-[54.33px] px-6 py-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
      </td>
      <td className="h-[54.33px] px-6 py-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
      </td>
    </tr>
  );
}
