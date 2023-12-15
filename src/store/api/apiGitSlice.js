import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_GITLAB_URL,
    prepareHeaders: async (headers) => {
        const session = await getSession();
        console.log('session', session);
        if (session) {
            headers.set("authorization", `Bearer ${session.user.token}`);
        }
        headers.set("Accept", "*/*");
        headers.set("User-Agent", "Thunder Client (https://www.thunderclient.com)");
        headers.set("Authorization", "Bearer glpat-zdCs4Z-SY7PUzRfB7Ct5");
        return headers;
    },
});

export const api = createApi({
    baseQuery,
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => "/projects",
            providesTags: ["GitProject"],
        }),
        getProject: builder.query({
            query: (id) => `/projects/${id}`,
            providesTags: ["GitProject"],
        }),
        createProject: builder.mutation({
            query: (body) => ({
                url: "/projects",
                method: "POST",
                body,
            }),
            invalidatesTags: ["GitProject"],
        }),
        updateProject: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/projects/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["GitProject"],
        }),
        deleteProject: builder.mutation({
            query: (id) => ({
                url: `/projects/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["GitProject"],
        }),
    }),
});

export const {
    useGetProjectsQuery,
    useGetProjectQuery,
    useCreateProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
} = api;
