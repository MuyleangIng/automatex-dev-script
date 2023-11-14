// Import necessary modules
import React from 'react';
import {Button, Navbar} from 'flowbite-react';
import Link from 'next/link';
import {usePathname, useRouter} from "next/navigation";
import {FaUserPlus} from "react-icons/fa";
import {IoLogInOutline} from "react-icons/io5";

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

    return (<Navbar container rounded className={"cus-navbar  sticky top-0 left-0 z-50 lg:px-3"}>
            <Navbar.Brand>
                <img
                    unoptimized
                    width={100}
                    height={100}
                    alt="Logo"
                    className=" w-14 h-14 object-contain"
                    src="/mainlogo.png"
                />
                <span className="self-center text-xl font-bold whitespace-nowrap">
                    <span className="text-orange-100">Automate</span>
                    <span className="text-cool-blue-100">X</span>
                </span>

            </Navbar.Brand>
            <div className={"flex items-center gap-2 flex md:order-2"}>
                <Button className={"bg-orange-100"} onClick={() => router.push("/signup")}>
                   <span className={"lg:px-3 uppercase  flex gap-2"}>
                      <FaUserPlus className="h-5 w-5"/>
                       <span className={"hidden lg:inline"}>Sign Up</span>
                   </span>
                </Button>
                <Button className={"bg-orange-100"} outline onClick={() => router.push("/login")}>
                    <span className={"lg:px-3 uppercase flex gap-2"}>
                        <IoLogInOutline className="h-5 w-5"/>
                        <span className={"hidden lg:inline"}>Sign In</span>
                    </span>
                </Button>
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link className={`font-normal text-lg ${pathname === '/' ? 'text-orange-500' : 'text-gray-600'}`} href="/">Home</Navbar.Link>
                <Navbar.Link className={"font-normal text-lg"} href="#">Feature & Service</Navbar.Link>
                <Navbar.Link className={"font-normal text-lg"} href="#">Document</Navbar.Link>
                <Navbar.Link className={`font-normal text-lg ${pathname === '/startbuilding' ? 'text-orange-500' : 'text-gray-600'}`} href="/startbuilding">Start Building</Navbar.Link>
                <Navbar.Link className={"font-normal text-lg"} href="#">About Us</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>);
}

export default HandleNavbar;
