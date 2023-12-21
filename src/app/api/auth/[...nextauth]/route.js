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
                gitToken: {
                    label: "GitToken",
                    type: "text",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
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
                // res.accessGitToken = undefined;

                if (resp.ok && res){
                    return {
                        id: res.user.uuid, name: res.refreshToken, email: res.accessToken,
                        gitToken: res.gitAccessToken

                    };
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
     callbacks :{
        async jwt({token, user}) {
            // Persist the OAuth access_token to the token right after signin
            // console.log('token in rote.js', token)
            // console.log('account rote.js', user)
            if (token && user) {
                return {
                    ...token,
                    accessToken: user.accessToken,
                    refreshToken: user.refreshToken,
                    expiresIn: Date.now() + parseInt(user.expiresIn) * 1000 - 2000,
                    gitToken: user.gitToken,
                };

            }
            return token
        },
         async session ({ session, token, user }) {
            // console.log("user in route.js", user)
             session.accessToken = token.accessToken
                session.refreshToken = token.refreshToken
                session.expiresIn = token.expiresIn
                session.gitToken = token.gitToken
             return session
         }
    },

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
