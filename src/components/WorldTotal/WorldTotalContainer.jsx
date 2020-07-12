import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import worldStore from 'Store/WorldTotal';
import  WorldTotal from './WorldTotal';

const WorldTotalContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(worldStore.actions.worldTotalFetch());
    },[]);

    return(
        <React.Fragment>
            <WorldTotal />
        </React.Fragment>
    )

} 

export default WorldTotalContainer;