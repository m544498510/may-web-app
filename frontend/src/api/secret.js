import { ajaxDel, ajaxGet, ajaxPost, ajaxPut } from '~/utils/ajaxUtil';

export function getSecretList() {
  return ajaxGet('/secrets');
}

export function createSecret(name, password, url) {
  return ajaxPost('/secret', {
    name,
    password,
    url,
  });
}

export function updateSecret(id, name, password, url) {
  return ajaxPut('/secret', {
    id,
    name,
    password,
    url,
  });
}

export function delSecret(id) {
  return ajaxDel('/secret', {
    id,
  });
}
