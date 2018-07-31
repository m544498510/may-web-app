import {ajaxDel, ajaxGet, ajaxPost, ajaxPut} from '~/utils/ajaxUtil';
import Secret from '../models/secret';

export function getSecretList() {
  return ajaxGet('/secrets')
    .then(list => list.map(item => new Secret(item)));
}

export function createSecret(secret) {
  return ajaxPost('/secret', secret)
    .then(item => new Secret(item));
}

export function updateSecret(secret) {
  return ajaxPut('/secret', secret)
    .then(item => new Secret(item));
}

export function delSecret(id) {
  return ajaxDel('/secret', {
    id
  });
}
