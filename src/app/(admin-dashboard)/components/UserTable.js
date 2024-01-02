"use client";
import React, { useState, useEffect } from "react";
import DeleteBtn from "./DeleteBtn";
import { useFindUsersQuery } from "@/store/features/admin/user/userApiSlice";
import { convertDateFormat } from "@/lib/dateConverter";
import { Pagination } from "flowbite-react";
import Error from "./Error";
import ViewBtn from "./ViewBtn";
import styles from "./../css/styles.module.css";
import UserTableSkeleton from "./UserTableSkeleton";
import Image from "next/image";
import Avatar from "./Avatar";
import AddUserBtn from "./AddUserBtn";

export default function UserTable({ role }) {
  const { data, isLoading, error } = useFindUsersQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!isLoading && !error) {
      setUsers(data.filter((user) => user.currentRoles[0] === role));
    }
  }, [data, isLoading, error]);

  const handleSelectChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  if (isLoading) {
    return <UserTableSkeleton role={role} />;
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
    setUsers(
      data.filter(
        (user) =>
          user.currentRoles[0] === role &&
          user.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const totalRows = users.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const displayUsers = users.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-4">
        <div>
          <AddUserBtn role={role} />
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
              className="h-[42px] block p-2 ps-10 text-sm text-gray-900 border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-[#FFA500] focus:border-[#FFA500] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FFA500] dark:focus:border-[#FFA500]"
              placeholder="Search for developers"
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
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Is Verified
              </th>
              <th scope="col" className="px-6 py-3">
                Is Disabled
              </th>
              <th scope="col" className="px-6 py-3">
                Last login
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {displayUsers.length === 0 ? (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-center"
                  colspan="6"
                >
                  No data found
                </th>
              </tr>
            ) : (
              displayUsers.map((user, index) => (
                <UserTableRow
                  key={user.uuid}
                  no={index + (currentPage - 1) * rowsPerPage}
                  user={user}
                  users={users}
                  setUsers={setUsers}
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
              {Math.min(currentPage * rowsPerPage, users.length)} of{" "}
              {users.length}
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

function UserTableRow({ no, user, users, setUsers }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {no + 1}
      </th>
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-10 w-10 relative rounded-full overflow-hidden">
          {user.avatar != null && user?.avatar.trim() != "" ? (
            <Image
              src={user.avatar}
              alt="User Avatar"
              fill
              className="rounded-full object-cover"
              sizes="100% 100%"
            />
          ) : (
            <Avatar className="w-10 h-10" />
          )}
        </div>
        <div className="ps-3">
          <div className="text-base font-semibold text-gray-500 dark:text-gray-400">
            {user.username || "unknown"}
          </div>
          <div className="font-normal text-gray-500">
            {user.email || "unknown"}
          </div>
        </div>
      </th>
      <td className="px-6 py-4">
        {user.verified ? <VerifiedBadge /> : <UnverifiedBadge />}
      </td>
      <td className="px-6 py-4">{user.isDisabled ? "True" : "False"}</td>
      <td className="px-6 py-4">
        {convertDateFormat(user.lastLogin) || "unknown"}
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-3 items-center">
          <ViewBtn data={user} />
          <DeleteBtn
            uuid={user.uuid}
            name={user.username}
            removeType="user"
            data={users}
            setData={setUsers}
          />
        </div>
      </td>
    </tr>
  );
}

function VerifiedBadge() {
  return (
    <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-800 dark:bg-gray-700 dark:text-blue-400">
      <svg
        class="h-3 w-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
        />
        <path
          fill="#fff"
          d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
        />
      </svg>
      <span class="sr-only">Icon description</span>
    </span>
  );
}

function UnverifiedBadge() {
  return (
    <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-800 dark:bg-gray-700 dark:text-red-400">
      <svg
        class="h-3 w-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span class="sr-only">Icon description</span>
    </span>
  );
}
