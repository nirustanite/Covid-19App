import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import{ getWorldTotal } from './worldTotalsaga';

export function* watchWorldTotal(){
  yield takeEvery(actionTypes.WORLD_TOTAL_FETCH, getWorldTotal);
}