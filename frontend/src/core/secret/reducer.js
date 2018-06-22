import { types } from './action';

const defaultState = {};

export default function (state = defaultState, { type }) {
  switch (type) {
    case types:
      return Object.assign({}, state, {

      });
    default:
      return state;
  }
}
