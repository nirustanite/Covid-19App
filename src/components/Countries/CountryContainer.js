import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Country from './Country';

class CountryContainer extends React.Component{

    componentDidMount(){
        this.props.countriesFetch();
    }


    render(){
        return(
            <React.Fragment>
                <Country countrieslist={this.props.countries} />
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => {
    return{
        countries: state.countries
    }
}

const mapDispatchToProps = dispatch => {
    return{
        countriesFetch: () => dispatch(actions.countriesFetch())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountryContainer);