// Import necessary modules
import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import Link from 'next/link';
import {usePathname, useRouter} from "next/navigation";

// Define the HandleNavbar component
function HandleNavbar() {
    const router = useRouter()
    const pathname = usePathname();

  if (
      pathname ===  "/login" ||
      pathname === "/signup"
  ){
      return null;
  }
    return (
        <Navbar fluid rounded className="sticky top-0 z-50">
            <Navbar.Brand href="/" as={Link}>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AutomateX</span>
            </Navbar.Brand>

            {/* Navbar items */}
            <div className="flex md:order-2 space-x-3">
                {/* Sign Up Button */}
                <button
                    onClick={() => router.push("/signup")}
                    type="button"
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                >
          <span className="relative text-base px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Sign Up
          </span>
                </button>

                {/* Login Button */}
                <button
                    onClick={() => router.push("/login")}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span className="relative text-base px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Login
          </span>
                </button>

                {/* Navbar Toggle for small screens */}
                <Navbar.Toggle />
            </div>

            {/* Navbar.Collapse for smaller screens */}
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">Feature & Service</Navbar.Link>
                <Navbar.Link href="#">Document</Navbar.Link>
                <Navbar.Link href="#">Start building</Navbar.Link>
                <Navbar.Link href="#">About us</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HandleNavbar;
