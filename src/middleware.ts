import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, response: NextResponse) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/register";
  const token = request.cookies.get("token");

  if (token) {
    const newToken = token?.value || ""
    if (isPublicPath && newToken) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    if (!isPublicPath && !newToken) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/:user*"],
};
