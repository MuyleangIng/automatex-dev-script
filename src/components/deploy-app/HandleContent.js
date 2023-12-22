import React, {createElement} from 'react';
import LoadingIndicator from "@/components/LoadingIndicator";
import ErrorHandling from "@/components/deploy-app/ErrorHandling";
import {useSession} from "next-auth/react";

function HandleContent({children,isLoading,error,disabledErrorCode,loadingComponent=LoadingIndicator,customLoadingContent,...props}) {
    const {status}=useSession()
    if (isLoading || status === 'loading'){
        if (customLoadingContent) {
            return (
                <>
                    {customLoadingContent}
                </>
            )
        }else{
            return createElement(loadingComponent, props)
        }
    }

    if (error){
        if (disabledErrorCode!==error.status){
            switch (error.status) {
                case 400:
                    return (<ErrorHandling message={"Bad request"} code={error.status}/>)
                case 401:
                    return (<ErrorHandling message={"Unauthorized"} code={error.status}/>)
                case 404:
                    return (<ErrorHandling message={"Not Found"} code={error.status}/>)
                case 403:
                    return (<ErrorHandling message={"Forbidden"} code={error.status}/>)
                case 500:
                    return (<ErrorHandling message={"Internal server error"} code={error.status}/>)
                default:
                    return (<ErrorHandling message={"Something went wrong!!!"} code={error.status}/>)
            }
        }
    }
    return children;
}

export default HandleContent;