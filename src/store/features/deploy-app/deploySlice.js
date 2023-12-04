import { apiSlice } from "@/store/api/apiSlide";

export const deploymentAppApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createDeploymentApp: builder.mutation({
            query: (appData) => ({
                url: "/deploy-apps",
                method: "POST",
                body: appData,
            }),
            invalidatesTags: ["requestUserRegister"],
        }),
        getAllDeploymentApps: builder.query({
            // query: () => `votes`,
            query: ({page,limit,filters}) => ({
                url: "/deploy-apps",
                params: {
                    page,
                    limit,
                    ...filters
                },
            }),
            keepUnusedDataFor: 5, // keep unused data in cache for 5 seconds
            providesTags: ["DeploymentApp"], // provideTags are used for updating cache
        }),
    }),
});

// auto-generated hooks for createDeploymentApp mutation (POST)
export const {
    useCreateDeploymentAppMutation, useGetAllDeploymentAppsQuery } = deploymentAppApiSlice;
