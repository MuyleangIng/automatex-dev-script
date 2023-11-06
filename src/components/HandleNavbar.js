'use client';
import React from 'react';
import {Button, Navbar} from "flowbite-react";
import Link from "next/link";

function HandleNavbar() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/" as={Link}>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AutomateX</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button>Get started</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HandleNavbar;