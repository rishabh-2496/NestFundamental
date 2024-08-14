export declare class Artist {
    name: string;
    debutYear: Date;
    DOB: Date;
}
export declare const ArtistSchema: import("mongoose").Schema<Artist, import("mongoose").Model<Artist, any, any, any, import("mongoose").Document<unknown, any, Artist> & Artist & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Artist, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Artist>> & import("mongoose").FlatRecord<Artist> & {
    _id: import("mongoose").Types.ObjectId;
}>;
