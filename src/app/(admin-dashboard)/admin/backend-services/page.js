import React from "react";
import AppTable from "./../../components/AppTable";

export const metadata = {
  title: "Backend Services",
  description: "Admin Dashborad for AutomateX platform",
};

function Page() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="min-h-[calc(100vh-96px)] p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-[64px]">
        <AppTable appType="BACKEND" />
      </div>
    </div>
  );
}

export default Page;
