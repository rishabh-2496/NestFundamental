import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UserService } from "./user.service";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Post()
    async signup(@Body() user:CreateUserDTO){
        return await this.userService.signup(user)
    }
}