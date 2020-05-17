import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import{ getWorldTotal } from './worldTotalsaga';
import { getCountries } from './countriessaga';

export function* watchWorldTotal(){
  yield takeEvery(actionTypes.WORLD_TOTAL_FETCH, getWorldTotal);
}

export function* watchCountries(){
  yield takeEvery(actionTypes.COUNTRIES_FETCH, getCountries);
}