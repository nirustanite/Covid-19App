import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import countriesStore from 'Store/Countries';
import Country from './Country';

const CountryContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(countriesStore.actions.countriesFetch());
    },[]);

    return(
        <React.Fragment>
            <Country />
        </React.Fragment>
    )
}

export default CountryContainer;
