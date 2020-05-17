import React,{useState, useEffect} from 'react';
import Paginator from 'react-hooks-paginator';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({

    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    details: {
        display: 'flex',
        flexDirection: 'row'
    },
    cardContent: {
        flexGrow: 1,
    },
  }));



export default function Country(props){
    console.log("props in country", props.countrieslist)
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
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {currentData.map((country,i) => (
                    <Grid item key={i} xs={8} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h6" component="h6">
                                {country.Country}
                            </Typography>
                            <Typography>
                                {country.ISO2}
                            </Typography>
                        </CardContent>
                        <Avatar alt="flag" src={`https://www.countryflags.io/${country.ISO2}/flat/64.png`} variant="square"/> 
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