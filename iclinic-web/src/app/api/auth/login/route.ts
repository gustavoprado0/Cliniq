import { NextResponse } from "next/server";
import { UserRole } from "@/features/shared/types/role";

const fakeUser = {
  id: "1",
  name: "Gustavo",
  email: "teste@iclinic.com",
  password: "123456",
  role: "doctor" as UserRole,
};


export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (
    email !== fakeUser.email ||
    password !== fakeUser.password
  ) {
    return NextResponse.json(
      { message: "Email ou senha inválidos" },
      { status: 401 }
    );
  }

  const token = "fake-jwt-token";

  // ✅ cria a resposta
  const response = NextResponse.json({
    user: {
      id: fakeUser.id,
      name: fakeUser.name,
      email: fakeUser.email,
      role: fakeUser.role,
    },
  });

  // ✅ salva cookies (isso o middleware enxerga)
  response.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
  });

  response.cookies.set("role", fakeUser.role, {
    httpOnly: true,
    path: "/",
  });

  return response;
}
