import { CreateUserDTO } from "./dto/create-user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signup(user: CreateUserDTO): Promise<{
        email: string;
        name: string;
        _id: import("mongoose").Types.ObjectId;
        roles: import("../auth/roles.enum").Role[];
    }>;
}
