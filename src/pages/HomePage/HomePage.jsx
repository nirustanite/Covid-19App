import React from 'react';
import styled from "styled-components";
import { WorldTotalContainer, CountryContainer } from 'Components/index';
import Page from '../Page';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const HomePage = () => {
    return(
        <React.Fragment>
            <Container>
                <Page>
                    <WorldTotalContainer />
                    <CountryContainer />
                </Page>
            </Container>
        </React.Fragment>
    )
}

export default HomePage;