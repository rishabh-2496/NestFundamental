/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistModule } from './artist/artist.module';
import { AuthModule } from './auth/auth.module';
import { JWTStrategy } from './auth/jwt.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/spotifyClone'),
    ArtistModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, JWTStrategy],
})
export class AppModule {}
