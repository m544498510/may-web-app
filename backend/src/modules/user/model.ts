import {Document, Schema} from "mongoose";

export const mongoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
  }
});

export interface IUser extends Document {
  _id: string,
  name: string,
  password: string
}
