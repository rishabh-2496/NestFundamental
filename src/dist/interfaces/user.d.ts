import { Role } from "src/auth/roles.enum";
export interface User {
    sub: string;
    email: string;
    name: string;
    roles: Role[];
}
