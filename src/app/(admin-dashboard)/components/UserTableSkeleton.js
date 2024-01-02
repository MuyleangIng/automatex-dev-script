import React from "react";
import styles from "./../css/styles.module.css";

export default function UserTableSkeleton({role}) {
  return (
    <>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-4">
        <div>
          <button
            disabled
            type="button"
            class="px-5 py-2.5 text-sm font-medium text-white bg-[#ffa500] hover:bg-[#e69500] rounded-lg text-center"
          >
            Add {role === "ADMIN" ? "Admin" : "Developer"}
          </button>
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
              className="h-[42px] block p-2 ps-10 text-sm text-gray-900 border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-[#FFA500] focus:border-[#FFA500] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FFA500] dark:focus:border-[#FFA500]"
              placeholder="Search for databases"
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
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Is Verified
              </th>
              <th scope="col" className="px-6 py-3">
                Is Disabled
              </th>
              <th scope="col" className="px-6 py-3">
                Last Login
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="shadow animate-pulse">
            {Array.from({ length: 4 }).map((index) => (
              <UserTableRowSkeleton key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function UserTableRowSkeleton() {
  return (
    <tr className="border-b bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <th
        scope="row"
        className="h-[78px] whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
      >
        <div className="h-2.5 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </th>
      <th
        scope="row"
        className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
      >
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-600"></div>
        <div className="ps-3">
          <div className="mb-3 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </th>
      <td className="h-[78px] px-6 py-4">
        <div className="h-2.5 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </td>
      <td className="h-[78px] px-6 py-4">
        <div className="h-2.5 w-16 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </td>
      <td className="h-[78px] px-6 py-4">
        <div className="h-2.5 w-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </td>
      <td className="h-[78px] px-6 py-4">
        <div className="h-2.5 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </td>
    </tr>
  );
}
