import {Document, Schema} from 'mongoose';
import {createCipher, createDecipher} from "crypto";

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

export interface ISecretObj {
  userId: string,
  url?: string,
  name: string,
  password: string
}

export interface ISecret extends Document, ISecretObj {
  _id: string,
}

enum secretTypes {
  encrypt,
  decrypt
}

const KEY = 'secret_key';

export class Secret {
  static secretTypes = secretTypes;


  private readonly _cfg: ISecret;

  private readonly encryptPsd: string;
  private readonly decryptPsd: string;

  constructor(cfg: ISecret, type: secretTypes) {
    this._cfg = cfg;

    if (type === secretTypes.encrypt) {
      this.encryptPsd = cfg.password;
      this.decryptPsd = Secret.aesDecrypt(cfg.password);
    } else if (type === secretTypes.decrypt) {
      this.encryptPsd = Secret.aesEncrypt(cfg.password);
      this.decryptPsd = cfg.password;
    } else {
      throw new Error('Unrecognized parameter type');
    }
  }

  public get encryptInstence(): ISecret {
    return Object.assign({}, this._cfg, {
      password: this.encryptPsd
    });
  }

  get decryptInstence(): ISecret {
    return Object.assign({}, this._cfg, {
      password: this.decryptPsd
    });
  }

  static aesEncrypt(data: string): string {
    const cipher = createCipher('aes192', KEY);
    let crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  }

  static aesDecrypt(encrypted: string): string {
    const decipher = createDecipher('aes192', KEY);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

}


