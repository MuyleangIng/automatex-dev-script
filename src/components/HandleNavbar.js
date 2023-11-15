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
    //   pathname === "/document" 


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
                <button onClick={() => router.push("/signup")}
                        type="button" className="focus:outline-none text-white bg-orange-200 hover:bg-orange-100 focus:ring-4 focus:ring-orange-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">SignUp</button>

                {/* Login Button */}
                <button
                    onClick={() => router.push("/login")}
                    type="button" className="text-cool-blue-300 hover:text-white border border-cool-blue-150 hover:bg-cool-blue-200 focus:ring-4 focus:outline-none focus:ring-cool-blue-80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Login</button>

                {/* Navbar Toggle for small screens */}
                <Navbar.Toggle />
            </div>

            {/* Navbar.Collapse for smaller screens */}
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">Feature & Service</Navbar.Link>
                <Navbar.Link href="/document">Document</Navbar.Link>
                <Navbar.Link href="#">Start building</Navbar.Link>
                <Navbar.Link href="#">About us</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HandleNavbar;
