import { combineReducers } from 'redux';
import reducer from './modules/secret/reducer';

export default combineReducers({
  secret: reducer,
});
