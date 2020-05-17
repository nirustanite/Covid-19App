import React, { Component } from 'react';
import { Header, Footer, WorldTotalContainer } from './components/index';

export default class App extends Component{
    render(){
        return(
            <React.Fragment>
             
               <Header /> 
                  <WorldTotalContainer />
               <Footer />
               
            </React.Fragment>
        )
    }
}