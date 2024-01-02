import React from "react";
import DbTable from "@/app/(admin-dashboard)/components/DbTable";

export const metadata = {
  title: "Database Services",
  description: "Admin Dashborad for AutomateX platform",
};

function Page() {
  return (
    <div class="p-4 sm:ml-64">
      <div class="min-h-[calc(100vh-96px)] p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-[64px]">
        <DbTable />
      </div>
    </div>
  );
}

export default Page;
