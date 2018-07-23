import { types } from './action';

const defaultState = {
  list: [],
  showPsdIds: [],
  
  keyword: ''
};

export default function (state = defaultState, { type, payload }) {
  switch (type) {
    case types.SET_SECRET_LIST:
      return Object.assign({}, state, {
        list: [...payload]
      });
    case types.SET_SHOW_PSD_IDS:
      return Object.assign({}, state, {
        showPsdIds: [...payload]
      });
    case types.SET_KEYWORD:
      return Object.assign({}, state, {
        keyword: payload
      });
    default:
      return state;
  }
}
