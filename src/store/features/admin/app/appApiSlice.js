import { apiSlice } from "@/store/api/apiSlide";

export const appApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    findApps: builder.query({
      query: (param = "") => `/deploy-apps${param}`,
    }),
    removeApp: builder.mutation({
      query: (uuid) => ({
        url: `/deploy-apps/${uuid}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useFindAppsQuery, useRemoveAppMutation } = appApiSlice;
