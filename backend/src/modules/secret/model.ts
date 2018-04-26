import {Document, Schema} from 'mongoose';

export const mongoSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  url: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

export interface ISecret extends Document {
  _id: string,
  userId: string,
  url: string,
  name: string,
  password: string
}
