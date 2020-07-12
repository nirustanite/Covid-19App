import { takeLatest, call, put } from "redux-saga/effects";
import {baseUrl} from '../../constants';
import request from 'superagent';


const types = { 
    WORLD_TOTAL_FETCH: 'WORLD_TOTAL_FETCH',
    WORLD_TOTAL: 'WORLD_TOTAL'
};


export const actions = {
    worldTotalFetch: () => ({
        type: types.WORLD_TOTAL_FETCH
    }),
    worldTotal: (data) => ({
        type: types.WORLD_TOTAL,
        data
    })
};

const initialState = {
    worldTotal : {},
    loading: false
};

export default function reducer(state=initialState, action){
    switch(action.type){
        case types.WORLD_TOTAL_FETCH:
            return {
                ...state,
               loading: true
            };
        case types.WORLD_TOTAL:
            return {
                ...state,
                worldTotal: action.data,
                loading: false
            };
        default:
            return state;
    }
}

//Sagas
export function* saga(){
    yield takeLatest(types.WORLD_TOTAL_FETCH,getWorldTotal);
}
 

export function* getWorldTotal(action){
    try{
        const response  = yield call(callWorldTotal);
        yield put(actions.worldTotal(response.body))
    }
    catch(error){
        console.error(error);
    } 
}
 
function callWorldTotal(){
     return request.get(`${baseUrl}/world/total`)
}
 
 
