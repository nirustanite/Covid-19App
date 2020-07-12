import { fork, all } from "redux-saga/effects";
import map from "lodash/map";

import worldTotal from './WorldTotal';
import countries from './Countries';

const combinedSagas = [
   worldTotal.saga,
   countries.saga
];

export default function* root() {
    yield all(map(combinedSagas, fork));
}