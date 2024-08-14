import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs'
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
    private readonly jwtService: JwtService, 
    private readonly userService: UserService
   ){}

    async validate(email:string, password:string){
        const user = await this.userService.findUserByEmail(email) 
        if(user && (await bcrypt.compare(password,user.password))){
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {password, ...result} = user.toObject()
            return result
        }
    }
    
    async login(loginInfo:LoginDTO){
        const user = await this.validate(loginInfo.email,loginInfo.password)
        if(!user){
            throw new UnauthorizedException("Invalid Credentials")
        }
        const payload = {email: user.email, sub:user._id, roles:user.roles,name:user.name}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}

