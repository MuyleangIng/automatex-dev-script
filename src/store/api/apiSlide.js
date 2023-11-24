import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    logout,
    setCredentials,
    setCurrentUser,
} from "../features/auth/authSlice";
import { getDecryptedRefreshToken } from "@/lib/cryptography";
import { useRouter } from "next/router";

// create base query with authentication
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        // const token = getState().auth.accessToken;
        // Get the auth state from Redux store
        // const authState = getState().auth.;
        console.log(authState);
        const token = authState.accessToken;
        console.log(token)
        headers.set("content-type", "application/json");
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

// custom base query with re-authentication when token expires
const baseQueryWithReAuth = async (args, api, extraOptions) => {
    let result;
    try {
        result = await baseQuery(args, {
            ...api,
        }, extraOptions);

        if (result?.data?.code === 401) {
            const refreshToken = await getDecryptedRefreshToken();
            if (!refreshToken) {
                const router = useRouter();
                await router.push("/");
            } else {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ refreshToken }),
                    }
                );
                const resultResponse = await response.json();

                if (resultResponse.code === 200) {
                    api.dispatch(setCredentials(resultResponse.data));

                    // set user data
                    const userResponse = await fetch(
                        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${resultResponse.data.accessToken}`,
                            },
                        }
                    );
                    const userResult = await userResponse.json();
                    api.dispatch(setCurrentUser(userResult));

                    result = await baseQuery(args, {
                        ...api,
                    }, extraOptions);
                } else if (resultResponse.code === 404) {
                    api.dispatch(logout());
                    alert("Your session has expired. Please login again.");
                }
            }
        }
    } catch (error) {
        console.error("Error in baseQueryWithReAuth:", error);
    }

    return result;
};

// create api slice with custom base query
export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({}),
});
