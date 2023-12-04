import { apiSlice } from "@/store/api/apiSlide";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createGitProject: builder.mutation({
            query: (projectData) => ({
                url: "/git/projects",
                method: "POST",
                body: projectData,
            }),
            invalidatesTags: ["requestUserRegister"],
        }),
        getGitProjects: builder.query({
            query: (id) => ({  // <-- Pass the ID as a parameter
                url: `/git/projects/${id}`,  // <-- Use the ID in the URL
                method: "GET",
            }),
        }),
    }),
});

// auto-generated hooks for createGitProject mutation (POST) and getGitProjects query (GET)
export const {
    useCreateGitProjectMutation,
    useGetGitProjectsQuery,
} = userApiSlice;