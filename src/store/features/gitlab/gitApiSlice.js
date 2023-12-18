// import {gitApi} from "@/store/api/apiGitSlice";
//
// export const apiGit = gitApi.injectEndpoints({
//     endpoints: (builder) => ({
//         getProjects: builder.query({
//             query: () => "/projects",
//             providesTags: ["GitProject"],
//         }),
//         getProject: builder.query({
//             query: (id) => `/projects/${id}`,
//             providesTags: ["GitProject"],
//         }),
//         createProject: builder.mutation({
//             query: (body) => ({
//                 url: "/projects",
//                 method: "POST",
//                 body,
//             }),
//             invalidatesTags: ["GitProject"],
//         }),
//         updateProject: builder.mutation({
//             query: ({ id, ...body }) => ({
//                 url: `/projects/${id}`,
//                 method: "PUT",
//                 body,
//             }),
//             invalidatesTags: ["GitProject"],
//         }),
//         deleteProject: builder.mutation({
//             query: (id) => ({
//                 url: `/projects/${id}`,
//                 method: "DELETE",
//             }),
//             invalidatesTags: ["GitProject"],
//         }),
//     }),
// });
//
// // auto-generated hooks for createProject mutation (POST) and getProjects query (GET)
// export const {
//     useGetProjectsQuery,
//     useGetProjectQuery,
//     useCreateProjectMutation,
//     useUpdateProjectMutation,
//     useDeleteProjectMutation,
// } = apiGit;
// export default apiGit;