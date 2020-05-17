import { combineReducers } from 'redux';
import worldTotal from './worldTotal';
import countries from './countries';

export default combineReducers({
  worldTotal,
  countries
})