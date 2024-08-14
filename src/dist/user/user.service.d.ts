import { CreateUserDTO } from "./dto/create-user.dto";
import { Model } from "mongoose";
import { User } from "src/entities/User";
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    signup(user: CreateUserDTO): Promise<{
        email: string;
        name: string;
        _id: import("mongoose").Types.ObjectId;
        roles: import("../auth/roles.enum").Role[];
    }>;
    findUserByEmail(email: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
