import {ajaxDel, ajaxPost} from '~/utils/ajaxUtil';
import {setUserInfo, delUserInfo} from '~/utils/authUtils';

export function login(name, psd) {
  return ajaxPost('/session', {
    name,
    password: psd
  }).then((userInfo) => {
    setUserInfo(userInfo);
    return userInfo;
  });
}

export function logout() {
  return ajaxDel('/session').then(() => {
    delUserInfo();
  });
}
