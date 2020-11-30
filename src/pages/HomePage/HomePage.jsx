import React from 'react';
import { WorldTotalContainer, CountryContainer } from 'Components/index';
import Page from '../Page';


const HomePage = () => {
    return(
        <React.Fragment>
            <Page>
                <WorldTotalContainer />
                <CountryContainer />
            </Page>
        </React.Fragment>
    )
}

export default HomePage;