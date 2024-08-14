import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AristService } from "./artist.service";
import { ArtistDTO } from "./dto/create-artist.dto";
import { JWTAuthGuard } from "src/auth/guards/JWTAuth.guard";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { Roles } from "src/auth/decorator/roles.decorator";
import { Role } from "src/auth/roles.enum";


@Controller('artist')
export class ArtistController {
    constructor(private artistService: AristService){}
    @Get()
    @UseGuards(JWTAuthGuard)
    findAllArtist(){
        this.artistService.findAllArtist()
    }
    @Post()
    @UseGuards(JWTAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    async createArtist(@Body() artist: ArtistDTO){
        const response = await this.artistService.createArtist(artist)
        return {
            message:"success",
            artist: response
        }
    }

    @Put(':id')
    @UseGuards(JWTAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    async updateArtist(@Body() artist: ArtistDTO, @Param('id') id: string){
        const response = await this.artistService.updateArtist(id, artist)
        return {
            message:"success",
            artist: response
        }
    }
    
    @Get(':id')
    @UseGuards(JWTAuthGuard)
    async getArtistById(@Param('id') id: string){
        const response = await this.artistService.getArtistById(id)
        return {
            message:"success",
            artist: response
        }
    }

    @Delete(':id')
    @UseGuards(JWTAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    async deleteArtist(@Param('id') id: string){
        const response = await this.artistService.deleteArtist(id)
        return {
            message:"success",
            artist: response
        }
    }
}