import _ from 'lodash';

import * as api from '../../api/secret';
import {getSecretList} from './selector';

export const types = {
  SET_SECRET_LIST: 'setSecretList',
  SET_SHOW_PSD_IDS: 'setShowPsdIds',
  SET_KEYWORD: 'setKeyword',
};

export function setShowPsdIds(ids) {
  return {
    type: types.SET_SHOW_PSD_IDS,
    payload: ids
  };
}

export function setSecretList(list) {
  return {
    type: types,
    payload: list
  };
}

export function setKeyword(keyword) {
  return {
    type: types.SET_KEYWORD,
    payload: keyword
  }
}

export function fetchSecretList() {
  return (dispatch) => {
    return api.getSecretList()
      .then(list => {
        dispatch(setSecretList(list));
      });
  };
}

export function createSecret(secret) {
  return (dispatch, getState) => {
    return api.createSecret(secret)
      .then(secret => {
        const list = api.getSecretList(getState());
        list.unshift(secret);
        dispatch(setSecretList(list));
      });
  };
}

export function updateSecret(secret) {
  return (dispatch, getState) => {
    return api.updateSecret(secret)
      .then(newSecret => {
        const list = getSecretList(getState());
        const index = list.findIndex(secret => secret.id === newSecret.id);
        list[index] = newSecret;
        dispatch(setSecretList(list));
      });
  };
}

export function delSecret(id) {
  return (dispatch, getState) => {
    return api.delSecret(id)
      .then(() => {
        const list = getSecretList(getState());
        _.remove(list, secret => secret.id === id);
        dispatch(setSecretList(list));
      });
  };
}
