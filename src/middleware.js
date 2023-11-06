import { withAuth } from "next-auth/middleware"

export default withAuth(
    function middleware(req) {
        // const { pathname } = req.nextUrl
        // console.log('pathname', pathname)
    }
)

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/admin','/admin/:path*'],
}