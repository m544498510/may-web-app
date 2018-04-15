import {createHmac} from 'crypto';

import {IUser} from './model';
import * as userDao from './dao';

const secretKey = 'SECRET_KEY';
const secretType = 'sha256';
const digestKey = 'hex';

export async function getUser(name: string, password: string): Promise<IUser | null> {
  const secretFactory = createHmac(secretType, secretKey);
  const newPsd = secretFactory.update(password).digest(digestKey);
  return await userDao.getUser(name, newPsd);
}

export async function createUser(name: string, password: string): Promise<IUser | null> {
  const secretFactory = createHmac(secretType, secretKey);
  const newPsd = secretFactory.update(password).digest(digestKey);
  return await userDao.createUser(name, newPsd);
}
