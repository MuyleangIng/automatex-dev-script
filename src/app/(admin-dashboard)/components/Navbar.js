"use client";
import React, { useState, useEffect, useRef } from "react";
import { CgWebsite } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { GoServer } from "react-icons/go";
import { GoDatabase } from "react-icons/go";
import { RiUserLine } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import BtnTheme from "@/components/BtnTheme";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useGetUserQuery } from "@/store/features/user/userApiSlice";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Avatar from "./Avatar";

export default function Navbar() {
  const { data: user, isLoading, error } = useGetUserQuery();

  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const sidebarRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    console.log(isProfileOpen);
    const handleClickOutsideOfSidebar = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };
    const handleClickOutsideOfProfile = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideOfSidebar);
    document.addEventListener("mousedown", handleClickOutsideOfProfile);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideOfSidebar);
      document.removeEventListener("mousedown", handleClickOutsideOfProfile);
    };
  }, []);

  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/", redirect: false });
    router.push("/");
  };

  if (error) {
    handleSignOut();
  }

  if (!isLoading) {
    if (!user) {
      handleSignOut();
    }
  }

  const username = user?.username || "Name";
  const email = user?.email || "Email";

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center justify-start rtl:justify-end"
              ref={hamburgerRef}
            >
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link href="/admin" className="flex ms-2 md:me-24">
                <Image
                  src="/mainlogo.png"
                  className="me-3"
                  width={40}
                  height={40}
                  alt="AutomateX Logo"
                />
                <span className="self-center text-xl font-extrabold whitespace-nowrap w-">
                  <span className="text-cyan-700">Automate</span>
                  <span className="text-cool-blue-100">X</span>
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <BtnTheme />
              <div className="flex items-center ms-3" ref={profileRef}>
                <div>
                  <button
                    type="button"
                    className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                    onClick={toggleProfile}
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-9 w-9 relative rounded-full overflow-hidden">
                      {user?.avatar != null && user?.avatar.trim() != "" ? (
                        <Image
                          src={user?.avatar}
                          alt="User Avatar"
                          fill
                          className="rounded-full object-cover"
                          sizes="100% 100%"
                        />
                      ) : (
                        <Avatar />
                      )}
                    </div>
                  </button>
                </div>
                <div
                  className={`${
                    isProfileOpen ? "" : "hidden"
                  } fixed right-0 z-50 top-[64.5px] text-base list-none bg-white divide-y divide-gray-100 rounded-bl shadow dark:bg-gray-700 dark:divide-gray-600`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-500 dark:text-gray-400"
                      role="none"
                    >
                      {username}
                    </p>
                    <p
                      className="text-sm font-medium text-gray-500 truncate dark:text-gray-400"
                      role="none"
                    >
                      {email}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-gray-50"
                        role="menuitem"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
        ref={sidebarRef}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/admin"
                className={`${
                  pathname === "/admin"
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-50"
                    : "text-gray-500 dark:text-gray-400"
                } flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <RxDashboard size={20} />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/admin/frontend-services"
                className={`${
                  pathname === "/admin/frontend-services"
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-50"
                    : "text-gray-500 dark:text-gray-400"
                } flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <CgWebsite size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Frontend Services
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/admin/backend-services"
                className={`${
                  pathname === "/admin/backend-services"
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-50"
                    : "text-gray-500 dark:text-gray-400"
                } flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <GoServer size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Backend Services
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/admin/database-services"
                className={`${
                  pathname === "/admin/database-services"
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-50"
                    : "text-gray-500 dark:text-gray-400"
                } flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <GoDatabase size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Database Services
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/admin/developers"
                className={`${
                  pathname === "/admin/developers"
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-50"
                    : "text-gray-500 dark:text-gray-400"
                } flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <RiUserLine size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Developers
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/admin/admins"
                className={`${
                  pathname === "/admin/admins"
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-50"
                    : "text-gray-500 dark:text-gray-400"
                } flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <RiAdminLine size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">Admins</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
