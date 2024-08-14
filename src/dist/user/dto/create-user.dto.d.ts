import { Role } from "src/auth/roles.enum";
export declare class CreateUserDTO {
    name: string;
    email: string;
    password: string;
    roles?: Role[];
}
