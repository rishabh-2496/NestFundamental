import { AristService } from "./artist.service";
import { ArtistDTO } from "./dto/create-artist.dto";
export declare class ArtistController {
    private artistService;
    constructor(artistService: AristService);
    findAllArtist(): void;
    createArtist(artist: ArtistDTO): Promise<{
        message: string;
        artist: import("mongoose").Document<unknown, {}, import("../entities/Artist").Artist> & import("../entities/Artist").Artist & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    updateArtist(artist: ArtistDTO, id: string): Promise<{
        message: string;
        artist: import("mongoose").Document<unknown, {}, import("../entities/Artist").Artist> & import("../entities/Artist").Artist & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getArtistById(id: string): Promise<{
        message: string;
        artist: import("mongoose").Document<unknown, {}, import("../entities/Artist").Artist> & import("../entities/Artist").Artist & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteArtist(id: string): Promise<{
        message: string;
        artist: import("mongoose").Document<unknown, {}, import("../entities/Artist").Artist> & import("../entities/Artist").Artist & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
