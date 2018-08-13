import { ajaxDel, ajaxPost } from '~/utils/ajaxUtil';
import { setUserInfo, delUserInfo } from '~/utils/authUtils';
import apiPaths from './apiPath';

export function login(name, psd) {
  return ajaxPost(apiPaths.session, {
    name,
    password: psd,
  }).then((userInfo) => {
    setUserInfo(userInfo);
    return userInfo;
  });
}

export function logout() {
  return ajaxDel(apiPaths.session).then(() => {
    delUserInfo();
  });
}
