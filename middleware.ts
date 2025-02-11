import { NextResponse } from "next/server";

export function middleware() {
  //   return NextResponse.json({ message: "Hello, World!" });
}

export const config = {
  matcher: "/api/:path*", // Match all paths starting with /api
};
