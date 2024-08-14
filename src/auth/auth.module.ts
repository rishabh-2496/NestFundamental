import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';


@Module({
    imports:[
        UserModule,
        PassportModule,
        JwtModule.register({
            secret:"12346578",
            signOptions:{expiresIn:'60m'}
        })
    ],
    controllers:[AuthController],
    providers:[AuthService]
})
export class AuthModule {}
