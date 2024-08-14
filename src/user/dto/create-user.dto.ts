import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, IsEnum, IsOptional } from "class-validator";
import { Role } from "src/auth/roles.enum";


export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    @IsNotEmpty()
    email:string
    @IsString()
    @IsNotEmpty()
    @MinLength(8,{message:"Password must be atleast 8 characters long"})
    @MaxLength(20,{message:"Password is too long must be atmost 20 characters"})
    password:string
    @IsOptional()
    @IsEnum(Role,{each:true})
    roles?:Role[]
}