import React from 'react';
import './HomePage.css';
import { Header, Footer, WorldTotalContainer, CountryContainer } from '../index';

export default function HomePage(){
    return(
        <React.Fragment>
            <div class="container">
            <Header />
                <WorldTotalContainer />
                <CountryContainer />
            <Footer />
            </div>
        </React.Fragment>
    )
}