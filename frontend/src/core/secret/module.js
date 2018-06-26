import {Record} from 'immutable';

export default class Secret extends Record {
  _id = -1;
  siteName = '';
  url = '';
  name = '';
  password = '';
  
  isShowPsd = false;
}
