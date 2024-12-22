import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
  async function middleware(request: NextRequest) {
    // console.log("middleware");
  },
  {
    isReturnToCurrentPage: true,
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * auth routes
     * favicon.ico
     * robots.txt
     * images
     * login
     * homepage (represent with $ after beginning)
     */
    "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)",
  ],
};
