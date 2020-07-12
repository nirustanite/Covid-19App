import { takeLatest, call, put } from "redux-saga/effects";
import {baseUrl} from '../../constants';
import request from 'superagent';

const types = { 
    COUNTRIES_FETCH: 'COUNTRY_TOTAL_FETCH',
    COUNTRIES: 'COUNTRIES'
};

export const actions = {
    countriesFetch: () => ({
        type: types.COUNTRIES_FETCH
    }),
    countries: (data) => ({
        type: types.COUNTRIES,
        data
    })
};

const initialState = {
    countries: [],
    loading: false
};

export default function reducer(state=initialState, action){
    switch(action.type){
        case types.COUNTRIES_FETCH:
            return {
                ...state,
               loading: true
            };
        case types.COUNTRIES:
            return {
                ...state,
                countries: action.data,
                loading: false
            };
        default:
            return state;
    }
}

//Sagas
export function* saga(){
    yield takeLatest(types.COUNTRIES_FETCH,getCountries);
}
 

export function* getCountries(action){
    try{
        const response  = yield call(callCountries)
        yield put(actions.countries(response.body))
    }
    catch(error){
        console.error(error);
    } 
}
 

function callCountries(){
     return request.get(`${baseUrl}/countries`);
}