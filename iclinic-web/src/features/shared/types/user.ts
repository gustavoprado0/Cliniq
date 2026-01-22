import { UserRole } from "./role";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};