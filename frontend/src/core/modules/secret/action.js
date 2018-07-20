import * as api from '../../api/secret';
import {getSecretList} from './selector';

export const types = {
  SET_SECRET_LIST: 'setSecretList',
  SET_SHOW_PSD_IDS: 'setShowPsdIds'
};

export function setShowPsdIds(ids) {
  return {
    type: types.SET_SHOW_PSD_IDS,
    payload: ids
  }
}

export function setSecretList(list) {
  return {
    type: types,
    payload: list
  };
}

export function fetchSecretList() {
  return (dispatch) => {
    return api.getSecretList()
      .then(list => {
        dispatch(setSecretList(list));
      });
  };
}

export function createSecret(name, psd, url, siteName) {
  return (dispatch, getState) => {
    return createSecret(name, psd, url, siteName)
      .then(secret => {
        const list = api.getSecretList(getState());
        const newList = list.unshift(secret);
        dispatch(setSecretList(newList));
      });
  };
}

export function updateSecret(id, name, psd, url, siteName) {
  return (dispatch, getState) => {
    return api.updateSecret(id, name, psd, url, siteName)
      .then(newSecret => {
        const list = getSecretList(getState());
        const index = list.findIndex(secret => secret.getId());
        const newList = list.update(index, newSecret);
        dispatch(setSecretList(newList));
      });
  };
}

export function delSecret(id) {
  return (dispatch, getState) => {
    return api.delSecret(id)
      .then(() => {
        const list = getSecretList(getState());
        const index = list.findIndex(secret => secret.getId());
        const newList = list.delete(index);
        dispatch(setSecretList(newList));
      });
  }
}
