import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, minlength: 4, maxlength: 20 })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ select: false })
  refreshToken: string;

  @Prop({ select: false })
  refreshTokenExpirationDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);