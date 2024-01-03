import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const middleware = async (req) => {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const session = await getToken({ req });
    const url = req.nextUrl.clone();
    url.pathname = "/";
    if (session) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${session.email}`,
        },
      });
      if (res.status === 200) {
        const user = await res.json();
        if (user.currentRoles[0] !== "ADMIN") {
          return NextResponse.redirect(url);
        }
      } else if (res.status === 401) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refreshToken: session.name }),
          }
        );
        if (res.status === 200) {
          const user = await res.json();
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`,
            {
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            }
          );
          if (response.status === 200) {
            const user = await response.json();
            if (user.currentRoles[0] !== "ADMIN") {
              return NextResponse.redirect(url);
            }
          } else {
            return NextResponse.redirect(url);
          }
        } else {
          return NextResponse.redirect(url);
        }
      } else {
        return NextResponse.redirect(url);
      }
    } else {
      return NextResponse.redirect(url);
    }
  }
};

export default withAuth(middleware);

export const config = {
  matcher: ["/admin/:path*", "/app/:path*"],
};
