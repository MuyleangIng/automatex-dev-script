import { apiSlice } from "@/store/api/apiSlide";

export const deploymentAppApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllDeploymentApps: builder.query({
            query: ({ page, limit }) => ({
                url: `/deploy-apps?page=${page}&limit=${limit}`,
                method: "GET",
            }),
            providesTags: ["requestAllDeploymentApps"],
        }),
        getSingleDeployment: builder.query({
            query: (uuid) => ({
                url: `/deploy-apps/${uuid}`,
                method: "GET",
            }),
            providesTags: ["requestSingleDeployment"],
        }),
        createDeploymentApp: builder.mutation({
            query: (appData) => ({
                url: "/deploy-apps",
                method: "POST",
                body: appData,
            }),
            invalidatesTags: ["requestUserRegister"],
        }),
    }),
});

// auto-generated hooks for createDeploymentApp mutation (POST)
export const {
    useCreateDeploymentAppMutation,
    useGetAllDeploymentAppsQuery,
    useGetSingleDeploymentQuery } = deploymentAppApiSlice;
