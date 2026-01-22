// src/middleware/auth.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { roleRoutes } from "./features/shared/types/role";

// Função para redirecionar pro login
const redirectToLogin = (request: NextRequest) => {
  return NextResponse.redirect(new URL("/login", request.url));
};

// Função para redirecionar pro dashboard
const redirectToDashboard = (request: NextRequest) => {
  return NextResponse.redirect(new URL("/dashboard", request.url));
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  const { pathname } = request.nextUrl;

  // 🔒 Usuário não logado
  if (!token) return redirectToLogin(request);

  // 🔒 Role inexistente
  if (!role) return redirectToLogin(request);

  // 🔒 Verifica acesso por role
  const allowedRoutes = roleRoutes[role as keyof typeof roleRoutes] || [];
  const hasAccess = allowedRoutes.some(route => pathname.startsWith(route));

  if (!hasAccess) return redirectToDashboard(request);

  // ✅ Acesso liberado
  return NextResponse.next();
}

export const config = {
  matcher: ["/schedule/:path*", "/users/:path*"],
};
