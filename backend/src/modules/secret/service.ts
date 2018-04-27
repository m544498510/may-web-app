import {createCipher, createDecipher} from 'crypto';

import {ISecret, Secret} from './model';
import * as secretDao from './dao';

export async function createSecret(secretCfg: ISecret): Promise<ISecret> {
  try {
    secretCfg.password = Secret.aesEncrypt(secretCfg.password);
    const newSecretCfg = await secretDao.createSecret(secretCfg);
    const secret = new Secret(newSecretCfg, Secret.secretTypes.encrypt);
    return secret.decryptInstence;
  } catch (e) {
    throw e;
  }
}

export async function getSecretList(userId: string): Promise<ISecret[]> {
  try {
    const list = await secretDao.getSecretListByUser(userId);
    list.forEach(item => {
      item.password = Secret.aesDecrypt(item.password)
    });
    return list;
  } catch (e) {
    throw e;
  }
}

export function updateSecret(cfg: ISecret): Promise<ISecret> {
  return secretDao.updateSecret(cfg);
}

export function deleteSecret(id: string): Promise<boolean> {
  return secretDao.deleteSecret(id);
}
