import React from 'react';
import './HomePage.css';
import { Header, Footer, WorldTotalContainer, CountryContainer } from '../index';

export default function HomePage(){
    return(
        <React.Fragment>
            <div className="container">
            <Header />
                <WorldTotalContainer />
                <CountryContainer />
            <Footer />
            </div>
        </React.Fragment>
    )
}