import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const refreshTokenApiCall = async (token) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL + '/auth/refresh-token';
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.refreshToken}`,
        },
    });

    if (res.ok) {
        const data = await res.json();
        return {
            ...token,
            error: null,
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
            expiresIn: Date.now() + parseInt(data.expires_in) * 1000 - 2000,
        };
    } else {
        throw new Error("RefreshTokenTokenError");
    }
};

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                },
                email: {
                    label: "Email",
                    type: "email",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                console.log("cd:",credentials)
                const resp = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/auth/login", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: credentials.username,
                        email: credentials.email,
                        password: credentials.password,
                        loginKey: "Y71o29qo8RIwIBMRClJWfg=="
                    }),
                });
                const res = await resp.json();
                console.log("respone:",res)
                if (resp.ok && res){
                    console.log("hello")
                    const user = { id: res.user.uuid , name: res.refreshToken, email: res.accessToken }
                    return user
                }
                if (!res.ok) {
                    throw new Error(JSON.stringify(res));
                }
                return null
            }
        })

    ],

    pages: {
        signIn: "/auth/login",
        newUser: "/auth/signup",
    },
    session:{
        strategy:'jwt'
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
