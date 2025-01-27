// this the extended slice for auth
import { apiSlice } from "../../api/apiSlide";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // build.mutation is used for POST, PUT, DELETE
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: { ...credentials },
            }),
        }),
        register: builder.mutation({
            query: (userData) => ({
                url: "/auth/register",
                method: "POST",
                body: { ...userData },
            }),
        }),
        verifyEmail: builder.mutation({
            query: ({  email, verifyCode }) => ({
                url: '/auth/verify',
                method: 'GET',
                params: {
                    email,
                    verifyCode,
                },
            }),
        }),
        update: builder.mutation({
            query: (userData) => ({
                url: "/auth/me/update",
                method: "PUT",
                body: { ...userData },
                providesTags: ["User"],
            }),
        }),
    }),
});
// auto generated hooks for login mutation
export const { useRegisterMutation, useLoginMutation,useVerifyEmailMutation,useUpdateMutation } = authApiSlice;
export default authApiSlice;
