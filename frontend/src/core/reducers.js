import { combineReducers } from 'redux';
import reducer from './secret/reducer';

export default combineReducers({
  secret: reducer,
});
