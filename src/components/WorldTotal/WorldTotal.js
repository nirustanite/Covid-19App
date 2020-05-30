import React from 'react';
import './WorldTotal.css';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-grid-system';

export default function WorldTotal(props){
   return(
       <React.Fragment>
       {props.total.TotalConfirmed && <Container className="gridcontainer">
           <Row className="row">
               <Col sm={4}>
                    <h1 className="col-1-h1">Total Confirmed</h1>
                   <CountUp start={0} end={props.total.TotalConfirmed} duration={2.75} className="counter1"/>
                </Col>
               <Col sm={4}>
                    <h1 className="col-2-h1">Total Deaths</h1>
                    <CountUp start={0} end={props.total.TotalDeaths} duration={2.75} className="counter2" />
               </Col>
               <Col sm={4}>
                    <h1 className="col-3-h1">Total Recovered</h1>
                    <CountUp start={0} end={props.total.TotalRecovered} duration={2.75} className="counter3" />
               </Col>
           </Row>
       </Container>}
       </React.Fragment>
   )
}

