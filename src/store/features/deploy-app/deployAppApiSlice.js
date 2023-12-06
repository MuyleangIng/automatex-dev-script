import { apiSlice } from "@/store/api/apiSlide";

export const deployAppApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllDeploymentApps: builder.query({
            query: ({ page, limit }) => ({
                url: `/deploy-apps?page=${page}&limit=${limit}`,
                method: "GET",
            }),
            providesTags: ["DeploymentApps"],
        }),
        getSingleDeployment: builder.query({
            query: (uuid) => ({
                url: `/deploy-apps/${uuid}`,
                method: "GET",
            }),
        }),
        createDeploymentApp: builder.mutation({
            query: (appData) => ({
                url: "/deploy-apps",
                method: "POST",
                body: appData,
            }),
        }),
        getConsoleLogs: builder.query({
            query: (uuid) => ({
                url: `/deploy-apps/console-latest-output/${uuid}`,
                method: "GET",
            }),
        }),
    }),
});

// auto-generated hooks for createDeploymentApp mutation (POST)
export const {
    useCreateDeploymentAppMutation,
    useGetAllDeploymentAppsQuery,
    useGetSingleDeploymentQuery,
    useGetConsoleLogsQuery,
    useLazyGetSingleDeploymentQuery
} = deployAppApiSlice;
