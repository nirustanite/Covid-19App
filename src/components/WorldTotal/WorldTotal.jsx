import React from 'react';
import { useSelector } from 'react-redux';
import CountUp from 'react-countup';
import { Grid, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledGrid = styled(Grid)`
    text-align: center;
`;

const TotalConfirmedHeader = styled(Header)`
    color: red;
`;

const ConfirmCount = styled(CountUp)`
    font-size: 2em; 
    color: red;
`;

const DeathCount = styled(CountUp)`
    font-size: 2em; 
`;

const TotalRecoveredHeader = styled(Header)`
    color: green;
`;

const RecoveredCount = styled(CountUp)`
    font-size: 2em; 
    color: green;
`;

const WorldTotal = () => {
    const worldTotalData = useSelector(state => state.worldTotal);
    const worldTotal = worldTotalData.worldTotal;

   return(
       <React.Fragment>
        {worldTotal.TotalConfirmed ?  (
            <StyledGrid stackable columns={3}>
                <Grid.Column>
                    <TotalConfirmedHeader as="h1">Total Confirmed</TotalConfirmedHeader>
                    <ConfirmCount start={0} end={worldTotal.TotalConfirmed} duration={2.75} />
                </Grid.Column>
                <Grid.Column>
                    <Header as="h1">Total Deaths</Header>
                    <DeathCount start={0} end={worldTotal.TotalDeaths} duration={2.75} />
                </Grid.Column>
                <Grid.Column>
                    <TotalRecoveredHeader as="h1">Total Recovered</TotalRecoveredHeader>
                    <RecoveredCount start={0} end={worldTotal.TotalRecovered} duration={2.75} />
                </Grid.Column>
            </StyledGrid>
        ) : (
            <p>
                Loading ...
            </p>
        )}
       </React.Fragment>
   )
}


export default WorldTotal;
