import { apiSlice } from "@/store/api/apiSlide";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => "/auth/me",
            keepUnusedDataFor: 5,
            providesTags: ["User"],
            onSuccess: (data) => {
                console.log('getUser query succeeded:', data);
            },
        }),
        getRequestUserGoogleByEmail: builder.query({
            query: (email) => `/auth/google-get-me/${email}`,
            providesTags: ["requestUser"],
        }),
        getRequestUserByUuid: builder.query({
            query: (uuid) => `/users/${uuid}`,
            providesTags: ["requestUser"],
        }),
        updateRequestUser: builder.mutation({
            query: ({ uuid, ...user}) => ({
                url: `/users/${uuid}`,
                method: "PUT",
                body: user,
            }),
            invalidatesTags: ["requestUser"],
        }),
        createRequestWithGoogle: builder.mutation({
            query: (google) => ({
                url: "/auth/google",
                method: "POST",
                body: google,
            }),
            invalidatesTags: ["requestGoogle"],
        }),
        createRequestSendMail: builder.mutation({
            query: (mail) => ({
                url: "/auth/forgot-password",
                method: "POST",
                body: mail,
            }),
            invalidatesTags: ["requestMail"],
        }),
        updateRequestForgotPassword: builder.mutation({
            query: ({ verificationCode, email, password, confirmPassword }) => ({
                url: `/auth/reset-password`,
                method: "POST",
                body: JSON.stringify({
                    email,
                    password,
                    confirmPassword,
                    verificationCode,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: ["requestPassword"],
        }),
        createRequestRegisterUser: builder.mutation({
            query: (user) => ({
                url: "/auth/register",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["requestUserRegister"],
        }),
        users:builder.query({
            query: () => ({
                url: `/users`,
                method: "GET",
            }),
        })
    }),
});

// auto generated hooks for getUser query (GET)
export const {
    useGetRequestUserGoogleByEmailQuery,
    useGetRequestUserByUuidQuery,
    useUpdateRequestUserMutation,
    useUpdateRequestForgotPasswordMutation,
    useGetUserQuery,
    useCreateRequestRegisterUserMutation,
    useCreateRequestSendMailMutation,
    useCreateRequestWithGoogleMutation,
    useUsersQuery,
} = userApiSlice;