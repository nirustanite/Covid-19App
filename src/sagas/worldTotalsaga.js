import request from 'superagent';
import { put } from 'redux-saga/effects';
import * as actions from "../actions/index";

export function* getWorldTotal(action){
    try{
        const response  = yield request.get("https://api.covid19api.com/world/total");
        console.log(response.body)
        yield put(actions.worldTotal(response.body))
    }
    catch(error){
        console.error(error);
    } 
}