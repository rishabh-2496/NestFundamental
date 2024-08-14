import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import {Artist, ArtistSchema} from '../entities/Artist'
import { ArtistController } from './artist.controller';
import { AristService } from './artist.service';
import { ArtistRepository } from './artist.repository';

@Module({
    imports:[MongooseModule.forFeature([{name:Artist.name,schema:ArtistSchema}])],
    controllers:[ArtistController],
    providers:[AristService,ArtistRepository]
})
export class ArtistModule {
}
