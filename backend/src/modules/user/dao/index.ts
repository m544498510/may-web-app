import {model} from 'mongoose';
import {mongoSchema, IUser} from '../model';

const userModel = model<IUser>('User', mongoSchema);

export async function getUserList(): Promise<IUser[]> {
  return userModel.find().exec();
}

export function getUser(name: string, password: string): Promise<IUser | null> {
  return userModel.findOne({name, password}).exec();
}

export function getUserByName(name: string): Promise<IUser | null> {
  return userModel.findOne({name}).exec();
}

export function getUserById(id: string): Promise<IUser | null> {
  return  userModel.findById(id).exec();
}

export function createUser(name: string, password: string): Promise<IUser> {
  const newUser = new userModel({name, password});
  return newUser.save();
}

export async function updateUser(id: string, password: string): Promise<IUser | null> {
  const user = await userModel.findById(id).exec();
  if(user){
    user.set({password});
    return await user.save();
  } else {
    return null;
  }
}

export async function deleteUser(id: string): Promise<boolean> {
  const user = userModel.findById(id);
  if(user){
    const result = await user.remove();
    return result.n === 1 && result.ok === 1;
  }else{
    return false;
  }
}
