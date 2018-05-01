import {ajaxDel, ajaxPost} from '~/utils/ajaxUtil';

export function login(name, psd) {
  return ajaxPost('/session', {
    name,
    password: psd
  });
}

export function logout(){
  return ajaxDel('/session');
}
