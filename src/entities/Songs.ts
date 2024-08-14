import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Artist } from './Artist';
import mongoose from 'mongoose';

@Schema({})
export class Songs {
  @Prop({ required: true })
  title: string;
  @Prop()
  length: string;
  @Prop()
  genre: string;
  @Prop({default:Date.now})
  releaseDate: Date;
  @Prop({type:mongoose.Types.ObjectId, ref: 'Artist'})
  artist: Artist;
}

export const SongSchema = SchemaFactory.createForClass(Songs)