import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose'
import { Model } from "mongoose";
import { Artist } from "src/entities/Artist";
import { ArtistDTO } from "./dto/create-artist.dto";

@Injectable()
export class ArtistRepository{
    constructor(@InjectModel(Artist.name) private artistModel:Model<Artist>){}
    findAllArtist(){
        return this.artistModel.find()
    }
    async createArtist(artist: ArtistDTO){
        return await this.artistModel.create(artist)
    }
    async updateArtist(id: string, body: ArtistDTO){
        return await this.artistModel.findByIdAndUpdate(id, body, {new: true})
    }
    async deleteArtist(id:string){
        return await this.artistModel.findByIdAndDelete(id)
    }
    async getArtistById(id:string){
        return await this.artistModel.findById(id)
    }
}
