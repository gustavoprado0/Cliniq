import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect("/login");
  response.cookies.set("token", "", { path: "/", maxAge: 0 });
  response.cookies.set("role", "", { path: "/", maxAge: 0 });

  return response;
}
