import TabsComponents from "@/components/Tabs";
import SectionAppDeploy from "@/components/SectionAppDeploy";

export default function UserProjectPage(){
    return(
        <main className="w-full items-center p-5">
        <TabsComponents/>
            <div className="mt-10 mb-20">
                <SectionAppDeploy/>
            </div>

        </main>
    )
}