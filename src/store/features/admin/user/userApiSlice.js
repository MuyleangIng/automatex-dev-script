import { apiSlice } from "@/store/api/apiSlide";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    findUsers: builder.query({
      query: () => "/users",
    }),
    removeUser: builder.mutation({
      query: (uuid) => ({
        url: `/users/${uuid}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useFindUsersQuery, useRemoveUserMutation } = userApiSlice;
