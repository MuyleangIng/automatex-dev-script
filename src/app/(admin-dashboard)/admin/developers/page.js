import React from "react";
import UserTable from "../../components/UserTable";

export const metadata = {
  title: "Users",
  description: "Admin Dashborad for AutomateX platform",
};

export default function Page() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="min-h-[calc(100vh-96px)] p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-[64px]">
        <UserTable role="DEVELOPER" />
      </div>
    </div>
  );
}
