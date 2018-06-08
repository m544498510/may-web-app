const USER_KEY = 'USER_KEY';

export function getUserInfo() {
  const str = localStorage.getItem(USER_KEY);
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}

export function setUserInfo(userInfo) {
  const str = JSON.stringify(userInfo);
  localStorage.setItem(USER_KEY, str);
}

export function delUserInfo() {
  localStorage.removeItem(USER_KEY);
}
