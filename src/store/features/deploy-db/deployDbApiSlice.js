import { apiSlice } from "@/store/api/apiSlide";

export const deploymentDbApiSlice = apiSlice.injectEndpoints ({
    endpoints: (builder) => ({
        getAllDeploymentDatabases: builder.query({
            query: ({ filters }) => ({
                url: `/databases`,
                method: 'GET',
                params: {
                    ...filters
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ["DeploymentDatabase"],
        }),
        getDeploymentDatabaseByUuid: builder.query({
            query: (uuid) => ({
                url: `/databases/${uuid}`,
                method: 'GET'
            }),
            keepUnusedDataFor: 5,
            providesTags: ["DeploymentDatabase"],
        }),
        createDeploymentDatabase: builder.mutation ({
            query: (db) => ({
                url: `/databases`,
                method: 'POST',
                body: appData,
            }),
            invalidatesTags: ["DeploymentDatabase"],
        }),
        updateDeploymentDatabase: builder.mutation ({
            query: (uuid) => ({
                url: `/databases/${uuid}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ["DeploymentDatabase"],
        }),
        deleteDeploymentDatabase: builder.mutation ({
            query: (uuid) => ({
                url: `/database/${uuid}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["DeploymentDatabase"],
        }),
    }),
});

export const {
    useGetAllDeploymentDatabasesQuery,
    useGetDeploymentDatabaseByUuidQuery,
    useCreateDeploymentDatabaseMutation,
    useUpdateDeploymentDatabaseMutation,
    useDeleteDeploymentDatabaseMutation
} = deploymentDbApiSlice;