import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Security Headers
  res.headers.set("X-Frame-Options", "DENY"); // Prevent iframe embedding
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; img-src *; media-src *; script-src 'self'; style-src 'self' 'unsafe-inline'"
  );

  return res;
}
