import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getSession} from "next-auth/react";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: async (headers, {getState}) => {
        const session = await getSession();
        // headers.set("content-type", "application/json");
        // headers.set('Access-Control-Allow-Origin', '*')
        if (session) {
            headers.set("authorization", `Bearer ${session.user.email}`);
        }
        return headers;
    },
});
export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: [
        "Auth",
    ],
    endpoints: (builder) => ({}),
});