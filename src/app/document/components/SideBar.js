"use client";
import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBar() {
   const active = "bg-gray-100 dark:bg-gray-700";
   const pathname = usePathname();
   const [drawerClass, setDrawerClass] = useState("left-0");
   const [drawer, setDrawer] = useState(false);
   const handleDrawer = () => {
      if (drawer) {
         setDrawer(false);
         setDrawerClass("left-64 lg:left-0");
      } else {
         setDrawer(true);
         setDrawerClass("left-0");
      }
   };

   return (
      <div className="flex w-full justify-between">
         {/* <nav className="flex top-0 z-50 dark:bg-gray-800 dark:border-gray-700">
                <button
                    onClick={handleDrawer}
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        ></path>
                    </svg>
                </button>
            </nav> */}

         <Sidebar
            aria-label="Sidebar with content separator example"
            className={
               "flex  w-50 h-screen  transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700 rounded-lg" +
               drawerClass
            }
         >
            <Sidebar.Items>
               <Sidebar.ItemGroup>
                  <Sidebar.Collapse label="Welcome" className="font-bold">
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("courses") ? active : ""}
                     >
                        Get started
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("sections") ? active : ""}
                     >
                        Add new site
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("lessons") ? active : ""}
                     >
                        Collaborate
                     </Sidebar.Item>


                  </Sidebar.Collapse>

                  <Sidebar.Collapse label="Framewrok" className="font-bold">
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("courses") ? active : ""}
                     >
                        Next.js
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("sections") ? active : ""}
                     >
                        Nuxt.js
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("lessons") ? active : ""}
                     >
                        Angular
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("lessons") ? active : ""}
                     >
                        Vue.js
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("lessons") ? active : ""}
                     >
                        React.js
                     </Sidebar.Item>

                  </Sidebar.Collapse>

                  <Sidebar.Collapse label="Projects" className="font-bold">
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("courses") ? active : ""}
                     >
                        Project Dashboard
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("sections") ? active : ""}
                     >
                        Environment
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("lessons") ? active : ""}
                     >
                        Add new site
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("lessons") ? active : ""}
                     >
                        Collaborate
                     </Sidebar.Item>
                  </Sidebar.Collapse>

                  <Sidebar.Collapse label="Deployments" className="font-bold">
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("courses") ? active : ""}
                     >
                        Git Integration
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("sections") ? active : ""}
                     >
                        Environment
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("lessons") ? active : ""}
                     >
                        Generated URLs
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("lessons") ? active : ""}
                     >
                        Preview Deployments
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("lessons") ? active : ""}
                     >
                        Manage Deployments
                     </Sidebar.Item>
                     <Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("lessons") ? active : ""}
                     >
                        Deploy Hooks
                     </Sidebar.Item><Sidebar.Item
                        href="#"
                        as={Link}
                        className={pathname.includes("lessons") ? active : ""}
                     >
                        Webhooked
                     </Sidebar.Item>
                  </Sidebar.Collapse>
               </Sidebar.ItemGroup>
            </Sidebar.Items>
         </Sidebar>
         <section className=" p-10 pt-0 w-11/12">
            <h1 className="text-4xl font-bold pb-5"> Get Started with Automate X</h1>
            <p>Automate X is a platform for developers that provides the tools, workflows, and infrastructure you need to build and deploy your web apps faster, without the need for additional configuration.</p>
            <br />
            <p>Automate X  supports popular frontend frameworks and Backend, and its scalable, secure infrastructure is globally distributed to serve content from data centers near your users for optimal speeds.</p>
            <br />
            <p>  During development, AutomateX provides tools for real-time collaboration on your projects such as automatic preview and production environments, and comments on preview deployments.</p>
            <br />
            <h1 className="text-4xl font-bold pb-5">Introduction</h1>
            <p>To get started with your first project on AutomateX, we’ll deploy a demo website. Here’s a live example. By the end of this tutorial, you will have completed these steps to help familiarize yourself with AutomateX workflows:</p>
            <ui>
               <li>clone project code from an example repository in GitHub and create a new site in the AutomateX</li>
               <li>leverage continuous deployment in AutomateX to kick off an automated build process that generates site assets</li>
               <li>visit your demo project’s URL after AutomateX uploads site assets to a content delivery network (CDN) and makes your demo site available</li>
               <li>make changes to the example code and explore some key AutomateX features</li>
            </ui>
         </section>
         <section className=" p-2 pt-0 w-48 flex flex-col">
            <h1 className="text-xl font-bold pb-5">On this page</h1>
            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Get started with Automate X</Link>
            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Introduction</Link>
            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Before you begin</Link>
            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Deploy a project with AutomateX</Link>
         </section>
      </div>
   );
}

export default SideBar;

