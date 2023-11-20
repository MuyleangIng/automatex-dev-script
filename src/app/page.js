

import HeroSection from "@/components/HeroSection";
import {Suspense} from "react";
import Loading from "@/app/loading";

export default function Home({ onLoadingComplete }) {


    return (
        <> <Suspense fallback={<Loading />}>
        <HeroSection/>
        </Suspense>

       </>
    );
}
