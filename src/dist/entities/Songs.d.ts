import { Artist } from './Artist';
import mongoose from 'mongoose';
export declare class Songs {
    title: string;
    length: string;
    genre: string;
    releaseDate: Date;
    artist: Artist;
}
export declare const SongSchema: mongoose.Schema<Songs, mongoose.Model<Songs, any, any, any, mongoose.Document<unknown, any, Songs> & Songs & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Songs, mongoose.Document<unknown, {}, mongoose.FlatRecord<Songs>> & mongoose.FlatRecord<Songs> & {
    _id: mongoose.Types.ObjectId;
}>;
