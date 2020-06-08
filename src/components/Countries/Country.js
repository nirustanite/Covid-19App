import React,{useState, useEffect} from 'react';
import Paginator from 'react-hooks-paginator';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import './Country.css';

const useStyles = makeStyles((theme) => ({

    cardGrid: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(10),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '2px 16px 48px',
        '&:hover':{
            backgroundColor: '#D3D3D3',
            cursor: 'pointer'
        },
        border: '3px solid black',
        borderRadius:'10px',
        backgroundColor: 'white'
    },
    
    details: {
        display: 'flex',
        flexDirection: 'row'
    },
    cardContent: {
        flexGrow: 1,
    },
    media:{
      backgroundColor: '#D3D3D3'
    },
    text:{
        fontWeight: 'bold'
    }
  }));



export default function Country(props){
    const classes = useStyles();
    const pageLimit = 9;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        if(!props.countrieslist) return 
            setCurrentData(props.countrieslist.slice(offset, offset + pageLimit));
    }, [offset, props.countrieslist]);


    return(
        <React.Fragment>
            <hr />
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {currentData.map((country,i) => (
                    <Grid item key={i} xs={8} sm={6} md={4}>
                    <Card className={classes.card}  boxShadow={1}>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="subtitle2" component="subtitle2" className={classes.text}>
                                {country.Country}
                            </Typography>
                            <Typography className={classes.text}>
                                {country.ISO2}
                            </Typography>
                        </CardContent>
                        <Avatar alt="flag" src={`https://www.countryflags.io/${country.ISO2}/flat/64.png`} variant="square" className={classes.media}/> 
                    </Card>
                    </Grid>
                ))}
            </Grid>
            </Container>
          <div>
           {props.countrieslist && <Paginator
           totalRecords={props.countrieslist.length}
           pageLimit={pageLimit}
           pageNeighbours={1}
           setOffset={setOffset}
           currentPage={currentPage}
           setCurrentPage={setCurrentPage}
           />}
           </div>
        </React.Fragment>
    )
}