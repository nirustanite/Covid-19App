import request from 'superagent';
import { put } from 'redux-saga/effects';
import * as actions from "../actions";
import {baseUrl} from '../constants';

export function* getWorldTotal(action){
    try{
        const response  = yield request.get(`${baseUrl}/world/total`);
        yield put(actions.worldTotal(response.body))
    }
    catch(error){
        console.error(error);
    } 
}