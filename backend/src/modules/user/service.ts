import {createHmac} from 'crypto';

import {IUser} from './model';
import * as userDao from './dao';

const secretKey = 'SECRET_KEY';
const secretType = 'sha256';
const digestKey = 'hex';

export function getUser(name: string, password: string): Promise<IUser | null> {
  const secretFactory = createHmac(secretType, secretKey);
  const newPsd = secretFactory.update(password).digest(digestKey);
  return userDao.getUser(name, newPsd);
}

export async function createUser(name: string, password: string): Promise<IUser | null> {
  const user = await userDao.getUserByName(name);
  if(!user){
    const secretFactory = createHmac(secretType, secretKey);
    const newPsd = secretFactory.update(password).digest(digestKey);
    return userDao.createUser(name, newPsd);
  }else{
    return null;
  }
}
