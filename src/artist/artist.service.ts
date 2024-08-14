import {Injectable} from "@nestjs/common"
import { ArtistRepository } from "./artist.repository"
import { ArtistDTO } from "./dto/create-artist.dto"

@Injectable()
export class AristService{
    constructor(private artistRepository: ArtistRepository){}
    findAllArtist(){
       return this.artistRepository.findAllArtist() 
    }
    async createArtist(artist:ArtistDTO){
        return await this.artistRepository.createArtist(artist)
    }

    async updateArtist(id:string, artist:ArtistDTO){
        return await this.artistRepository.updateArtist(id, artist)
    }
    
    async getArtistById(id:string){
        return await this.artistRepository.getArtistById(id)
    }

    async deleteArtist(id:string){
        return await this.artistRepository.deleteArtist(id)
    }
}