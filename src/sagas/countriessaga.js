import request from 'superagent';
import { put } from 'redux-saga/effects';
import * as actions from "../actions";
import {baseUrl} from '../constants';

export function* getCountries(action){
    try{
        const response  = yield request.get(`${baseUrl}/countries`);
        yield put(actions.countries(response.body))
    }
    catch(error){
        console.error(error);
    } 
}