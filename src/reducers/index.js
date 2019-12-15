import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import detailReducer from './detailReducer';

export default combineReducers({
  main: mainReducer,
  detail: detailReducer
})
