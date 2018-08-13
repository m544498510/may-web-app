import {ajaxDel, ajaxGet, ajaxPost, ajaxPut} from '~/utils/ajaxUtil';
import Secret from '../models/secret';
import apiPaths from './apiPath';

export function getSecretList() {
  return ajaxGet(apiPaths.secret)
    .then(list => list.map(item => new Secret(item)));
}

export function createSecret(secret) {
  return ajaxPost(apiPaths.secret, secret)
    .then(item => new Secret(item));
}

export function updateSecret(secret) {
  return ajaxPut(apiPaths.secret, secret)
    .then(item => new Secret(item));
}

export function delSecret(id) {
  return ajaxDel(apiPaths.secret, {
    id
  });
}
