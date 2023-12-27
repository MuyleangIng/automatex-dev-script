import { apiSlice } from "@/store/api/apiSlide";

export const deployAppApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllDeploymentApps: builder.query({
            query: ({ filters }) => ({
                url: `/deploy-apps`,
                params:{
                    ...filters
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ["DeploymentApps"],
        }),
        getSingleDeployment: builder.query({
            query: (uuid) => ({
                url: `/deploy-apps/${uuid}`
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
        getConsoleLogByBuildNumber: builder.query({
            query: (args) => {
                const { uuid, number } = args;
                return `/deploy-apps/console-latest-output/${uuid}/${number}`
            },
        }),
        getTrivyReportByBuildNumber: builder.query({
            query(arg) {
                const { uuid, number } = arg;
                return `/deploy-apps/trivy-report/${uuid}/${number}`
            }

        }),
        getActivities: builder.query({
            query: (uuid) => ({
                url: `/deploy-apps/activities/${uuid}`,
                method: "GET",
            }),
        }),
        deleteDeploymentApp: builder.mutation({
            query: (uuid) => ({
                url: `/deploy-apps/${uuid}`,
                method: "DELETE",
            }),
            invalidatesTags: ["DeploymentApps"],
        }),
        buildPublicDeploymentApp: builder.mutation({
            query: (uuid) => ({
                url: `/deploy-apps/build-app/${uuid}`,
                method: "POST",
            }),
        }),
    }),
});

// auto-generated hooks for createDeploymentApp mutation (POST)
export const {
    useDeleteDeploymentAppMutation,
    useCreateDeploymentAppMutation,
    useBuildPublicDeploymentAppMutation,
    useLazyGetAllDeploymentAppsQuery,
    useGetSingleDeploymentQuery,
    useGetConsoleLogsQuery,
    useLazyGetConsoleLogsQuery,
    useLazyGetSingleDeploymentQuery,
    useGetActivitiesQuery,
    useLazyGetActivitiesQuery,
    useGetTrivyReportByBuildNumberQuery,
    useGetConsoleLogByBuildNumberQuery,
    useLazyGetConsoleLogByBuildNumberQuery,
} = deployAppApiSlice;
