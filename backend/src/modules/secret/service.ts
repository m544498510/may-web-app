import {createCipher, createDecipher} from 'crypto';

import {ISecret, ISecretObj, Secret} from './model';
import * as secretDao from './dao';

export async function createSecret(secretCfg: ISecretObj): Promise<ISecret> {
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

export function updateSecret(secretId:string, cfg: ISecretObj): Promise<ISecret> {
  return secretDao.updateSecret(secretId, cfg);
}

export function deleteSecret(id: string): Promise<boolean> {
  return secretDao.deleteSecret(id);
}
