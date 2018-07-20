import { types } from './action';

const defaultState = {
  list: [],
  showPsdIds: [],
};

export default function (state = defaultState, { type, payload }) {
  switch (type) {
    case types.SET_SECRET_LIST:
      return Object.assign({}, state, {
        list: payload
      });
    case types.SET_SHOW_PSD_IDS:
      return Object
    default:
      return state;
  }
}
