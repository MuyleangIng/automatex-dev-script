import ReportTable from "@/components/deploy-app/ReportTable";

export default function Report({params}){

    return(
        <div>
            <ReportTable params={params}/>
        </div>
    )
}