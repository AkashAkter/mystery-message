import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

// This is a Next.js middleware file that handles authentication
export { default } from "next-auth/middleware";

// This middleware checks if a user is authenticated and redirects them accordingly.
export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
  });

  const url = request.nextUrl;

  if (
    (token && url.pathname.startsWith("/sign-in")) ||
    url.pathname.startsWith("/sign-up") ||
    url.pathname.startsWith("/verify") ||
    url.password.startsWith("/")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

// This config specifies which paths the middleware should run on.

export const config = {
  matcher: ["/sign-in", "/sign-up", "/", "/dashboard/:path*", "/verify/:path*"],
};
