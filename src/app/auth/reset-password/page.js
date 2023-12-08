import NewPassword from "@/app/auth/reset-password/components/AXNewPwd";
import React from 'react';
import Image from "next/image";
export const metadata = {
    title: 'New Password',
}


function Page() {
    return (
        <section className="my-24">
            <NewPassword />
        </section>

    );
}

export default Page;