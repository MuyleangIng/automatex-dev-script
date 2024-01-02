import { apiSlice } from "@/store/api/apiSlide";

export const databaseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    findDatabases: builder.query({
      query: () => "/databases",
    }),
    removeDatabase: builder.mutation({
      query: (uuid) => ({
        url: `/databases/${uuid}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useFindDatabasesQuery, useRemoveDatabaseMutation } = databaseApiSlice;
