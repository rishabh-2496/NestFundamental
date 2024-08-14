import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import * as bcrypt from 'bcryptjs'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from "mongoose";
import { User } from "src/entities/User";

@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private userModel: Model<User>){}
    async signup(user:CreateUserDTO){
        const {email, name, password, roles} = user
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = {email,name,roles,password: hashedPassword}
        const result = await this.userModel.create(newUser)
        return {
            email:result.email,
            name:result.name,
            _id: result._id,
            roles: result.roles
        }
    }
    async findUserByEmail(email: string){
        return await this.userModel.findOne({email:email})
    }
}