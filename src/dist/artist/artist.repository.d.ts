import { Model } from "mongoose";
import { Artist } from "src/entities/Artist";
import { ArtistDTO } from "./dto/create-artist.dto";
export declare class ArtistRepository {
    private artistModel;
    constructor(artistModel: Model<Artist>);
    findAllArtist(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Artist> & Artist & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, Artist> & Artist & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Artist, "find", {}>;
    createArtist(artist: ArtistDTO): Promise<import("mongoose").Document<unknown, {}, Artist> & Artist & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateArtist(id: string, body: ArtistDTO): Promise<import("mongoose").Document<unknown, {}, Artist> & Artist & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteArtist(id: string): Promise<import("mongoose").Document<unknown, {}, Artist> & Artist & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getArtistById(id: string): Promise<import("mongoose").Document<unknown, {}, Artist> & Artist & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
