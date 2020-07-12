import { combineReducers } from "redux";

import worldTotal from './WorldTotal';
import countries from './Countries';

export default combineReducers({
    worldTotal: worldTotal.reducer,
    countries: countries.reducer
});