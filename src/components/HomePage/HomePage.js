import React from 'react';
import { Header, Footer, WorldTotalContainer } from '../index';

export default function HomePage(){
    return(
        <React.Fragment>
            <Header />
                <WorldTotalContainer />
            <Footer />
        </React.Fragment>
    )
}