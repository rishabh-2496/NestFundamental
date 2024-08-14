import { ArtistRepository } from "./artist.repository";
import { ArtistDTO } from "./dto/create-artist.dto";
export declare class AristService {
    private artistRepository;
    constructor(artistRepository: ArtistRepository);
    findAllArtist(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../entities/Artist").Artist> & import("../entities/Artist").Artist & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("../entities/Artist").Artist> & import("../entities/Artist").Artist & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../entities/Artist").Artist, "find", {}>;
    createArtist(artist: ArtistDTO): Promise<import("mongoose").Document<unknown, {}, import("../entities/Artist").Artist> & import("../entities/Artist").Artist & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateArtist(id: string, artist: ArtistDTO): Promise<import("mongoose").Document<unknown, {}, import("../entities/Artist").Artist> & import("../entities/Artist").Artist & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getArtistById(id: string): Promise<import("mongoose").Document<unknown, {}, import("../entities/Artist").Artist> & import("../entities/Artist").Artist & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteArtist(id: string): Promise<import("mongoose").Document<unknown, {}, import("../entities/Artist").Artist> & import("../entities/Artist").Artist & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
