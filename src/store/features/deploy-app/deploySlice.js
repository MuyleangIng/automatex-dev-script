import { apiSlice } from "@/store/api/apiSlide";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
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
export const { useCreateDeploymentAppMutation } = userApiSlice;
