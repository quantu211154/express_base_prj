import { Document, model, Schema } from 'mongoose'

export interface IUser {
  name: string
  createdAt?: Date
}

export interface IUserDocument extends IUser, Document {}

const UserSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false, // optionally remove __v field
  },
)

export const UserModel = model<IUserDocument>('User', UserSchema)
