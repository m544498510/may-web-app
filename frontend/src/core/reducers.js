import { combineReducers } from 'redux';
import {reducers as secretReducers} from './modules/secret/';

export default combineReducers({
  secret: secretReducers,
});
