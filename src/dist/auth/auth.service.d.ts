import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from './dto/login.dto';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    validate(email: string, password: string): Promise<{
        name: string;
        email: string;
        roles: import("./roles.enum").Role[];
        _id: import("mongoose").Types.ObjectId;
    }>;
    login(loginInfo: LoginDTO): Promise<{
        access_token: string;
    }>;
}
