import {model} from 'mongoose';
import {mongoSchema, ISecret} from "./model";

const secretModel = model<ISecret>('Secret', mongoSchema);

export function getSecretListByUser(userId: string):Promise<ISecret[]>{
  return secretModel.find({userId: userId}).exec();
}

export function createSecret(userId: string, name: string, password: string, url: string){

}
