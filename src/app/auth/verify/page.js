import React from 'react';
import AXVerify from "@/app/auth/verify/AXVeify";

const desc ="Welcome to SurveyBox, please click button below to fill your Information";
export const metadata = {
    title: 'Verify',
    description: desc,
}
function Page() {
    return (
        <AXVerify/>
    );
}
export default Page;