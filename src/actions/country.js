import * as actionTypes from './actionTypes';

export const countriesFetch = () => ({
   type: actionTypes.COUNTRIES_FETCH
})

export const countries = data => {
    return{
        type: actionTypes.COUNTRIES,
        data
    }
}