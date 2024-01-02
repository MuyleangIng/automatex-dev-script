"use client";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { GoServer } from "react-icons/go";
import { GoDatabase } from "react-icons/go";
import { RiUserLine } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import Error from "./Error";
import { useFindUsersQuery } from "@/store/features/admin/user/userApiSlice";
import { useFindAppsQuery } from "@/store/features/admin/app/appApiSlice";
import { useFindDatabasesQuery } from "@/store/features/admin/database/databaseApiSlice";

export default function Overview() {
  const { data: users, isLoading: isLoadingUsers, error: userError } = useFindUsersQuery();
  const { data: apps, isLoading: isLoadingApps, error: appError } = useFindAppsQuery("?page=1&limit=1000");
  const { data: databases, isLoading: isLoadingDatabases, error: databaseError } = useFindDatabasesQuery();

  if(isLoadingUsers || isLoadingApps || isLoadingDatabases) {
    return (
      <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-900 dark:text-white">
        {Array.from({ length: 5 }).map((index) => (<OverviewSkeleton key={index} />))}
      </div>
    );
  }

  if(userError || appError || databaseError) {
    return <Error />;
  }

  const totalFrontends = apps?.list.reduce((count, app) => app.appType === 'FRONTEND' ? count + 1 : count, 0);
  const totalBackends = apps?.list.reduce((count, app) => app.appType === 'BACKEND' ? count + 1 : count, 0);
  const totalDatabases = databases?.total;
  const totalDevelopers = users?.reduce((count, user) => user.currentRoles[0] === 'DEVELOPER' ? count + 1 : count, 0);
  const totalAdmins = users?.reduce((count, user) => user.currentRoles[0] === 'ADMIN' ? count + 1 : count, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-500 dark:text-gray-400">
      <div className="flex items-center justify-center p-4 rounded bg-gray-50 dark:bg-gray-800">
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <CgWebsite size={40} color="#FFB621" />
            <h1 className="font-bold text-[#50AAE7]">Total Frontends</h1>
          </div>
          <h2 className="text-xl">{totalFrontends}</h2>
        </div>
      </div>
      <div className="first-line:flex items-center justify-center p-4 rounded bg-gray-50 dark:bg-gray-800">
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <GoServer size={40} color="#FFB621" />
            <h1 className="font-bold text-[#50AAE7]">Total Backends</h1>
          </div>
          <h2 className="text-xl">{totalBackends}</h2>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 rounded bg-gray-50 dark:bg-gray-800">
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <GoDatabase size={40} color="#FFB621" />
            <h1 className="font-bold text-[#50AAE7]">Total Databases</h1>
          </div>
          <h2 className="text-xl">{totalDatabases}</h2>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 rounded bg-gray-50 dark:bg-gray-800">
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <RiUserLine size={40} color="#FFB621" />
            <h1 className="font-bold text-[#50AAE7]">Total Developers</h1>
          </div>
          <h2 className="text-xl">{totalDevelopers}</h2>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 rounded bg-gray-50 dark:bg-gray-800">
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <RiAdminLine size={40} color="#FFB621" />
            <h1 className="font-bold text-[#50AAE7]">Total Admins</h1>
          </div>
          <h2 className="text-xl">{totalAdmins}</h2>
        </div>
      </div>
    </div>
  );
}

function OverviewSkeleton() {
  return (
    <div className="flex items-center justify-center p-4 rounded bg-gray-50 dark:bg-gray-800">
      <div className="w-full flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <svg
            class="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-28"></div>
        </div>
        <div class="h-2 my-[12px] bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
      </div>
    </div>
  );
}
