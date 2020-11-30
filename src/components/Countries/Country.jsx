import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Table, Segment, Input, Icon} from 'semantic-ui-react';
import styled from 'styled-components';
import _ from 'lodash';
import Paginator from 'react-hooks-paginator';

import './Country.css';

const StyledSegment = styled(Segment)`
    padding-top: 30px;
`;

const StyledTable = styled(Table)`
    padding-top: 30px;
`

const Country = () => {

    const countryData = useSelector(state => state.countries.countries);

    const countriesList = countryData.Countries;
   
    const pageLimit = 9;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    
    let totalRecords = null;

    if(countriesList){
        totalRecords = countriesList.length;
    }

    useEffect(() => {
        if(!countriesList) return 
            setCurrentData(countriesList.slice(offset, offset + pageLimit));
    }, [offset, countriesList]);

    const formatNumber = (number) => {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    const onChange = (value) => {
        if (searchValue !== "") {
            let countryArray = countriesList && countriesList.filter((res) =>
                res.Country.toLowerCase().includes(value.toLowerCase())
            )
            setCurrentData(countryArray);
            totalRecords = countryArray.length;
           
        }
        else{
            totalRecords = countriesList.length;
        }
    }

    const updateSearchText = (e) => {
        setSearchValue(e.target.value);
        onChange(e.target.value);
    };

    return(
        <React.Fragment>
           <StyledSegment padded="very">
            <Input icon placeholder='Search...'>
                <input
                     type="text"
                     placeholder="Enter country name"
                     name="searchCountry"
                     onChange={updateSearchText}
                     value={searchValue}
                 />
                <Icon name='search' />
            </Input>
            <StyledTable basic="very" stackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Countries</Table.HeaderCell>
                            <Table.HeaderCell>New Confirmed</Table.HeaderCell>
                            <Table.HeaderCell>New Deaths</Table.HeaderCell>
                            <Table.HeaderCell>New Recovered</Table.HeaderCell>
                            <Table.HeaderCell>Total Confirmed</Table.HeaderCell>
                            <Table.HeaderCell>Total Deaths</Table.HeaderCell>
                            <Table.HeaderCell>Total Recovered</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {countryData.Global &&
                            <Table.Row>
                                <Table.Cell>
                                    Global
                                </Table.Cell>
                                <Table.Cell>
                                    {formatNumber(countryData.Global.NewConfirmed)}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatNumber(countryData.Global.NewDeaths)}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatNumber(countryData.Global.NewRecovered)}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatNumber(countryData.Global.TotalConfirmed)}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatNumber(countryData.Global.TotalDeaths)}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatNumber(countryData.Global.TotalRecovered)}
                                </Table.Cell>
                                <Table.Cell>
                                    
                                </Table.Cell>
                        </Table.Row>}
                        { currentData && currentData.map((country,i) => {
                            return <Table.Row key={i}>
                                <Table.Cell>
                                    {country.Country}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatNumber(country.NewConfirmed)}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatNumber(country.NewDeaths)}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatNumber(country.NewRecovered)}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatNumber(country.TotalConfirmed)}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatNumber(country.TotalDeaths)}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatNumber(country.TotalRecovered)}
                                </Table.Cell>
                            </Table.Row>
                        })}
                    </Table.Body>
                </StyledTable>
                {countriesList && <Paginator
                    totalRecords={totalRecords}
                    pageLimit={pageLimit}
                    pageNeighbours={1}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />}
           </StyledSegment>
           
        </React.Fragment>
    )
}

export default Country;