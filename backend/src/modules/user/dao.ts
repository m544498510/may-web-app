import {model} from 'mongoose';
import {mongoSchema, IUser} from './model';

const userModel = model<IUser>('User', mongoSchema);

export async function getUserList(): Promise<IUser[]> {
  return await userModel.find();
}

export async function getUser(name: string, password: string): Promise<IUser | null> {
  const userList = await userModel.find({name, password});
  return userList[0] || null;
}

export async function getUserById(id: string): Promise<IUser | null> {
  return await userModel.findById(id);
}

export async function createUser(name: string, password: string): Promise<IUser> {
  const newUser = new userModel({name, password});
  return await newUser.save();
}

export async function updateUser(id: string, password: string): Promise<IUser | null> {
  const user = await userModel.findById(id);
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
