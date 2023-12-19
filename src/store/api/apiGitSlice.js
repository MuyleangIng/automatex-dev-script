import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSession } from 'next-auth/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_GITLAB_URL,
    prepareHeaders: async (headers) => {
        const session = await getSession();
        console.log('session', session);
        if (session) {
            const { gitToken } = session;
            if (gitToken) {
                headers.set("Authorization", `Bearer ${gitToken}`);
            }
        }
        headers.set("Accept", "*/*");
        headers.set("User-Agent", "Thunder Client (https://www.thunderclient.com)");
        return headers;
    },
});

 const fetchGitProjects = createAsyncThunk(
    'projects/fetchGitProjects',
    async () => {
        const url = `${process.env.NEXT_PUBLIC_GITLAB_URL + "/projects"}`;
        console.log('Request URL:', url);
        const response = await baseQuery(url, { method: "GET" });
        console.log('Response:', response);
        // const data = response.data;
        // console.log('Data from GitLab API:', data);
        const data = await response.data;
        console.log('Data from GitLab API:', data);
        return data;
    }
);

const gitSlice = createSlice({
    name: "git",
    initialState: { projects: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGitProjects.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGitProjects.fulfilled, (state, action) => {
                console.log('Fulfilled action payload:', action.payload);
                state.status = 'succeeded';
                state.projects = state.projects.concat(action.payload);
            })
            .addCase(fetchGitProjects.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
// export const selectResponseVote = state => state.responsesVote.vote
export const selectAllProjects = (state) => state.git.projects;
export default gitSlice.reducer;
export { fetchGitProjects };

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


