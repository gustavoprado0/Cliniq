export type UserRole = "patient" | "doctor" | "admin";
export const roleRoutes = {
    patient: ["/schedule"],
    doctor: ["/schedule"],
    admin: ["/schedule", "/users"],
  } as const;