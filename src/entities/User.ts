import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { Role } from 'src/auth/roles.enum'


@Schema()
export class User {
    @Prop({required: true})
    name: string
    @Prop({required:true, unique: true})
    email: string
    @Prop({required:true})
    password: string
    @Prop({type:[String],required:true,default:Role.User})
    roles: Role[]
}
export const UserSchema = SchemaFactory.createForClass(User);