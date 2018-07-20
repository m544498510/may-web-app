import {ajaxDel, ajaxGet, ajaxPost, ajaxPut} from '~/utils/ajaxUtil';
import Secret from '../models/secret';

export function getSecretList() {
  return ajaxGet('/secrets')
    .then(list => list.map(item => new Secret(item)));
}

export function createSecret(name, password, url) {
  return ajaxPost('/secret', {
    name,
    password,
    url
  })
    .then(item => new Secret(item));
}

export function updateSecret(id, name, password, url) {
  return ajaxPut('/secret', {
    id,
    name,
    password,
    url
  })
    .then(item => new Secret(item));
}

export function delSecret(id) {
  return ajaxDel('/secret', {
    id
  });
}
