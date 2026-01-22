export const AuthService = {
  login: async (data: { email: string; password: string }) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Email ou senha inválidos");
    }

    return response.json();
  },
};
