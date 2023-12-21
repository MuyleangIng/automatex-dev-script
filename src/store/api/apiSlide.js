import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {getSession} from "next-auth/react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

// create base query with authentication
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders : async (headers) => {
        const session= await getSession();
        if (session) {
            headers.set("authorization", `Bearer ${session.user.email}`);
        }
        return headers;
    },
});


// custom base query with re-authentication when token expires
const BaseQueryWithReAuth = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
        const session= await getSession();
        console.log('sessionapi', session)
        if (session){
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({refreshToken: session.user.name}),
                }
            );
            const resultResponse = await response.json();
            if(resultResponse?.accessToken){
                return fetchBaseQuery({
                    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
                    prepareHeaders : async (headers) => {
                        const session= await getSession();
                        if (session) {
                            headers.set("authorization", `Bearer ${resultResponse.accessToken}`);
                        }
                        return headers;
                    },
                });
            }else {
                console.error("refresh token failed");
                return result;
            }
        }
    }
    return result;
};

// create api slice with custom base query
export const apiSlice = createApi({
    baseQuery: BaseQueryWithReAuth,
    tagTypes: [
        "DeploymentApps",
        "GitProject",
        "User",
    ],
    endpoints: (builder) => ({}),
});
