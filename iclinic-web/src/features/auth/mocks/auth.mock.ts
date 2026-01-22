import { User } from "@/features/shared/types/user";

export const authMock: User[] = [
  {
    id: "1",
    name: "Admin Clínica",
    email: "admin@clinic.com",
    role: "admin",
  },
  {
    id: "2",
    name: "Dr João",
    email: "doctor@clinic.com",
    role: "doctor",
  },
  {
    id: "3",
    name: "Maria",
    email: "patient@clinic.com",
    role: "patient",
  },
];