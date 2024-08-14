import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"


@Schema()
export class Artist {
    @Prop({required: true, unique:true})
    name: string;
    @Prop({required:true})
    debutYear: Date;
    @Prop({required:true})
    DOB: Date;
}

export const ArtistSchema = SchemaFactory.createForClass(Artist)
