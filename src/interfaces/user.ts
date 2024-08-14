import { Role } from "src/auth/roles.enum";

export interface User {
  sub: string;
  email: string;
  name: string;
  roles: Role[];  // Assuming roles is an array of your Role enum
}