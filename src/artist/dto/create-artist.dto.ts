import { Type } from 'class-transformer'
import {IsString,IsNotEmpty, IsDate} from 'class-validator'

export class ArtistDTO{
    @IsString()
    @IsNotEmpty()
    readonly name: string
    @IsDate()
    @Type(() => Date)  
    @IsNotEmpty()
    readonly debutYear: Date
    @IsDate()
    @Type(() => Date)  
    @IsNotEmpty()
    readonly DOB: Date
}
