import {model} from 'mongoose';
import {mongoSchema, ISecret, ISecretObj} from "./model";

const secretModel = model<ISecret>('Secret', mongoSchema);

export function getSecretListByUser(userId: string):Promise<ISecret[]>{
  return secretModel.find({userId: userId}).exec();
}

export async function createSecret(secretCfg: ISecretObj): Promise<ISecret>{
  const model = new secretModel(secretCfg);
  const secret = await model.save();
  if(secret){
    return secret;
  }else{
    throw new Error('create failed');
  }
}

export async function updateSecret(secretId: string, secret: ISecretObj): Promise<ISecret> {
  const oldSecret = await secretModel.findById(secretId).exec();
  if(oldSecret){
    oldSecret.set(secret);
    const newSecret = await oldSecret.save();
    if(newSecret){
      return newSecret;
    }else{
      throw 'save secret failed';
    }
  } else {
    throw new Error('can not find secret by id');
  }
}

export async function deleteSecret(id: string): Promise<boolean> {
  const secret = secretModel.findById(id);
  if(secret){
    const result = await secret.remove();
    if( result.n === 1 && result.ok === 1){
      return true;
    }else{
      throw new Error('delete failed');
    }
  }else{
    throw new Error('can not find secret by id');
  }
}

