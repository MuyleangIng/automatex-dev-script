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
        }),
        createDeploymentDatabase: builder.mutation ({
            query: (db) => ({
                url: `/databases`,
                method: 'POST',
                body: db,
            }),
        }),
        updateDeploymentDatabase: builder.mutation ({
            query: (uuid) => ({
                url: `/databases/${uuid}`,
                method: 'PUT',
                body,
            }),
        }),
        deleteDeploymentDatabase: builder.mutation ({
            query: (uuid) => ({
                url: `/databases/${uuid}`,
                method: 'DELETE',
            }),
        }),
        buildDeploymentDatabase: builder.mutation ({
            query: (uuid) => ({
                url: `/databases/${uuid}/build`,
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useGetAllDeploymentDatabasesQuery,
    useLazyGetAllDeploymentDatabasesQuery,
    useGetDeploymentDatabaseByUuidQuery,
    useCreateDeploymentDatabaseMutation,
    useUpdateDeploymentDatabaseMutation,
    useDeleteDeploymentDatabaseMutation,
    useBuildDeploymentDatabaseMutation,
} = deploymentDbApiSlice;