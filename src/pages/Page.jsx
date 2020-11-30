import React from "react";
import { Header } from "Components/index";
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding-top: 5em;
    padding-bottom: 5em;
`;

const Page = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <StyledContainer>{children}</StyledContainer>
        </React.Fragment>
    );
};

export default Page;
