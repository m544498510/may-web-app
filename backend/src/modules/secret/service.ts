import { ISecret, ISecretObj, Secret } from './model';
import * as secretDao from './dao';

export async function createSecret(secretCfg: ISecretObj): Promise<ISecret> {
  secretCfg.password = Secret.aesEncrypt(secretCfg.password);
  const newSecretCfg = await secretDao.createSecret(secretCfg);
  const secret = new Secret(newSecretCfg, Secret.secretTypes.encrypt);
  return secret.decryptInstance;
}

export async function getSecretList(userId: string): Promise<ISecret[]> {
  const list = await secretDao.getSecretListByUser(userId);
  list.forEach(item => {
    item.password = Secret.aesDecrypt(item.password);
  });
  return list;
}

export function updateSecret(secretId: string, cfg: ISecretObj): Promise<ISecret> {
  return secretDao.updateSecret(secretId, cfg);
}

export function deleteSecret(id: string): Promise<boolean> {
  return secretDao.deleteSecret(id);
}
