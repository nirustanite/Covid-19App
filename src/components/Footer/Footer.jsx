import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    message: {
        color: "white",
        textAlign: "center"
    },
    footer: {
        backgroundColor: "black",
        padding: theme.spacing(3),
        marginTop: 'auto',
    },
}));


export default function Footer(){
    const classes = useStyles();
    return(
        <React.Fragment>
        <CssBaseline />
        <footer className={classes.footer}>
            <Container>
                <Typography variant="body1" className={classes.message}>
                    Stay safe !!! Stay Healthy !!! Beat the virus !!!
                </Typography>
            </Container>
        </footer>
        </React.Fragment>
    )
}