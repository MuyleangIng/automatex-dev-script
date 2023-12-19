import { createApi, fetchBaseQuery, createSlice } from '@reduxjs/toolkit';
import { getSession } from "next-auth/react";

// Define the async thunk
export const fetchGitProjects = async () => {
    const { gitToken } = await getSession() || {};
    const headers = new Headers();
    headers.set("Accept", "*/*");
    headers.set("User-Agent", "Thunder Client (https://www.thunderclient.com)");
    if (gitToken) headers.set("Authorization", `Bearer ${gitToken}`);
    const response = await fetch(`${process.env.NEXT_PUBLIC_GITLAB_URL}/projects`, { method: "GET", headers });
    if (!response.ok) throw new Error("Failed to fetch Git projects");

    const data = await response.json();
    console.log('Data from GitLab API:', data); // Log the data

    return data;
};

// Create the Git API
// export const gitApi = createApi({
//     reducerPath: "gitApi",
//     baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_GITLAB_URL }),
//     endpoints: (builder) => ({
//         getProjects: builder.query({ query: fetchGitProjects }),
//     }),
// });

// Create a slice for the Git API
// export const gitSlice = createSlice({
//     name: "git",
//     initialState: { projects: [] },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addMatcher(gitApi.endpoints.getProjects.matchFulfilled, (state, action) => {
//             state.projects = action.payload;
//         });
//     },
// });

// Export the generated hooks from gitApi
// export const { useGetProjectsQuery } = gitApi.endpoints;
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getSession } from "next-auth/react";
//
// const baseQuery = fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_GITLAB_URL,
//     prepareHeaders: async (headers) => {
//         const session = await getSession();
//         console.log('session', session);
//         if (session) {
//             const { gitToken } = session;
//             if (gitToken) {
//                 headers.set("Authorization", `Bearer ${gitToken}`);
//             }
//         }
//         headers.set("Accept", "*/*");
//         headers.set("User-Agent", "Thunder Client (https://www.thunderclient.com)");
//         return headers;
//     },
// });
//
// export const gitApi = createApi({
//     baseQuery,
//     tagTypes: ["GitProject"],
//     endpoints: (builder) => ({}),
// });


