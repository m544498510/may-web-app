import {createSelector} from 'reselect';

export function getModuleState(state) {
  return state.secret;
}

export function getOrgSecretList(state) {
  return getModuleState(state).list;
}

export function getShowPsdIds(state) {
  return getModuleState(state).showPsdIds;
}

export function getKeyword(state) {
  return getModuleState(state).keyword;
}

export const getSecretList = createSelector(
  getOrgSecretList,
  getKeyword,
  (list, keyword) => list.filter(
    secret => (
      secret.siteName.includes(keyword)
      || secret.name.includes(keyword)
      || secret.url.includes(keyword)
    )
  )
);
